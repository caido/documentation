---
description: "Map Burp Suite Pro browser, mobile, and setup features to Caido."
---

# Browser & Setup

Burp Suite Pro browser integration, transport, and setup features and their Caido equivalents.

## Available

### Testing mobile applications

Burp proxies traffic from iOS and Android devices through the intercepting proxy.

Caido supports proxying mobile device traffic the same way as Burp: install Caido's CA certificate on the device and point the proxy settings to your Caido instance. Caido supports mobile proxying natively through its listening proxy.

#### Resources

- [Setup](/app/quickstart/setup.md)
- [Managing CA Certificates](/app/guides/ca_certificate_managing.md)
- [Importing CA Certificates](/app/guides/ca_certificate_importing.md)
- [Android Introduction Tutorial](/app/tutorials/android_introduction.md)

### External browser configuration

Burp lets you use a system browser other than its embedded browser with the proxy.

Caido supports using a **preconfigured browser** or manually set any browser's proxy to point at Caido. Caido does not require its own embedded browser for proxy testing.

#### Resources

- [Using a Preconfigured Browser](/app/guides/preconfigured_browser.md)
- [FoxyProxy Guide](/app/guides/foxyproxy.md)
- [ZeroOmega Guide](/app/guides/zeroomega.md)

### Invisible proxying

Burp forwards non-proxy-aware clients through the proxy without explicit proxy configuration.

Caido offers an **Invisible Proxy** setup to intercept traffic from clients that cannot be configured to use an explicit proxy. This requires network-level forwarding similar to Burp's invisible proxying mode.

#### Resources

- [Invisible Proxy Tutorial](/app/tutorials/invisible_proxy.md)
- [Invisible Proxying Guide](/app/guides/invisible_proxying.md)

### Managing CA certificates

Burp lets you install and manage its CA certificate for intercepting HTTPS traffic.

Caido lets you export and install its CA certificate from **Settings → Network → TLS**. Certificate management is built into Caido's network settings rather than a separate Burp-style CA tool tab.

#### Resources

- [Setup](/app/quickstart/setup.md)
- [Managing CA Certificates](/app/guides/ca_certificate_managing.md)
- [Importing CA Certificates](/app/guides/ca_certificate_importing.md)

## Indirectly Available

### Burp's browser

Burp ships a Chromium-based browser preconfigured to proxy through Burp with DOM Invader integration.

Caido supports configuring a **preconfigured browser** to proxy through Caido automatically. The **PwnFox** plugin integrates multi-profile Firefox containers for parallel sessions. Caido does not ship an embedded browser with DOM testing integration like Burp's browser; pair a system browser with **DOMLogger++** for partial DOM sink monitoring.

#### Resources

- [Using a Preconfigured Browser](/app/guides/preconfigured_browser.md)
- [Setup](/app/quickstart/setup.md)
- [PwnFox](https://github.com/caido-community/pwnfox) (GitHub)
- [DOMLogger++](https://github.com/kevin-mizu/domloggerpp-caido) (GitHub)

## Not Available

### Testing with HTTP/2

Burp lets you send and manipulate HTTP/2 requests, including exclusive attacks.

Caido does not support HTTP/2 in the intercepting proxy or in **Replay**. Traffic is handled over HTTP/1.1; HTTP/2-specific testing and attacks are not available in Caido today.

#### Resources

- [Replay](/app/quickstart/replay.md)
- [Intercept](/app/quickstart/intercept.md)
