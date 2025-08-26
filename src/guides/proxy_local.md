# Proxying Local Traffic

When running a web page or web application locally, Caido may not be capturing the traffic due to what is known as **implicit bypass rules**. These rules match URLs whose host portion is either a localhost name or a link-local IP literal. If a match is detected - requests will not be routed through a proxy and are instead sent directly.

Implicit bypass rules match against the following:

- localhost

- *.localhost [::1]

- 127.0.0.1/8

- 169.254/16

- [FE80::]/10

## Resolutions

If you are having issues proxying localhost traffic - try the following:

#### Use lvh.me:

This domain name resolves to 127.0.0.1.

- [http://lvh.me/](http://lvh.me/)

#### Edit the proxy bypass rules:

By default, localhost may be included as a proxy bypass address within the list of hosts used by your system/browser/extension. This can be overwritten by supplying `<-loopback>` (_the `-` character inverts the rule_).

- Launch Chrome via the terminal using:

```
google-chrome --proxy-server=127.0.0.1:8080` --proxy-bypass-list="<-loopback>"
```

::: tip
If you customized the listening address/port of Caido - replace the values in the command to match. [View the Chromium documentation for more information.](https://chromium.googlesource.com/chromium/src/+/HEAD/net/docs/proxy.md#Overriding-the-implicit-bypass-rules)
:::

- If you are using the FoxyProxy browser extension: select `Options` and add `<-loopback>` to the `Global Exclude` list.
- In general, this bypass list can be modified in the proxy settings of different systems/browsers/extensions by supplying `<-loopback>` to the hosts list. This input field is usually accompanied with a title or description that includes key-terms/keywords such as: `except these addresses`, `no-proxy for`, `exclude`, etc.

#### Use the Firefox Browser:

::: info
If proxying localhost traffic is not working in Firefox as well:

- Navigate to `about:config`.
- Set `network.proxy.allow_hijacking_localhost` to `true`.
- Restart Firefox.
:::
