---
description: "Understand the core concepts behind Caido instances - the client/server architecture, local vs remote instances, and instance management."
---

# Instances

Once Caido is installed, the data it generates is stored in a single directory. The default [data storage location](/reference/data_storage.md) on the file system of your device is dependent on the operating system.

In Caido, an "instance" is a reference to a data directory. meaning each instance is essentially a separate installation.

As Caido is built around a client/server architecture, each instance is granted a set of OAuth credentials by our cloud service that are used to authenticate the client (_desktop or web application_) to the server (_Caido CLI_).

<img alt="Client/server architecture." src="/_images/client_server.png" no-shadow/>

## Desktop Application

When you use the `Desktop Application`, you will see by default a `Local Instance`. This means that you will spawn a `Caido CLI` process locally on the given port and with the default [data path](/guides/data_location.md).

<img alt="Desktop application instances." src="/_images/instances_desktop.png" no-shadow/>

### Local

You can add instances with the `New instance` button, those can be other `Local` instances if you want to use another [data path](/guides/data_location.md) or port.

<img alt="New local instance." src="/_images/instances_local.png" center width="500"/>

### Remote

They can also be `Remote` instances if you just want to connect to an existing `Caido CLI` running somewhere else.

<img alt="New remote instance." src="/_images/instances_remote.png" center width="500"/>

## Dashboard

To manage your instances, you can head over to the [Dashboard](https://dashboard.caido.io/instances).

::: warning
If you delete an instance and try to login again, you will see the error ["Login URL generation failed"](http://localhost:3000/common_errors.html#login-url-generation-failed). You will need to reset the credentials.
:::

<img alt="Dashboard for instances." src="/_images/instances_dashboard.png"/>
