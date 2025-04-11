---
id: policy-package-deployment
title: Deploying a Policy Package
---

Broadly speaking, three things must happen in order for a policy
package to be deployed successfully:

1. The policy package code must be available to the Rucio server
   (and possibly other components such as daemons).
1. The directory containing the policy package must be in the server's
   `PYTHONPATH`.
1. Rucio must be configured to find the policy package.

## Deploying a policy package

The table below describes the different approaches you can use to deploy a policy package.

| Approach / columns                         	| Ease of setup 	| Amount of work needed for new Rucio and new policy package versions          	| Extra external dependencies at runtime                                                                                            	|
|--------------------------------------------	|---------------	|------------------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------	|
| Kubernetes init container                  	| Easy          	|                                                                              	| Index (e.g. PyPI) or Git registry (e.g. GitLab) in question (if a new policy package version is released)                         	|
| Pass build argument to Dockerfile          	| Easy          	| - Building + hosting the image yourself - Rebuilding the image - Redeploying 	| Registry where you host the image  (no more risk than what is already there,  assuming your registry is as reliable as DockerHub) 	|
| Generate YAML and add as Kubernetes secret 	| Medium        	| - Need to duplicate actual policy package content into configuration         	| None                                                                                                                              	|

### Deploying via Kubernetes init container
In the `values.yaml` for `server` and `daemons` (and optionally for `ui` / `webui`), under `policyPackages`:
1. Set `policyPackages.enabled` to `true`
2. List your policy packages under `policyPackages.packages` in the following format:
```
    example: install from an index (default is PyPI)
    - moduleName: vo_1_policy_package
      requirement: vo_1_policy_package==1.4.0
      version: 1.4.0
    example: install from a git repository
    - moduleName: vo_2_policy_package
      requirement: git+https://github.com/vo-2/vo-2-policy-package@v0.1.0
      version: 0.1.0
```
3. (Optional) set `policyPackages.pvc.createPvc` to true to create a PVC for the policy packages; leave false if providing it separately.

### Deploying via Dockerfile build argument
1. In the `server`, `clients`, `daemons`, `ui` and `init` containers, pass the `POLICY_PACKAGE_REQUIREMENTS` build argument. Example:
Example:
```
docker build -t server --build-arg POLICY_PACKAGE_REQUIREMENTS=vo_1_policy_package==0.4.0,git+https://github.com/vo-2/vo-2-policy-package@v0.1.0
```

### Deploying via Kubernetes secret
You can generate `yaml` for all the files included in your policy package,
and add them as Kubernetes secrets.
You can find information in the [Kubernetes guide](operator/k8s_guide.md) on how to create and manage secrets.

This process can be somewhat automated by having a cronjob that creates the secret policy and applies it.


## Configuring Rucio to find a policy package
To configure Rucio, you should either:
1. Modify the configuration file, by adding the package name as `package = name` in
the `[policy]` section, or
2. Setting the the package name in the `RUCIO_POLICY_PACKAGE`
environment variable.

When deploying using Kubernetes and Helm charts, it is possible to specify
configuration options in `values.yaml`. Values included in the `config:`
section of this file are automatically merged into `rucio.cfg` by the
`docker-entrypoint.sh` script, so the policy package can be set as:

```yaml
config:
  policy:
    package: name
```
