---
description: "A step-by-step guide to proxying local traffic in Caido using FoxyProxy, Chrome, Firefox, and lvh.me domain to bypass localhost bypass rules."
---

# Proxying Local Traffic

To proxy local traffic, it is necessary to bypass implicit rules that match against localhost addresses using a method mentioned below.

## FoxyProxy

**Click** on the FoxyProxy browser extension, select `Options`, type `<-loopback>` to the `Global Exclude` input field, and **click** on the `Save` button to update and save the configuration.

<img alt="The Global Exclude list." src="/_images/foxyproxy_loopback.png" center/>

## ZeroOmega

**Click** on the ZeroOmega browser extension, select `Options`, select your proxy profile tab, replace the content of the `Bypass List` input field with `<-loopback>`, and **click** on the <code><Icon icon="fas fa-circle-check" /> Apply changes</code> button to update and save the configuration.

<img alt="The Global Exclude list." src="/_images/zeroomega_loopback.png" center/>

::: info
In general, the implicit bypass rules can be modified in the proxy settings of different systems/browsers/extensions by supplying `<-loopback>` to the hosts list. This input field is typically accompanied with a title or description that includes terms or keywords such as: `except these addresses`/`no-proxy for`/`exclude`.
:::

## Chrome

Launch Chrome via the terminal with the `--proxy-server=<address:port>` and `--proxy-bypass-list="<-loopback>"` command-line options.

```bash
google-chrome --proxy-server=127.0.0.1:8080` --proxy-bypass-list="<-loopback>"
```

## Firefox

Launch Firefox, navigate to `about:config`, set `network.proxy.allow_hijacking_localhost` to `true`, and restart the browser.

<img alt="The Firefox configuration page." src="/_images/firefox_localhost.png" center/>

## lvh.me

Navigate to [http://lvh.me/](http://lvh.me/). This domain name resolves to 127.0.0.1.
