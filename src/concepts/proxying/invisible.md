# Invisible Proxying

:::warning
Invisible proxying is disabled by default, [view the guide on how to enable it](/guides/invisible_proxying).
:::

Generally, applications can be configured to use a forward proxy to connect to their targets.

This is the case with Caido. By manually configuring the connection settings (_or by using a browser extension such as [FoxyProxy](https://getfoxyproxy.org/)_), we are able to proxy the traffic the browser generates, intended for a web server, through Caido.

<img alt="Firefox proxying setup" src="/_images/proxying_firefox.png" center width=600px style="filter: brightness(85%);" />

When proxying in this "normal" context, the application will send a `CONNECT` request to establish a TCP tunnel before sending the request itself:

```http
CONNECT https://example.com/ HTTP/1.1
Host: localhost:8080
```

However, some applications are considered to be "thick clients", and cannot be configured to use a proxy. In such cases, "invisible proxying" (_aka "transparent proxying"_) becomes an alternative method.

In this mode, Caido acts as the destination server, making the application unaware that it is communicating through a proxy. As a result, the application sends HTTP requests directly to Caido, without first sending a `CONNECT` request. This behavior is similar to how reverse proxies like Nginx&trade; operate.

This means that Caido needs to listen on the same port as the destination server (_typically `443` or `80`_).

Additionally, DNS Rewrite rules are required to override the local DNS resolution of the target domain, pointing it `127.0.0.1` (_the listening address of Caido_). Then, another rule needs to revert the resolution back to the real IP address of the server to ensure proper forwarding.

[Learn how to create DNS Rewrite rules.](/guides/dns_rewrites.md)

:::info
View [Traffic Splitting](/concepts/proxying/traffic_splitting.md) to gain a detailed understanding of how Caido selects the host and port to use when forwarding requests.
:::
