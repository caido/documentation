# Invisible proxying

Generally applications can be configured to use a forward proxy to connect to their target.
For example, we use the browsers proxy configurations to setup Caido.
This is what allows us to intercept the traffic.

<img alt="Firefox proxying setup" src="/_images/proxying_firefox.png" center width=600px style="filter: brightness(85%);" />

When in "regular" proxying the application will first send a `CONNECT` request to establish a tunnel before sending the request itself:

```http
CONNECT https://example.com/ HTTP/1.1
Host: localhost:8080
```

When an application cannot be configured to use a proxy (usually a "thick client"), we need an alternative.
This is where invisible proxying is interesting.

In this mode, Caido acts as the destination server and the application is not aware that there is it is talking to a proxy.
It is will thus send directly the HTTP requests without a `CONNECT`.
This is similar to how reverse proxies like Nginx:tm: work.

This does mean that Caido needs to run on the same port as the destination server (usually 443 or 80).
You also need to override the local DNS for the target to point to `127.0.0.1` and then override it again inside Caido to point to the real IP of the server.

:::info
To understand in more details how Caido selects the host and port to use when forwarding the requests, see the [Traffic Splitting concept](/concepts/proxying/traffic_splitting.md).
:::
