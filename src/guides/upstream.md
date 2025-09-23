---
description: "A step-by-step guide to configuring upstream proxies in Caido for forwarding traffic through HTTP and SOCKS proxies with authentication and scope control."
---

# Upstream to Another Proxy

To forward traffic proxied by Caido to an upstream proxy, **click** on the account button <code><Icon icon="fas fa-user" /></code> in the top-right corner of the Caido user-interface, select `Settings`, and open the `Network` tab.

Then, **click** on the `+ Add Proxy` button under the `HTTP Proxies` or `SOCKS Proxies` sections. Type in the listening address/port of the upstream proxy in the associated input fields.

::: tip
Ensure upstream HTTP proxies are listening on a different address/port than Caido.
:::

The additional configuration settings are optional:

- `Use HTTPS`: Establishes an encrypted connection with the upstream proxy.
- `Included Hosts`/`Excluded Hosts`: Allows you to [define a scope preset](/guides/scopes_defining.md) to manage what traffic is sent upstream.
- `Resolve DNS over SOCKS proxy`: DNS resolution will be performed by the SOCKS proxy.
- `Username`/`Password`: These input fields allow you to supply credentials for upstream proxies that require authentication.

::: tip
To ensure your configurations successfully forward traffic, you can test them by **clicking** on the <code><Icon icon="fas fa-vial" /> Test</code> button.
:::

<img alt="The upstream proxy configuration settings." src="/_images/upstream_http_proxy.png" center>

---

<img alt="The upstream proxy configuration settings." src="/_images/upstream_socks_proxy.png" center>

Once you have defined the upstream proxy settings, click on the `+ Create` button save the configuration.

::: info

- If both SOCKS and HTTP proxies are enabled, traffic will flow through the SOCKS proxy first, then through the HTTP proxy.
- Calls to [Caido's cloud server](/concepts/internals/cloud.md) will not flow through additional proxies.
:::

---

<div class="video small">
  <iframe src="https://www.youtube.com/embed/QFzaseG2Buk?si=j3KA6-ol-LrXG9bd" title="YouTube video player." frameborder="0"></iframe>
</div>

---

<div class="video small">
  <iframe src="https://www.youtube.com/embed/KFJt1LyC_FI?si=xjhR2zbItb7CqnlU" title="YouTube video player." frameborder="0"></iframe>
</div>
