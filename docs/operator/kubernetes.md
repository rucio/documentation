---
id: kubernetes
title: Setting up Rucio on Kubernetes
---

## Helm Charts

Rucio has [helm charts](https://github.com/rucio/helm-charts) available to do a set up on kubernetes.

## Tutorial

A tutorial for using rucio with kubernetes can be found [here](https://github.com/rucio/k8s-tutorial/blob/master/README.md)

## Example of kubernetes deployment

[KM3NeT](https://www.km3net.org) runs rucio on kubernetes via [flux](https://fluxcd.io).
The configuration deployed on their rucio server can be found [here](https://git.km3net.de/rucio/rucio-deployment).
The documentation of how this (specific) instance can be set up can be found in the [docs](https://git.km3net.de/rucio/rucio-deployment/-/blob/main/docs/installation.md)

## Bootstrapping the database

By default no database is initialized when a new rucio installation is set up.
With this guide you can bootstrap the database on a kubernetes cluster.

Create a `init-pod.yaml` file and apply it as specified in the readme of the [k8s_tutorial](https://github.com/rucio/k8s-tutorial/blob/master/README.md), replace the `<PASSWORD>` with the secret needed to connect to the database:

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
```
kubectl apply -f init-pod.yaml
```

## Upgrading the database

After the rucio version has been upgraded, there might be database changes
that have to be done. These can be done on the `rucio-server` pod of the cluster and
are performed with the [Alembic](http://alembic.zzzcomputing.com/en/latest/) tool.

The alembic.ini template can be found
[here](https://github.com/rucio/rucio/blob/master/etc/alembic.ini.template).
A kubernetes+postgresql specific version can be found in the KM3NeT example
[here](https://git.km3net.de/rucio/rucio-deployment/-/blob/main/docs/alembic.ini).
Fill in the correct values before transferring the file to the `rucio-server` pod:

```
cat alembic.ini | kubectl exec -i rucio-server-<pod identifier> --container rucio-server -- tee /tmp/alembic.ini
```

Open a bash prompt on the pod

```
kubectl exec rucio-server-<pod identifier> --container rucio-server -it -- bash
```

Then perform the upgrade with the Alembic tool as described in the database [documentation](./database#upgrading-and-downgrading-the-database-schema)
