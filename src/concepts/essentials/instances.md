# Instances

We use the concept of an `Instance` to refer approximately to an installation of Caido.

To be precise, an Instance is the set of files contained in the the [data location](/reference/configuration/data_location.md), thus you can have _multiple_ Caido Instances on one machine if you change the data path.

## Why?

First, let's revisit the fact that Caido is built around a `client/server` architecture. This means you can deploy the `Caido CLI` anywhere (like on [VPS](/guides/user_guide/vps.md) or on [Docker](/guides/user_guide/docker.md)). We thus need some form of _access control_ to authenticate the client (`Browser` or `Desktop Application`) that connects to that server.

You can find all details in our [guide on the topic](/concepts/internals/authentication.md), but in essence each Instance is tied to your account so only you can access it (sharing will be added eventually). Each Instance has a set of OAuth credentials given to it by our cloud service that it uses to identify itself when communicating with us.

<img alt="Client/server architecture." src="/_images/client_server.png" no-shadow/>

## Desktop Application

When you use the `Desktop Application`, you will see by default a `Local Instance`. This means that you will spawn a `Caido CLI` process locally on the given port and with the default [data path](/reference/configuration/data_location.md).

<img alt="Desktop application Instances." src="/_images/instances_desktop.png" no-shadow/>

### Local

You can add Instances with the `New instance` button, those can be other `Local` Instances if you want to use another [data path](/reference/configuration/data_location.md) or port.

<img alt="New local Instance." src="/_images/instances_local.png" center width="500"/>

### Remote

They can also be `Remote` Instances if you just want to connect to an existing `Caido CLI` running somewhere else.

<img alt="New remote Instance." src="/_images/instances_remote.png" center width="500"/>

## Dashboard

To manage your Instances, you can head over to the [Dashboard](https://dashboard.caido.io/instances).

::: warning
If you delete an Instance and try to log-in again, you will see the error ["Login URL generation failed"](http://localhost:3000/common_errors.html#login-url-generation-failed). You will need to reset the credentials.
:::

<img alt="Dashboard for Instances." src="/_images/instances_dashboard.png"/>
