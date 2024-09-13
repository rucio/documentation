---
id: kubernetes
title: Setting up Rucio on Kubernetes
---

## Helm charts

Helm charts help you define, install, and upgrade Kubernetes applications. In [this repository](https://github.com/rucio/helm-charts), you can find Helm charts for the major different components of Rucio.

## Tutorial

A tutorial for using Rucio with Kubernetes can be found [here](https://github.com/rucio/k8s-tutorial/blob/master/README.md)

## Example of Kubernetes deployment

[KM3NeT](https://www.km3net.org) runs Rucio on Kubernetes via [flux](https://fluxcd.io).
The configuration deployed on their Rucio server can be found [here](https://git.km3net.de/rucio/rucio-deployment).
The documentation of how this (specific) instance can be set up can be found in the [docs](https://rucio.pages.km3net.de/rucio-documentation/installation/)

## Bootstrapping the database

By default, no database is initialized when a new Rucio installation is set up.
An init container can be used to bootstrap the database on a Kubernetes cluster:

1. Create a `init-pod.yaml` file as in the snippet below, replacing the `<PASSWORD>` with the secret needed to connect to the database:

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
          value: tutorial
        - name: RUCIO_CFG_BOOTSTRAP_USERPASS_PWD
          value: secret1R
        - name: RUCIO_PRINT_CFG
          value: "true"
```

2. Start the init pod:

```
kubectl apply -f init-pod.yaml
```

For more information:
- [Rucio Kubernetes tutorial repository README](https://github.com/rucio/k8s-tutorial/blob/master/README.md)
- [Init container documentation](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)


## Upgrading the database

After the Rucio version has been upgraded, there might be database changes
that have to be done. These can be done on the `rucio-server` pod of the cluster and
are performed with the [Alembic](http://alembic.zzzcomputing.com/en/latest/) tool.

The alembic.ini template can be found
[here](https://github.com/rucio/rucio/blob/master/etc/alembic.ini.template).
Fill in the correct values before transferring the file to the `rucio-server` pod:

```
cat alembic.ini | kubectl exec -i rucio-server-<pod identifier> --container rucio-server -- tee /tmp/alembic.ini
```

Open a bash prompt on the pod

```
kubectl exec rucio-server-<pod identifier> --container rucio-server -it -- bash
```

Then perform the upgrade with the Alembic tool as described in the database [documentation](./database#upgrading-and-downgrading-the-database-schema)
