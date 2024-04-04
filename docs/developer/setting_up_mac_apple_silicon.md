---
id: setting_up_mac_apple_silicon
title: Setting up a Rucio Developer environment on Mac with Apple Silicon
---

## Setting up a Rucio Developer environment on Mac with Apple Silicon

Currently Rucio packages and containers are only available for the `x86_64` architecture.

A Mac equipped with Apple Silicon can execute code compiled for the `x86_64` instruction set via a translation mechanism known as [Rosetta 2](https://support.apple.com/en-gb/guide/security/secebb113be1/web).

- To install Rosetta 2 run:

      /usr/sbin/softwareupdate --install-rosetta

This will initiate the Rosetta installer, and you will need to consent to a license agreement.

Make sure that [Docker Desktop](https://docs.docker.com/desktop/install/mac-install/) is installed and updated.

## Docker environment

In order to force Docker to run commands with platform `linux/amd64` instead of `linux/arm64` by default on macOS Apple Silicon, you have two options:

Set Docker default platform to `linux/amd64`:

    export DOCKER_DEFAULT_PLATFORM=linux/amd64

Or run it as part of the command a single time:

    DOCKER_DEFAULT_PLATFORM=linux/amd64 docker-compose -f <docker-compose-file.yml>
