---
id: main_components
title: Main Components
---

Rucio is based on a distributed system architecture & can be sectioned into four
major layers:

## Clients

The clients layer consists of components such as the command line clients (CLI),
Python clients, and the Javascript-based web user interface and configuration.

## Server

The server layer serves the purpose of authentication & provides a common API
for interaction with clients & other external application, as also the Web UI.
It is a passive component which receives incoming queries and forward them to 
the core. For any general user who wants to access the Rucio WebUI, one must 
fork the WebUI repository (https://github.com/rucio/webui) and after follwing
the guidelines mentioned specifically in 
https://github.com/rucio/webui#getting-started-with-create-react-app one must follow 
these credentials to login for a root user (username and password).

![image](https://user-images.githubusercontent.com/77008026/222405999-997e93ca-1c83-42b9-8013-bbce572273f6.png)



## Core

This layer consists of all the Rucio-level abstractions that are explained at
length in the Concepts section.

## Daemons

The daemons layer takes care of all the asynchronous & continuous workflows in
the background.

A diagrammatic representation of the 4 layers is as shown below

![image](/img/architecture.png)

To learn more about each of these layers in detail, download our [peer reviewed
scientific paper](https://link.springer.com/article/10.1007/s41781-019-0026-3).
