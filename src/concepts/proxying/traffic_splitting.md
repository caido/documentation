---
description: "Understand the core concepts behind Caido's traffic splitting algorithm routes requests between proxy forwarding and UI/API, including upstream determination logic."
---

# Traffic Splitting

By default Caido will listen on a single port for all traffic, it uses a splitting algorithm to determine if a request is for the UI/[GraphQL API](/concepts/internals/graphql) or if it's a normal user request that needs to be forwarded. This allows for a simpler user experience, but can sometimes have unexpected behaviour.

::: info
To add other listeners, refer to the [guide on the topic](/guides/listening_address.md).
:::

## Traffic Split Algorithm

We use the following algorithm to route a given request to the right location.
In the diagram, `Proxy` represents forwarded requests, `API` represents the Caido UI/GraphQL API and `Kill Connection` means the client connection will be closed.

:::info
If you the algorithm doesn't work for your particular setup, consider [adding other specific listeners](/guides/listening_ports.md) that will route directly to the proxy or the UI/API.
:::

```mermaid
flowchart TD
  Request --> TLS{{Is TLS Client Hello}}
  TLS --Yes --> InvisibleTLS{{Is Invisible Proxying}}
  TLS --No --> HTTP{{Is HTTP Request}}
  InvisibleTLS --Yes --> Proxy
  InvisibleTLS --No --> API
  HTTP ---->|No| Kill[Kill Connection]
  HTTP --Yes --> Connect{{Is method CONNECT}}
  Connect --Yes --> Proxy
  Connect --No --> Tunnel{{Host/Port in URI<br><small>Default Port: Scheme</small>}}
  Tunnel --Yes --> DNS{{Host IP/Port matches Caido listener}}
  Tunnel --No --> Direct{{Host/Port in Header<br><small>Default Port: 80</small>}}
  Direct ---->|No| Kill
  Direct --Yes --> InvisibleHttp{{Is Invisible Proxying}}
  InvisibleHttp --No --> API
  InvisibleHttp --Yes --> DNS
  DNS --Yes --> API
  DNS --No --> Proxy
```

### `Is method CONNECT`

```http
CONNECT example.com:443 HTTP/1.1
Host: localhost:8080
```

Per the spec, the port should always be present for a connection

### `Host/Port in URI`

```http
GET http://example/resource HTTP/1.1
Host: localhost:8080
```

Here the port used will be inferred as 80 using the scheme (`http`).

### `Host/Port in Header`

```http
GET /resource HTTP/1.1
Host: example.com
```

Here the port used will be inferred as 80 since it is not specified.

### `Host IP/Port matches Caido listener`

This means that if Caido is listening on `127.0.0.1:8080` then the DNS resolution of the target must match both the IP and port.
Things do get a bit tricky when listening on `0.0.0.0:8080` since it will depend on which interface the request comes from.

In some setup like `Docker` where you might do forwarding across interfaces and ports (when doing something like `docker run -p 8084:8080 caido/caido:latest`), this will likely not match since the target will be `127.0.0.1:8084` but the listener will be something like `172.17.0.2:8080`. In this case, you should use [specific listeners](http://localhost:5173/guides/listening_address.html#adding-other-listeners) for proxying and UI.

## Upstream Determination Algorithm

Once Caido has determined that the request should be forwarded (`Proxy`), it uses the following algorithm to determine to what upstream it should send the request to:

```mermaid
flowchart TD
  Request --> TLS{{Is TLS}}
  TLS --Yes --> InvisibleTLS{{Is Invisible Proxying}}
  TLS --No --> HTTP{{Is HTTP Request}}
  InvisibleTLS --Yes --> Handshake{{Handshake using SNI}}
  InvisibleTLS --->|No| Error
  Handshake --Yes --> HeaderTLS{{Host/Port in Header}}
  Handshake --->|No| Error
  HeaderTLS --Yes --> SNI[Domain: SNI<br>Port: Host header port or 443 if missing<br/>&nbsp]
  HeaderTLS --No --> Error
  HTTP --->|No| Error
  HTTP --Yes --> Connect{{Is method CONNECT}}
  Connect ---->|Yes| ConnectTunnel[Domain: Authority domain<br/>Port: Authority port<br/>&nbsp]
  Connect --No --> Url{{Host/Port in URI}}
  Url ---->|Yes| Tunnel[Domain: URI authority domain<br/>Port: URI authority port or default for scheme<br/>&nbsp]
  Url --No --> InvisibleHttp{{Is Invisible Proxying}}
  InvisibleHttp --Yes --> Header{{Host/Port in Header}}
  InvisibleHttp --->|No| Error
  Header ---->|No| Error
  Header --Yes --> Direct[Domain: Host header domain<br/>Port: Host header port or 80<br/>&nbsp]
```
