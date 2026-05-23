---
description: "Map Burp Suite Pro browser, mobile, and setup features to Caido."
---

# Browser & Setup

Burp Suite Pro browser integration, transport, and setup features and their Caido equivalents.

## Available

### Testing with HTTP/2

Send and manipulate HTTP/2 requests, including exclusive attacks.

Caido natively captures and replays HTTP/2 traffic. Send HTTP/2 requests through **Replay** when the connection supports it. Caido handles HTTP/2 at the protocol level rather than through a dedicated HTTP/2 tool tab.

#### Resources

- [Replay](/app/quickstart/replay.md)

### Testing mobile applications

Proxy traffic from iOS and Android devices through Burp.

Configure mobile devices to proxy through Caido the same way as Burp: install Caido's CA certificate on the device and point the proxy settings to your Caido instance. Caido supports mobile proxying natively through its listening proxy.

#### Resources

- [Setup](/app/quickstart/setup.md)
- [Managing CA Certificates](/app/guides/ca_certificate_managing.md)
- [Importing CA Certificates](/app/guides/ca_certificate_importing.md)
- [Android Introduction Tutorial](/app/tutorials/android_introduction.md)

### External browser configuration

Use a system browser other than Burp's embedded browser with the proxy.

Use a **preconfigured browser** or manually set any browser's proxy to point at Caido. Caido does not require its own embedded browser for proxy testing.

#### Resources

- [Using a Preconfigured Browser](/app/guides/preconfigured_browser.md)
- [FoxyProxy Guide](/app/guides/foxyproxy.md)
- [ZeroOmega Guide](/app/guides/zeroomega.md)

### Invisible proxying

Forward non-proxy-aware clients through Burp without explicit proxy configuration.

Use Caido's **Invisible Proxy** setup to intercept traffic from clients that cannot be configured to use an explicit proxy. This requires network-level forwarding similar to Burp's invisible proxying mode.

#### Resources

- [Invisible Proxy Tutorial](/app/tutorials/invisible_proxy.md)
- [Invisible Proxying Guide](/app/guides/invisible_proxying.md)

### Managing CA certificates

Install and manage Burp's CA certificate for intercepting HTTPS traffic.

Export and install Caido's CA certificate from **Settings → Network → TLS**. Certificate management is built into Caido's network settings rather than a separate Burp-style CA tool tab.

#### Resources

- [Setup](/app/quickstart/setup.md)
- [Managing CA Certificates](/app/guides/ca_certificate_managing.md)
- [Importing CA Certificates](/app/guides/ca_certificate_importing.md)

## Indirectly Available

### Burp's browser

Chromium-based browser preconfigured to proxy through Burp with DOM Invader integration.

Configure a **preconfigured browser** to proxy through Caido automatically. Caido does not ship an embedded browser with DOM testing integration like Burp's browser; you use your system browser with proxy settings applied.

#### Resources

- [Using a Preconfigured Browser](/app/guides/preconfigured_browser.md)
- [Setup](/app/quickstart/setup.md)
