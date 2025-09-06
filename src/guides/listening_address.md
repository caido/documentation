# Changing the Listening Address/Port

By default, Caido listens on the IP address `127.0.0.1` and port `8080`. This means that Caido will only be accessible from the same device it is running on.

::: warning
Please note that if you change the listening address to something other than 127.0.0.1, Caido will be accessible from any device on the network, so it is important to consider the security implications of doing so.
:::

## Caido CLI

To change the listening address/port with the Caido CLI, launch Caido with the `-l <address:port>` or `--listen <address:port>` argument.

For example, to listen on all available network interfaces on port `8000`, enter:

```
caido -l 0.0.0.0:8000
```

## Desktop Application

To change the listening address/port within the Caido desktop application, in the launch window, **click** on the <code><Icon icon="fas fa-ellipsis-vertical" /></code> button attached to an instance and select `Edit`.

<img alt="The Edit instance option." src="/_images/launch_window_edit.png" center/>

Then, either:

- **Click** on a radio button under `Listening addresses` to select `Localhost (127.0.0.1)` or `All interfaces (0.0.0.0)`.
- Or **click** on the radio button for the `Custom` option and type in an address. Next, type a port number in the `Listening port` input field.

<img alt="The Edit instance option." src="/_images/launch_window_address_port.png" center/>

Once you have defined the listening address/port, **click** on the `Save` button to update and save the configuration.
