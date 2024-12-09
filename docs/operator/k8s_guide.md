---
id: k8s_guide
title: A Kubernetes tutorial
---
# Getting Started
:::warning[DISCLAIMER]
This tutorial contains some parts that are CERN-specific. <br/>
The tools utilised to set up and to run the cluster are chosen accordingly. Feel free to use your own.
:::

In order to efficiently manage the cluster and implement continuous delivery, the following tools are required.

- **Kubernetes**: `kubectl`
([Reference Documentation](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/)).
- **Helm Charts**
([Reference Documentation](https://helm.sh/docs/intro/install/#from-script)). <br/>
To install Helm, execute:
  ```bash
  curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3

  chmod 700 get_helm.sh

  ./get_helm.sh
  ```
  Also, add the `bitnami` repo: 
  ```helm
  helm repo add bitnami https://charts.bitnami.com/bitnami
  ```

  So that we can search the repo with `helm search repo bitnami`.

- **Continuous delivery**: `flux`
([Reference Documentation](https://fluxcd.io/flux/get-started/)).
  -  [Install the Flux CLI](https://fluxcd.io/flux/installation/#install-the-flux-cli)
      ```sh
      curl -s https://fluxcd.io/install.sh | sudo bash
      git status
      git add .
      git commit -m "first commit"
      git push
      ```
  -  [Bootstrap Flux](https://fluxcd.io/flux/cmd/flux_bootstrap_gitlab/)
Then setup the flux in the gitlab repo, by exporting the secret and running the command
      ```sh
      flux bootstrap gitlab \
        --owner=<group> \
        --repository=<repository name> \
        --branch=<main branch> \
        --path=<path> \
      ```
- **(optional) Monitoring**: `k9s`. <br/>
  Get the binary from [here](https://github.com/derailed/k9s/releases) looking for the proper dist; extract, and move to `/usr/local/bin/`.

# Setting up the CERN infrastructure
## Creating the Rucio cluster on Openstack
Please refer to the [documentation](https://kubernetes.docs.cern.ch/docs/getting-started/).

There are two kinds of operative components within the cluster: the *master* and the *worker* nodes:

- The master node hosts the Kubernetes control plane and manages the cluster, including scheduling and scaling applications and maintaining the state of the cluster. 
- The worker nodes are responsible for running the containers and executing the workloads. 

It is recommended to choose a master node with a sufficient amount of memory, e.g. `m2.large`.

The minimum working configuration consists of 1 master node and 5 worker nodes.

## Create the database with DBOD
Create a DataBase On Demand (DBOD) using the [DBOD dashboard](https://dbod.web.cern.ch/pages/dashboard);  `postgres` is highly recommended. 
- The operator will have to wait for the db to be approved. Will get a mail and will receive admin credentials (to be changed) as shown below.

Additional resources:
- https://github.com/vre-hub/vre/wiki/Software-components#2-database
- https://codimd.web.cern.ch/s/ZFIkp7PWG#2-Database-configuration

Once the db creation is finalised, we can use `psql`, to set up the credentials. 
In the following example, we chose the name `rucioitdb` for the database; in general, the naming of the DBOD instance is the operator's choice:
```sh
dnf install postgresql-server

psql -h dbod-rucioitdb.cern.ch -U admin -p <port> -c '\password'
```
Details about which port to connect to, etc can be found on the DBOD dashboard.

While inside the db instance, we can create the `rucio` user and db, and we can assign admin privileges to it:
```sql
CREATE ROLE rucio WITH LOGIN PASSWORD 'xxx';
ALTER GROUP rucio ADD USER admin;
CREATE DATABASE rucio;
```

Then, modify the `pg.hba.conf` configuration file on the DBOD dashboard with the following values, to allow `rucio` to access the db:

```
host	rucio		rucio		0.0.0.0/0	md5
```

### Bootstrapping the database
To bootstrap the db, there are two possibilities:
#### 1. The [Rucio DB init container](https://github.com/rucio/containers/tree/master/init)

```sh
docker run --rm \
  -e RUCIO_CFG_DATABASE_DEFAULT="postgresql://rucio:xxx@dbod-rucioitdb.cern.ch:<port>/rucio" \
  -e RUCIO_CFG_BOOTSTRAP_USERPASS_IDENTITY="admin" \
  -e RUCIO_CFG_BOOTSTRAP_USERPASS_PWD="xxx" \
  rucio/rucio-init
```

This command will setup all the necessary tables in the db, and additionally will create a rucio admin user. The admin user will be used when setting up rucio. ***Please take note of the username and passw.***

:::tip
Notice the syntax of `RUCIO_CFG_DATABASE_DEFAULT="postgresql://<db-user>:<passw>@<dbod-url>:<dobd-port>/<db-name>"`
:::
#### 2. The bootstrapping pod
Create a `init-pod.yaml` file and apply it as specified in the readme of the [k8s_tutorial](https://github.com/rucio/k8s-tutorial/blob/master/README.md), replace `<PASSWORD>` with the secret needed to connect to the database:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: init
  labels:
    app: rucio
spec:
  restartPolicy: Never
  containers:
    - name: init
      image: rucio/rucio-init:latest
      imagePullPolicy: Always
      env:
        - name: RUCIO_CFG_DATABASE_DEFAULT
          value: postgresql://rucio:<PASSWORD>@postgres-postgresql/rucio
        - name: RUCIO_CFG_DATABASE_SCHEMA
          value: test
        - name: RUCIO_CFG_BOOTSTRAP_USERPASS_IDENTITY
          value: admin
        - name: RUCIO_CFG_BOOTSTRAP_USERPASS_PWD
          value: xxx
        - name: RUCIO_PRINT_CFG
          value: "true"
```

And then apply the pod config:

```
kubectl apply -f init-pod.yaml
```
:::warning
Please notice that in this case, the various credentials will have to be properly stored as secrets. See the Managing Secrets section for more information.
:::

## Creating a LanDB set

>In order to [protect devices connected to the CERN network](https://security.web.cern.ch/services/en/firewall.shtml) from the regular attacks initiated from off-site, **incoming connections to all CERN devices are blocked** in the CERN outer perimeter firewall by default. In addition, source ports **0-1023/TCP and 0-1023/UDP (except 500/UDP) are blocked by default** for outgoing connections. Thus, users can initiate client applications (on so-called higher ports) but not expose server processes.

To comply with the CERN security rules, we need to use the so-called LANDB sets, where the firewall has static openings automatically set up. Usually, such sets are used for redudancy or large, homogeneous services. These sets are either managed by the Computer Security Team or by the service managers themselves.

Create a [new LanDB set](https://landb.cern.ch/portal/sets/create), following the recommendations: 
1. Type: Interdomain
2. Network Domain: GPN
3. Responsible: `<your-egroup>`
4. Description: use the following fields: 
```
OPENSTACK_PROJECT=cc059d57-6e98-4688-a3be-aae2b451868b,<your-openstack-project-ID>
```

:::tip[LoadBalancer tip]
The ID `cc059d57-6e98-4688-a3be-aae2b451868b` will allow the LoadBalancer as a Service (LBaaS) instance to [assign LoadBalancers to this set](https://clouddocs.web.cern.ch/networking/load_balancing.html#adding-load-balancer-to-landb-sets). In the specific case of the COMPASS rucio instance, the `openstack-landb-set-access` is being set as a member of the `rucio-it-admins` egroup.
Please refer to the LoadBalancers section for more information.
:::
![image](/img/landb-set-create.png)

# Populating the cluster
There are four main components that need to be installed in order to have the Rucio cluster operative:
1. Rucio Servers
2. Rucio Authentication
3. Rucio Daemons
4. Rucio Web UI

The following sections are based on the deployment of the [COMPASS Rucio instance](https://gitlab.cern.ch/rucio-it/flux-compass), within the CERN infrastructure.
## Managing secrets
### Sealed-Secrets
[Reference Documentation](https://github.com/bitnami-labs/sealed-secrets?tab=readme-ov-file#installation).
[Reference Helm chart](https://gitlab.cern.ch/rucio-it/flux-compass/-/blob/master/sync/sealed-secrets.yaml?ref_type=heads).

A very efficient way of managing secrets in the cluster is Bitnami's Sealed-Secrets. Install the Helm chart by executing:
```sh
helm repo add sealed-secrets https://bitnami-labs.github.io/sealed-secrets
rucio-helm-repo.yaml sealed-secrets.yaml

kubectl create namespace sealed-secrets

kubectl apply -f sealed-secrets.yaml 
```

An example of the `sealed-secrets.yaml` configuration file is provided below:
```yaml sealed-secrets.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: sealed-secrets
  labels:
    name: sealed-secrets
---
apiVersion: source.toolkit.fluxcd.io/v1beta1
kind: HelmRepository
metadata:
  name: sealed-secrets
  namespace: sealed-secrets
spec:
  interval: 5m
  url: https://bitnami-labs.github.io/sealed-secrets
---
apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease 
metadata:
  name: sealed-secrets
  namespace: sealed-secrets
spec:
  releaseName: sealed-secrets
  interval: 5m
  chart:
    spec:
      sourceRef:
        kind: HelmRepository
        name: sealed-secrets
        namespace: sealed-secrets
      chart: sealed-secrets
      interval: 5m
      version: 2.15.3
  values:
    fullnameOverride: "sealed-secrets-controller"
```

Notice that `yaml` files can be concatenated thanks to the `---` separator.

### Creating secrets for the cluster
[Reference secrets generation scripts](https://gitlab.cern.ch/rucio-it/flux-compass/-/blob/master/scripts?ref_type=heads).

The creation of secrets can be based on the following process:
```sh
#!/bin/bash

HELM_RELEASE="rucio-servers"
RAW_SECRETS_SERVERS="/root/compass-rucio-certs/servers"
# kubeseal controller namespace
CONTROLLER_NS="sealed-secrets"
CONTROLLER_NAME="sealed-secrets-controller" # This can be checked in k8s/Services

# rucio namespace
RUCIO_NS="rucio"

# Output dir
SECRETS_STORE="/root/flux-compass/SECRETS/"


# name of output secret to apply
OUTPUT_SECRET="ruciocompass-db.yaml"

kubectl create secret generic ${HELM_RELEASE}-server-hostcert --dry-run=client --from-file=${RAW_SECRETS_SERVERS}/hostcert.pem -o yaml | \
kubeseal --controller-name=${CONTROLLER_NAME} --controller-namespace=${CONTROLLER_NS} --format yaml --namespace=${RUCIO_NS} > ${SECRETS_STORE}/ss_${OUTPUT_SECRET}

kubectl apply -f ${SECRETS_STORE}/ss_${OUTPUT_SECRET}
```

Where:
- `HELM_RELEASE` is the name of the helm release that is being used.
- `RAW_SECRETS_SERVERS` is the path in which the files that will be used as secrets are stored
- `CONTROLLER_NS` is the namespace assigned to the secrets manager.
- `CONTROLLER_NAME` is the name of the secrets manager controller.
- `RUCIO_NS` is the namespace related to Rucio (in the COMPASS case, it is called `rucio`).
- `SECRETS_STORE` path to which the files containing the encrypted secrets will be stored. These files will be used by flux.

`kubectl create secret generic` Creates a secret from the specific file that needs to be transposed to a secret. 

Then `kubeseal` perform the encryption and the encoding, saving the secret to a file stored in `SECRETS_STORE`.
Finally, `kubectl apply` applies the secret to the cluster. Please notice that this is eventually also achieved via flux, by pushing the secret file to the repository.

:::tip[Secret tip]
IF `kubeseal` returns an error, it's probably because it's not installed:
```sh
wget https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.18.0/kubeseal-0.18.0-linux-amd64.tar.gz
tar xfz kubeseal-0.18.0-linux-amd64.tar.gz
sudo install -m 755 kubeseal /usr/local/bin/kubeseal
```
Adjust the version and the build details according to your machine.
:::
The content of the secret will be of this type: 
```yaml ss_rucio-servers-hostcert.yaml
apiVersion: bitnami.com/v1alpha1
kind: SealedSecret
metadata:
  creationTimestamp: null
  name: rucio-servers-hostcert
  namespace: rucio
spec:
  encryptedData:
    hostcert.pem: <encrypted secret>
  template:
    data: null
    metadata:
      creationTimestamp: null
      name: rucio-servers-hostcert
      namespace: rucio
```
## Rucio Servers
>The Rucio servers are the backbone of the Rucio system. They handle all core functionalities including data management, rule-based data replication, data placement, and monitoring. The servers ensure the integrity and availability of data across various storage systems.

In order to setup this service, four steps are needed:
1. Produce the Helm chart.
2. Setup the LoadBalancers (LBs).
3. Produce the certificates related to the `landb-alias` used.
4. Add the certificates as secrets and mount them on the k8s pods.

### Produce the Helm chart
Please look at the [currently used one](https://gitlab.cern.ch/rucio-it/flux-compass/-/blob/master/sync/rucio-servers.yaml?ref_type=heads).
A few remarks:

- The db secret is being mounted on `config.database.default` in order to allow the user to correctly access it.
- `hostcert.pem`, `hostkey.pem` and `ca.pem` are automatically detected, so they don't need to be mounted. Nevertheless, the corresponding secrets must be created (see next sections).
- The GridCA cert is needed to verify all the other certs. Please look at this [git commit](https://gitlab.cern.ch/rucio-it/flux-compass/-/commit/688da7285833dafd1bbe25469f35c6059d7af24f) used to set the `GridCA` file in `/etc/grid-security/certificate`.
  - Together with this, is also necessary to setup the correspoding variable `RUCIO_CA_PATH`
- The `RUCIO_SSL_PROTOCOL` variable must be explicitly set.

Please notice that in order to have LBs produced, ***the Helm chart must be applied***. 
This will come with several errors related to certificates, that will be fixed in the next steps.
### Setup the LB
The minimal configuration for LoadBalancers is the following:
```yaml
    service:
      type: LoadBalancer
      port: 443
      targetPort: 443
      protocol: TCP
      name: https
```
With respect to the [original Helm chart](https://github.com/rucio/helm-charts/blob/7f8a7d9fb9cbcd01d645f24523a173c7f53fb101/charts/rucio-server/values.yaml#L33), that employs the Kubernetes native [`ClusterIP`](https://kubernetes.io/docs/concepts/services-networking/cluster-ip-allocation/) service, this configuration exploits the CERN native LBaaS, and exposes it over HTTPS.
This setup will trigger the `openstack-cloud-controller-manager` pod, and will automatically instantiate the requested LBs.

Please notice that in order to have LBs, one must request a quota change to the openstack project:
![image](/img/get-lbs.png)

To check the status of the LBs, the CLI command can be used: 
```sh
openstack loadbalancer list
```

Then, a few attributes must be changed in order to obtain the necessary DNS:
```sh
openstack loadbalancer set --tag landb-set="RUCIO-IT" <lb-ID>
openstack loadbalancer set --tag landb-alias="compass-rucio.cern.ch" <lb-ID>
openstack loadbalancer set --description="compass-rucio.cern.ch" <lb-ID>
openstack loadbalancer set --tag main-user="rucio-it-admins" <lb-ID>
```

Now, the LB must be added to the LanDB set from the dashboard, under IP Addresses.
To do that, first retrieve the virtual IP address, `vip_address`, of the LB:
```sh
 openstack loadbalancer show <lb-ID> | grep vip_address
```

Then, retrieve the pointer to the LB, for instance:

```sh
host <vip_address>
222.xx.xxx.xxx.in-addr.arpa domain name pointer lbaas-xxx4a6c2-xxxx-xxxx-xxxx-59489ffd7xxx.cern.ch.
```
where `lbaas-xxx4a6c2-xxxx-xxxx-xxxx-59489ffd7xxx.cern.ch` represents the hostname of the LB.
Finally, add `lbaas-...cern.ch` to the list of allowed IP addresses in the LanDB set dashboard. Either the hostname or the `vip_address` used before can be used in the search bar.

### Produce the certificates related to the landb-alias
Read the [help page](https://ca.cern.ch/ca/Help/?kbid=021002) about Grid Host certs

Then, request a cert using [dedicated page](https://ca.cern.ch/ca/host/HostSelection.aspx?template=EE2Host&instructions=auto). 
In the current example, a cert for `compass-rucio.cern.ch` (corresponding to the LB `landdb-alias`) was requested:

:::tip[Certs pro move]
> Create a [grid Host certificate](https://ca.cern.ch/ca/host/Request.aspx?template=ee2host) linked to both servers and auth domains. If you need, you can specify Subject Alternative Names (SANs) for your certificate, in DNS format in the SAN box. Then you'll have one cert to rule them all:
![image](/img/grid-host-certs.png)
:::

#### Create the `host`, `key`, `ca` and `GridCA` files

As recommended in the [documentation](https://ca.cern.ch/ca/Help/?kbid=024100), extract the certificate (which contains the public key) and the private key, using:
```sh
openssl pkcs12 -in compass-rucio.p12 -clcerts -nokeys -out hostcert.pem

openssl pkcs12 -in compass-rucio.p12 -nocerts -nodes -out hostkey.pem

chmod 400 hostkey.pem 
chmod 644 hostcert.pem 
```
Notice that to avoid protecting the key with a passphrase, the `-nodes` option is specified. Moreover, the appropriate permissions (`400`: read by owner, `644`: read by anyone, written by owner) for the extracted files are set.

These files have to be stored in the same path as described by the `RAW_SECRETS_SERVERS` variable used in the secrets creation.
##### Important information about `ca.pem` and `GridCA.pem`
An additional file, `ca.pem` (i.e. `CERN-bundle.pem`) must be created. 

`CERN-bundle.pem` is a standard CA bundle provided by CERN, containing multiple CA certificates that CERN trusts. This file is used to verify the authenticity of other certificates within a secure communication process (e.g., SSL/TLS).

This file can be retrieved from lxplus:
```sh
cp /etc/pki/tls/certs/CERN-bundle.pem compass-rucio-certs/servers/ca.pem
```
The same goes for the `GridCA.pem` file: 
```sh
cp /etc/grid-security/certificates/CERN-GridCA.pem compass-rucio-certs/servers/GridCA.pem
```
This file is used for the Certification Authority issuing SHA-2 certificates for Grid usage (user, host and robot certificates), in compliance with [EUGridPMA](https://www.eugridpma.org/) policies.

### Add the certificates as secrets and mount them on the k8s pods
Now it is possible to run something similar to the [servers script](https://gitlab.cern.ch/rucio-it/flux-compass/-/blob/master/scripts/rucio-servers-secret.sh?ref_type=heads) to add all the secrets to the cluster.

The output should be of this form: 
```sh
Create and apply SERVER secrets
sealedsecret.bitnami.com/rucio-servers-server-hostcert configured
sealedsecret.bitnami.com/rucio-servers-server-hostkey configured
sealedsecret.bitnami.com/rucio-servers-server-cafile configured
.
.
.
```
The flux sync can be triggered by ***git pushing*** the content of the `SECRET` folder to the remote repository.
## Rucio Auth
[Reference Helm chart](https://gitlab.cern.ch/rucio-it/flux-compass/-/blob/master/sync/rucio-servers-auth.yaml?ref_type=heads).

>The authentication component of Rucio is responsible for securely verifying the identities of users and services attempting to access the Rucio system. It ensures that only authorised entities can perform actions within the system.

As for the servers, four steps are needed to deploy the authentication pod:
1. Produce the Helm chart.
2. Setup the LB.
3. Produce the certificates related to the `landb-alias` used.
4. Add the certificates as secrets and mount them on the k8s pods.

Based on the reference Helm chart, we can add a few remarks:

1. Explicitly mounting secrets for `hostcert`, `hostkey`, and `ca`, via `secretMounts`.
2. The `httpd` configuration block:
this block maps the certificate to an account name.
Setting up `x509` auth can be very tricky, please make sure that the [`grid_site_enabled`](https://github.com/rucio/containers/blob/b51bbceb5aab0a1e07d48845f295cbbb175bdcb9/server/rucio.conf.j2#L104) parameter is set on `True`. <br/>
This enables the `auth/x509_proxy` endpoint! <br/>
The endpoint can be tested by executing 
    ```sh
    curl -k https://compass-rucio.cern.ch/auth/x509_proxy
    ```

Another important change is related to the LB attributes:
```sh
openstack loadbalancer set --tag landb-set="RUCIO-IT" <lb-ID>
openstack loadbalancer set --tag landb-alias="compass-rucio-auth.cern.ch" <lb-ID>
openstack loadbalancer set --description="compass-rucio-auth.cern.ch" <lb-ID>
openstack loadbalancer set --tag main-user="rucio-it-admins" <lb-ID>
```
Here, the `landb-alias` attribute and the `description` have been changed with respect to servers. The choice of the alias must comply with the naming used while creating the host certificates.

## Rucio Daemons
[Reference Helm chart](https://gitlab.cern.ch/rucio-it/flux-compass/-/blob/master/sync/rucio-daemons.yaml?ref_type=heads).<br/>
[Reference installation guide](./installing_daemons.md).

>Daemons in Rucio are background processes that perform various maintenance and operational tasks. They ensure that the system operates smoothly and that data management policies are enforced continuously.

The description of the various daemons can be found in [here](https://rucio.github.io/documentation/bin/rucio-abacus-account).
### FTS renewal and delegation

> [FTS](https://cs3mesh4eosc.eu/technologies/file-transfer-service-fts) is an open source software for reliable and large-scale data transfers. It provides easy user interfaces for submitting transfers: Python CLI, Python Client, WebFTS and Web Monitoring. Checksums and retries are provided per transfer and it is a flexible tool due to its multiprotocol support (Webdav/https, GridFTP, xroot, SRM). It also allows parallel transfers optimization to get the most from network without burning the storages. 
#### How does FTS work: users' x509 certs

1. Users will have to pass their own x509 cert by setting its path in their rucio config.
2. Then, the x509 is used to map the cert to an identity that must be created within rucio, which corresponds to a user.
#### How does FTS work: service x509 cert

It is not the user's account that uploads, downloads, etc, but it's a ***service account*** that is set up normally by the collaboration or the team. 

Together with the service account, we also need the corresponding user <u>grid cert</u> that is split in `cert` and `key` and is passed to the `ftsRenewal` daemon, that renews it periodically through a [specific script](https://github.com/rucio/containers/blob/master/fts-cron/renew_fts_proxy.sh.j2):
```yaml
- secretName: fts-cert
  mountPath: /opt/rucio/certs/
- secretName: fts-key
  mountPath: /opt/rucio/keys/
```

#### How to connect to the proper VO?
[Reference documentation](./multi_vo_rucio.md).

:::tip[VO vs VOMS]
The VOMS (Virtual Organization Membership Service) is an attribute authority which serves as central repository for VO (Virtual Organization) user authorization information
:::
1. Specify which VO to use; in our case is `vo.compass.cern.ch`
2. If not present, create a config file for the VOMS in `/etc/vomses`.
In our case, looking at lxplus we have a file named `vo.compass.cern.ch-voms-compass-auth.cern.ch` that contains
```
"vo.compass.cern.ch" "voms-compass-auth.cern.ch" "443" "/DC=ch/DC=cern/OU=computers/CN=compass-auth.cern.ch" "vo.compass.cern.ch" "24"
```

So we need to create a secret with the proper content and ***mount*** it in the `ftsRenewal` daemon, under `/etc/vomses`:
```yaml
- secretName: voms-compass
  mountPath: /etc/vomses/
```

In this way, we'll get something like the following output from the cron-job:

```sh
renew-fts-proxy: =================== Delegating ========================    
renew-fts-proxy:  Proxy certificate file : /tmp/x509up
renew-fts-proxy:  User certificate file: /tmp/cert.pem
renew-fts-proxy:  User key file: /tmp/key.pem         
renew-fts-proxy: Output to /tmp/x509up  
renew-fts-proxy: Enter GRID pass phrase:
renew-fts-proxy: Your identity: /DC=ch/DC=cern/OU=Organic Units/OU=Users/CN=na58dst1/CN=698253/CN=Robot: compass production 
renew-fts-proxy: Using configuration file /root/.glite/vomses       
renew-fts-proxy: Using configuration file /etc/vomses 
renew-fts-proxy: .........+++           
renew-fts-proxy: ....................+++
renew-fts-proxy: Creating temporary proxy to /tmp/tmp_x509up_u0_317  Done 
renew-fts-proxy: Contacting  voms-compass-auth.cern.ch:443 [/DC=ch/DC=cern/OU=computers/CN=compass-auth.cern.ch] "vo.compass.cern.ch" Done   

renew-fts-proxy: Warning: WARNING: vo.compass.cern.ch : The validity period of the issued attributes has been shortened to the maximum allowed by this VOMS server

renew-fts-proxy: Creating proxy to /tmp/x509up        
renew-fts-proxy: No policy language specified, Gsi impersonation proxy assumed. Done            
       
renew-fts-proxy: Your proxy is valid until Fri May 31 15:49:15 2024 
renew-fts-proxy: Error: verification failed.          
         
renew-fts-proxy: User certificate: /tmp/x509up        
renew-fts-proxy: User private key: /tmp/x509up        
renew-fts-proxy: Loaded DC=ch, DC=cern, OU=Organic Units, OU=Users, CN=na58dst1, CN=698253, CN=Robot: compass production, CN=2643790443   
renew-fts-proxy: Loaded DC=ch, DC=cern, OU=Organic Units, OU=Users, CN=na58dst1, CN=698253, CN=Robot: compass production    
renew-fts-proxy: Using endpoint: https://fts3-pilot.cern.ch:8446    
renew-fts-proxy: REST API version: 3.13.0             
renew-fts-proxy: Delegation ID: ef1e8a8e094bde07      
renew-fts-proxy: No previous delegation found         
renew-fts-proxy: Delegating             
renew-fts-proxy: Signing request        
renew-fts-proxy: Delegation id: ef1e8a8e094bde07      
renew-fts-proxy: Termination time: 2024-05-31T15:49:15 
```

### Additional environment variables

```yaml
additionalEnvs:
  - name: USERCERT_NAME
    value: na58dst1.usercert.pem
  - name: USERKEY_NAME
    value: na58dst1.userkey.pem
  - name: RUCIO_FTS_SECRETS
    value: rucio-daemons-rucio-x509up
  - name: GRID_PASSPHRASE
    valueFrom:
    secretKeyRef:
      name: rucio-daemons-fts-passphrase
      key: passphrase
```

A diagram of how the proxy certificate is created and mounted on the daemons is displayed below: 

![image](/img/daemons-chart.png)
## Rucio UI
[Reference Helm Chart](https://gitlab.cern.ch/rucio-it/flux-compass/-/blob/master/sync/rucio-ui.yaml?ref_type=heads).

>The Rucio User Interface (UI) provides an accessible way for users to interact with the Rucio system. It allows users to manage data, set replication rules, and monitor data transfers and storage through a graphical or command-line interface.

As for Servers and Authentication, it is necessary to get the following components running:
- Dedicated LB: in the example, the domain associated with it is `compass-rucio-ui.cern.ch`
  - This value will be used in the `httpd` block: 
  ```yaml
  rucio_hostname: "compass-rucio-ui.cern.ch"
  ```
- Grid Host certificates for the domain.

The secrets are then mounted in the following block:
```yaml
secretMounts:
  - secretName: hostcert
  mountPath: /etc/grid-security/hostcert.pem
  subPath: hostcert.pem
  - secretName: hostkey
  mountPath: /etc/grid-security/hostkey.pem
  subPath: hostkey.pem
  - secretName: cafile
  mountPath: /etc/grid-security/ca.pem
  subPath: ca.pem
```
### Proxy block
These settings configure how the Rucio UI will connect to the main Rucio service and the authentication service through specified proxies.
```yaml
proxy:
  rucioProxy: "compass-rucio.cern.ch"
  rucioAuthProxy: "compass-rucio-auth.cern.ch"
  rucioAuthProxyScheme: "https"
```

# Setting up Rucio
## Installing `rucio-clients`
Please refer to the [installation page].

:::info[TL;DR]
`pip install rucio-clients`
:::
### Installing `gfal`

:::tip[Remember to install dependencies]
Install `gfal2` "properly":
https://dmc-docs.web.cern.ch/dmc-docs/gfal2-python/pip-install.html
AND install these plugins:
```
 sudo dnf install gfal2-plugin-srm
 sudo dnf install gfal2-plugin-xrootd
 sudo dnf install gfal2-plugin-mock
 sudo dnf install gfal2-plugin-file
 sudo dnf install gfal2-plugin-http
```
:::
## Creating the Rucio root account configuration file
This is the minimal setup for the configuration file (`rucio.cfg`):
```yaml
[client]
rucio_host = https://compass-rucio.cern.ch
auth_host = https://compass-rucio-auth.cern.ch
ca_cert = /etc/pki/tls/certs/CERN-bundle.pem
auth_type = userpass
account = root
username = admin
password = xxx
```
Where `username` and `password` are the ones created while bootstrapping the db.

To export the created configuration, execute:
```sh
export RUCIO_CONFIG=<path-to>/rucio.cfg
```
Then test it via `rucio whoami`.
### Optional: creating a rucio client user pod in the cluster
Look at the following commits to have an example of how to create a pod in the cluster that serves as u rucio user:
- [Creating a rucio client root account](https://gitlab.cern.ch/rucio-it/flux-compass/-/commit/7579ea6fee12609a419639d3a6390cf1f9f9ee63)
- [Creating secrets](https://gitlab.cern.ch/rucio-it/flux-compass/-/commit/7e3075f1161c5728ca7e7d485242e152975f8b7c)
  - Creating secrets for username, password, and cert bundle (that HAS to be the `CERN-bundle.pem` that we find in ``/etc/pki/tls/certs/CERN-bundle.pem`)

> [!tip] How to I pass a cert to a pod?
> Create a secret for the cert, and then mount the secret to a specific path, using `volumeMounts`: take a look below

```yaml
  volumes:
    - name: cern-bundle
      secret:
        secretName: rucio-root-account-cern-bundle
  containers:
  - name: rucio-client
    image: rucio/rucio-clients:release-34.0.0
    volumeMounts:
      - name: cern-bundle
        mountPath: "/etc/pki/tls/certs/CERN-bundle.pem"
        subPath: CERN-bundle.pem
        readOnly: true
```


## Rucio admin usage
The [`rucio-admin`](https://rucio.github.io/documentation/bin/rucio-admin) command can be used to setup the Rucio instance.
### Create the Rucio Storage Elements (RSEs)
```sh
rucio-admin rse add XRD1
rucio-admin rse add XRD2
rucio-admin rse add XRD3
```

### Add the protocol definitions for the storage servers
```sh
rucio-admin rse add-protocol --hostname xrd1 --scheme root --prefix //rucio --port 1094 --impl rucio.rse.protocols.gfal.Default --domain-json '{"wan": {"read": 1, "write": 1, "delete": 1, "third_party_copy_read": 1, "third_party_copy_write": 1}, "lan": {"read": 1, "write": 1, "delete": 1}}' XRD1
rucio-admin rse add-protocol --hostname xrd2 --scheme root --prefix //rucio --port 1094 --impl rucio.rse.protocols.gfal.Default --domain-json '{"wan": {"read": 1, "write": 1, "delete": 1, "third_party_copy_read": 1, "third_party_copy_write": 1}, "lan": {"read": 1, "write": 1, "delete": 1}}' XRD2
rucio-admin rse add-protocol --hostname xrd3 --scheme root --prefix //rucio --port 1094 --impl rucio.rse.protocols.gfal.Default --domain-json '{"wan": {"read": 1, "write": 1, "delete": 1, "third_party_copy_read": 1, "third_party_copy_write": 1}, "lan": {"read": 1, "write": 1, "delete": 1}}' XRD3
```
### Enable FTS
```sh
rucio-admin rse set-attribute --rse XRD1 --key fts --value https://fts:8446
rucio-admin rse set-attribute --rse XRD2 --key fts --value https://fts:8446
rucio-admin rse set-attribute --rse XRD3 --key fts --value https://fts:8446
```
Note that `8446` is the port exposed by the `fts-server` pod. You can easily view ports opened by a pod by `kubectl describe pod PODNAME`.
   
### Fake a full mesh network
This command will set the distance between RSEs to 1, in order to make transfers possible.
```sh
rucio-admin rse add-distance --distance 1 --ranking 1 XRD1 XRD2
rucio-admin rse add-distance --distance 1 --ranking 1 XRD1 XRD3
rucio-admin rse add-distance --distance 1 --ranking 1 XRD2 XRD1
rucio-admin rse add-distance --distance 1 --ranking 1 XRD2 XRD3
rucio-admin rse add-distance --distance 1 --ranking 1 XRD3 XRD1
rucio-admin rse add-distance --distance 1 --ranking 1 XRD3 XRD2
```
### Set indefinite storage quota for root
```sh
rucio-admin account set-limits root XRD1 -1
rucio-admin account set-limits root XRD2 -1
rucio-admin account set-limits root XRD3 -1
```

### Create a default scope for testing
```sh
rucio-admin scope add --account root --scope test
```

## Data management
### Create initial transfer testing data
```sh
dd if=/dev/urandom of=file1 bs=10M count=1
dd if=/dev/urandom of=file2 bs=10M count=1
dd if=/dev/urandom of=file3 bs=10M count=1
dd if=/dev/urandom of=file4 bs=10M count=1
```

### Upload the files
```sh
rucio upload --rse XRD1 --scope test file1
rucio upload --rse XRD1 --scope test file2
rucio upload --rse XRD2 --scope test file3
rucio upload --rse XRD2 --scope test file4
```

### Create a few datasets and containers
```sh
rucio add-dataset test:dataset1
rucio attach test:dataset1 test:file1 test:file2

rucio add-dataset test:dataset2
rucio attach test:dataset2 test:file3 test:file4

rucio add-container test:container
rucio attach test:container test:dataset1 test:dataset2
```

### Create a rule and remember returned rule ID

```
rucio add-rule test:container 1 XRD3
```

Query the status of the rule until it is completed. Note that the daemons are running with long sleep cycles (e.g. 30 seconds, 60 seconds) by default, so this will take a bit. You can always watch the output of the daemon containers to see what they are doing.

```sh
rucio rule-info <rule_id>
```

For this command, get the `rule_id` by,

```sh
rucio list-rules test:container
```

Add some more complications

```sh
rucio add-dataset test:dataset3
rucio attach test:dataset3 test:file4
```