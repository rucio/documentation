---
id: administration
title: Rucio Administration Tricks
sidebar_label: Administration Tricks
---

## Rucio container code hot-patching

The Rucio official containers provide a way to hotpatch the source code
before running Rucio. This behavior may be used to rapidly fix a production
deployment without having to wait for the change to be merged and released by
the Rucio team.

The behavior is very simple: any file found in the `/patch/*` directory inside
the containers will be fed to the `patch` command-line tool in the order
returned by this glob matching.

The procedures described below are only intended for temporary fixes. If a
permanent change is needed, we highly encourage you to open a pull request
in Rucio to spare you the toil related to maintaining your own local patch set.

### Creating a patch from existing pull request

Lets assume you run Rucio `1.27.3` in production, and you realize there is
a bug in the `conveyor-poller` daemon. You contact the Rucio team and are
told that a fix was already done in the pull request
[#5246](https://github.com/rucio/rucio/pull/5246/commits)
and will be released next week. Follow
the following steps to create a patch file from this pull request without
having to wait for the next Rucio release to fix your issue:

Clone the main Rucio repository:

```bash
git clone https://github.com/rucio/rucio.git
cd rucio
# Create a new branch from the 1.27.3 release tag
git checkout 1.27.3 -b patch-0-hotfix_conveyor_poller_on_1.27.3
```

The #5246 pull request was submitted by the user `rcarpa` from his Rucio
fork [rcarpa/rucio](https://github.com/rcarpa/rucio). You'll have to add
this fork repository as a git remote:

```bash
git remote add rcarpa https://github.com/rcarpa/rucio.git
git fetch rcarpa
# Cherry-pick the commit from the #5246 pull request.
# Beware, some PR can have multiple commits
git cherry-pick 47d36345469ac9c1391cacd09487d4ec6ced627f
```

Now you can create the patch with the differences between the Rucio 1.27.3
release and the current state of the repository:

```bash
git diff 1.27.3 > hotfix_conveyor_poller.patch
```

### Mounting a patch in a kubernetes cluster

If you deploy Rucio in a kubernetes cluster using the official Rucio
[helm charts](https://github.com/rucio/helm-charts/) and want to hotfix
Rucio using a patch file created in the previous section, follow these steps:

Create a kubernetes secret from the hotfix patch:

```bash
kubectl --namespace rucio create secret generic hotfix-conveyor-poller-patch --from-file=hotfix_conveyor_poller.patch
```

*Note:* if you have more than one cluster, don't forget to create the
secrets in each cluster to be patched.

Now you'll have to update the helm `values` file for each helm release and
add the following

```yaml
    secretMounts:
      - secretFullName: hotfix-conveyor-poller-patch
        mountPath: /patch/hotfix_conveyor_poller.patch
        subPath: hotfix_conveyor_poller.patch
```
