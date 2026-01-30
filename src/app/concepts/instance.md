---
description: "Understand the core concepts behind Caido instances - the client/server architecture, local vs remote instances"
---

# Instance

An Instance of Caido is effectively a directory on disk that contains the settings, projects, secrets, plugins, etc. that are created by Caido at runtime.

This abstraction allows you to manage multiple, separate instances of Caido on a single device.

## Local vs Remote

### Local Instances

A local instance runs on the same computer as you. Effectively, we will manage the [caido cli](./cli_vs_desktop.md) for you in the background.

Additional local instances can be created using either the standalone Caido CLI or desktop application by [changing the data storage location](/app/guides/data_location.md).

<img alt="Specifying a new local instance." src="/_images/new_local_instance.png" width=800px center/>

### Remote Instances

A remote instance runs on another computer that you can access over the network.

Additional instances can also be created for remote installations of the Caido CLI via the launch window of the desktop application.

<img alt="Specifying a new remote instance." src="/_images/new_remote_instance.png" center/>

## Client/server

When you start a Caido instance, you effectively start a server on a given port.

You can use either the Caido Desktop application or a browser to access that instance.

This is why we refer Caido has being built using a client/server architecture.

<img alt="Client/server architecture." src="/_images/client_server.png" width=800px center no-shadow/>
