---
description: "Understand the core concepts behind Caido instances - the client/server architecture, local vs remote instances, and instance management."
---

# Instances

We use the concept of an `instance` to refer approximately to an installation of Caido.

To be precise, an instance is the set of files contained in the the [data location](/guides/data_location.md), thus you can have _multiple_ Caido instances on one machine if you change the data path.

## Why?

First, let's revisit the fact that Caido is built around a `client/server` architecture. This means you can deploy the `Caido CLI` anywhere (like on [VPS](/guides/vps.md) or on [Docker](/guides/docker.md)). We thus need some form of _access control_ to authenticate the client (`Browser` or `Desktop Application`) that connects to that server.

You can find all details in our [guide on the topic](/concepts/internals/authentication.md), but in essence each instance is tied to your account so only you can access it (sharing will be added eventually). Each instance has a set of OAuth credentials given to it by our cloud service that it uses to identify itself when communicating with us.

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
If you delete an instance and try to log-in again, you will see the error ["Login URL generation failed"](http://localhost:3000/common_errors.html#login-url-generation-failed). You will need to reset the credentials.
:::

<img alt="Dashboard for instances." src="/_images/instances_dashboard.png"/>
