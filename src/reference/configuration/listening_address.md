# Listening Address/Port

Caido, by default, listens on the IP address `127.0.0.1` and port `8080`. This means that Caido will only be accessible from the same machine it is running on.

However, you can change the listening address and port to suit your needs. There are two ways to change the listening address, depending on whether you are using the CLI or the desktop application.

::: warning
Please note that if you change the listening address to something other than 127.0.0.1, Caido will be accessible from any machine on the network, so it is important to consider the security implications of doing so.
:::

## Changing the Listening Address/Port: CLI

When using the CLI, you can update the listening address by using the `-l` or `--listen` option followed by the desired address and port in the format `ADDR:PORT`.

_Example: to listen on all available network interfaces on port 8000, use the following command:_

```
caido -l 0.0.0.0:8000
```

## Changing the Listening Address/Port: Desktop Application

Open the Connection Manager and proceed with the following steps:

<img alt="Connection manager instance more options." src="/_images/connection_manager_instance_more_options.png" center/>

1. Click on the `⋮` icon to the right of the Instance you want to apply a custom listening address to and select `Edit`.

<img alt="Connection manager instance edit." src="/_images/connection_manager_instance_edit.png" center/>

2. Select the appropriate radio button. _If using a_ `Custom` _listening address - supply the address in the input field._
3. Supply the value of the desired listening port.

## Proxying Local Traffic

By default, Chrome does not proxy traffic to localhost/127.0.0.1. In order to bypass this - try the following:

#### Use a local DNS record:

- [https://www.tecmint.com/setup-local-dns-using-etc-hosts-file-in-linux/](https://www.tecmint.com/setup-local-dns-using-etc-hosts-file-in-linux/)

#### Use lvh.me:

This domain name resolves to 127.0.0.1.

- [http://lvh.me/](http://lvh.me/)

#### Edit the proxy bypass rules:

Implicitly, localhost may be included as a proxy bypass address within the list of hosts used by your system/browser/extension. This can be overwritten by supplying `<-loopback>` (_the `-` character inverts the rule_).

- Launch Chrome via the terminal using `google-chrome --proxy-server=127.0.0.1:8080 --proxy-bypass-list="<-loopback>"`. If you customized the listening address/port of Caido - replace the values in the command to match. Click [here](https://chromium.googlesource.com/chromium/src/+/HEAD/net/docs/proxy.md#Overriding-the-implicit-bypass-rules) for more information.
- If you are using the FoxyProxy browser extension: select `Options` and add `<-loopback>` to the `Global Exclude` list.
- In general, this list can be modified in the proxy settings of different systems/browsers/extensions by supplying `<-loopback>` to the hosts list. This input field is usually accompanied with a title or description that includes key-terms/keywords such as: `except these addresses`, `no-proxy for`, `exclude`, etc.

#### Use the Firefox Browser:

::: info
If proxying localhost traffic is not working in Firefox as well:

- Navigate to `about:config`.
- Set `network.proxy.allow_hijacking_localhost` to `true`.
- Restart Firefox.
:::
