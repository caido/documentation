---
description: "Map Burp Suite Pro browser, mobile, and setup features to Caido."
---

# Browser & Setup

Burp Suite Pro browser integration, transport, and setup features and their Caido equivalents.

### Burp's browser

Chromium-based browser preconfigured to proxy through Burp with DOM Invader integration.

**Caido equivalent:** [Using a Preconfigured Browser](/app/guides/preconfigured_browser.md).

### Testing with HTTP/2

Send and manipulate HTTP/2 requests, including exclusive attacks.

**Caido equivalent:** Caido supports HTTP/2 traffic capture and replay. Send HTTP/2 requests through [Replay](/app/quickstart/replay.md) when the connection supports it.

### Testing mobile applications

Proxy traffic from iOS and Android devices through Burp.

**Caido equivalent:** Configure mobile devices to proxy through Caido using the same approach as Burp: install Caido's CA certificate and point the device proxy to your Caido instance. See [Setup](/app/quickstart/setup.md).

### External browser configuration

Use a system browser other than Burp's embedded browser with the proxy.

**Caido equivalent:** [Using a Preconfigured Browser](/app/guides/preconfigured_browser.md) or configure any browser's proxy settings to point at Caido.

### Invisible proxying

Forward non-proxy-aware clients through Burp without explicit proxy configuration.

**Caido equivalent:** [Invisible Proxy](/app/tutorials/invisible_proxy.md).

### Managing CA certificates

Install and manage Burp's CA certificate for intercepting HTTPS traffic.

**Caido equivalent:** Export and install Caido's CA from **Settings → Network → TLS**. See [Setup](/app/quickstart/setup.md) for initial configuration.
