# Traffic splitting

By default Caido will listen on a single port for all traffic, it uses a splitting algorithm to determine if a request is for the UI/[GraphQL API](/concepts/internals/graphql) or if it a normal user request that needs to be forwarded. This allows for a simpler user experience, but can sometimes have unexpected behaviour.

::: info
To add other listeners, refer to the [guide on the topic](/guides/listening_address.md).
:::

## Traffic split algorithm

We use the following algorithm to route a given request to the right location.
In the diagram, `Proxy` is for forwarded requests and `API` is for Caido UI/GraphQL API.

```mermaid
flowchart TD
  Request --> TLS{{Is TLS Client Hello}}
  TLS --Yes --> Proxy
  TLS --No --> HTTP{{Is HTTP Request}}
  HTTP --No --> API
  HTTP --Yes --> Connect{{Is method CONNECT}}
  Connect --Yes --> Proxy
  Connect --No --> Tunnel{{Host/Port in URI<br><small>Default Port: Scheme</small>}}
  Tunnel --Yes --> DNS{{Host IP/Port matches Caido listener}}
  Tunnel --No --> Invisible{{Host/Port in Header<br><small>Default Port: Listener</small>}}
  Invisible --No --> API
  Invisible --Yes --> DNS
  DNS --Yes --> API
  DNS --No --> Proxy
```

## Upstream determination algorithm

Once Caido has determined that the request should be forwarded (`Proxy`), it uses the following algorithm to determine to what upstream it should send the request to:

```mermaid
flowchart TD
  Request --> TLS{{Is TLS}}
  TLS --Yes --> SNI[Domain: SNI<br>Port: Listener]
  TLS --No --> Url{{Authority in URL}}
  Url --Yes --> Tunnel[Domain: Authority domain<br/>Port: Authority port or default for scheme]
  Url --No --> Header{{Host in headers}}
  Header --No --> Error
  Header --Yes --> Direct[Domain: Host domain<br/>Port: Host port or default for listener]
```
