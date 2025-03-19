# Changing the Listening Address/Port

Caido, by default, listens on the IP address `127.0.0.1` and port `8080`. This means that Caido will only be accessible from the same machine it is running on.

However, you can change the listening address and port to suit your needs. There are two ways to change the listening address, depending on whether you are using the CLI or the desktop application.

Since we use a single port, we use a [traffic splitting algorithm](/concepts/proxying/traffic_splitting.md) to determine the upstream of a given request.

::: warning
Please note that if you change the listening address to something other than 127.0.0.1, Caido will be accessible from any machine on the network, so it is important to consider the security implications of doing so.
:::

## Changing the Listening Address/Port: CLI

When using the CLI, you can update the listening address by using the `-l` or `--listen` option followed by the desired address and port in the format `ADDR:PORT`.

_Example: to listen on all available network interfaces on port 8000, use the following command:_

```
caido -l 0.0.0.0:8000
```

### Adding other Listeners

To add other listeners you have to use the follow arguments, you can repeat them as many times as you need:

- `--ui-listen <IP:PORT>`: This will listen on the given address ONLY for the UI/GraphQL API
- `--proxy-listen <IP:PORT>`: This will listen on the given address ONLY for the proxy

::: info
Currently we do not offer the multi-listeners configuration in the Desktop application.
:::

## Changing the Listening Address/Port: Desktop Application

Open the Connection Manager and proceed with the following steps:

<img alt="Connection manager instance more options." src="/_images/connection_manager_instance_more_options.png" center/>

1. Click on the `⋮` icon to the right of the Instance you want to apply a custom listening address to and select `Edit`.

<img alt="Connection manager instance edit." src="/_images/connection_manager_instance_edit.png" center/>

2. Select the appropriate radio button. _If using a_ `Custom` _listening address - supply the address in the input field._
3. Supply the value of the desired listening port.
