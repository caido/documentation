# Upstream to Another Proxy

In order to send traffic to another proxy from Caido:

1. Click on your account icon in the upper-rightmost corner of the Caido window.
2. Select `Settings`.
3. Select the `Network` tab or navigate to [http://localhost:8080/#/settings/network](http://localhost:8080/#/settings/network).

::: warning LIMITATIONS

- Currently, we do not support remote DNS resolution via SOCKS.
- Calls to the [Caido Cloud](/concepts/internals/cloud.md) will not go through the additional proxy.
:::

4. Click the `Add Proxy` button in the appropriate panel depending on the type.
5. Input the hostname or IP address in the `Host` field and port number in the `Port` field of the upstream proxy.
6. Specify the scope of hosts that should be sent from Caido. To include all traffic, use `*`.
7. You can test the configuration by clicking the `Test` button.

9. Click the `+ Create` button to save the configuration.

<div style="display: flex; justify-content: center; gap: 10px;">
    <img alt="Upstream HTTP proxy." src="/_images/http_proxy_new.png" style="width: 45%;">
    <img alt="Upstream SOCKS proxy." src="/_images/socks_proxy.png" style="width: 45%;">
</div>

---

<div class="video small">
  <iframe src="https://www.youtube.com/embed/QFzaseG2Buk?si=j3KA6-ol-LrXG9bd" title="YouTube video player." frameborder="0"></iframe>
</div>

---

<div class="video small">
  <iframe src="https://www.youtube.com/embed/KFJt1LyC_FI?si=xjhR2zbItb7CqnlU" title="YouTube video player." frameborder="0"></iframe>
</div>

::: tip TIPS

- You can also set your credentials in the `Username` and `Password` fields.
- Ensure the upstream HTTP proxy is running using a different port than Caido.
- If both SOCKS and HTTP proxies are enabled, traffic will flow through the SOCKS proxy first, then through the HTTP proxy.
- You can enable/disable usage using the toggle switch associated with the table row of your saved configuration.
- Proxies can be edited or deleted with the pencil icon or trash bin buttons respectively.

<div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
    <img alt="Upstream HTTP proxy actions." src="/_images/actions_http_proxy.png" style="width: 60%;" no-shadow>
    <img alt="Upstream SOCKS proxy actions." src="/_images/actions_socks_proxy.png" style="width: 60%;" no-shadow>
</div>
:::
