---
description: "Understand the core concepts behind Caido's traffic splitting algorithm routes requests between proxy forwarding and UI/API, including upstream determination logic."
---

# Traffic Splitting

By default Caido listens for all traffic on a single port and uses a splitting algorithm to determine if a request is intended for either:

- The Caido GUI (_client component_).
- Or the Caido CLI (_server component_).

## Traffic Split Algorithm

The following diagram is a representation of the algorithm that is used to route a request to the correct component.

- `API`: Represents the Caido GUI.
- `Proxy`: Represents the Caido CLI.
- `Kill Connection`: Represents the closure of the client connection.

::: info
If the algorithm doesn't work for your particular setup, consider [adding other specific listeners](/guides/listening_ports.md) that will route directly to the proxy or the GUI/API.
:::

```mermaid
flowchart TD
  Request --> TLS{{Is TLS Client Hello?}}
  TLS --Yes --> InvisibleTLS{{Is Invisible Proxying?}}
  TLS --No --> HTTP{{Is HTTP Request?}}
  InvisibleTLS --Yes --> Proxy
  InvisibleTLS --No --> API
  HTTP ---->|No| Kill[Kill Connection]
  HTTP --Yes --> Connect{{Is CONNECT?}}
  Connect --Yes --> Proxy
  Connect --No --> Tunnel{{Host/Port in URI?<br><small>Default Port: Scheme</small>}}
  Tunnel --Yes --> DNS{{Host IP/Port Matches Caido Listener?}}
  Tunnel --No --> Direct{{Host/Port in Header?<br><small>Default Port: 80</small>}}
  Direct ---->|No| Kill
  Direct --Yes --> InvisibleHttp{{Is Invisible Proxying?}}
  InvisibleHttp --No --> API
  InvisibleHttp --Yes --> DNS
  DNS --Yes --> API
  DNS --No --> Proxy
```

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
