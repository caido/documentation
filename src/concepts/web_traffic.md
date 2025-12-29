# Proxying Web Traffic

The Caido CLI (_server component_) is an HTTP proxy server that forwards the bidirectional communication between a client and a server.

HTTP proxy servers operate in a few distinct ways depending on: 

- If the traffic is in cleartext or encrypted.
- If the client is aware of the proxy server or not.
- If the client is able to be directly configured to utilize a proxy server or not.


## HTTP Proxy (Standard Forward Proxy)

If the proxy server is acting as a standard forward proxy, the client is aware of its existence and is configured to send its traffic to it instead of sending it directly to the destination server.

In order to specify the intended recipient, the client will send an HTTP CONNECT method request to the listening address of the HTTP proxy server.

This initial request specifies the destination server the client would like the proxy to establish a connection with and forward requests to.

```http
CONNECT example.com:80 HTTP/1.1
Host: localhost:8080
```

Once the proxy server has made a TCP connection with the destination server, it will respond to the clients CONNECT request with a `200 Connection Established` response.

Until the connection is closed, the proxy server will forward requests on behalf of the client to the destination server.

The corresponding responses received from the destination server by the proxy server will be forwarded to the client through their own connection.

## HTTPS Proxy (Standard Forward Proxy for HTTPS)

If the client specifies it would like the proxy server to establish an encrypted connection with the destination server, the operation is the same with the exception that the data will be obfuscated to the proxy server.

```http
CONNECT example.com:443 HTTP/1.1
Host: localhost:8080
```

However, if the client has imported the CA certificate of the proxy server, it is viewed as a trusted entity. This allows the proxy server to establish TLS connections with both the client and the destination server allowing it to encrypt and decrypt traffic as it is passed through.

## Invisible HTTP (Transparent Proxy for HTTP)

If the client is unable to be configured to use a proxy server via native settings, it is known to be a "thick client".

However, by configuring local DNS settings, clients can be forced to send requests to the proxy server instead of sending them directly to the destination server. This is accomplished by manually configuring local DNS settings to resolve the hostname of the destination server to the IP address of the proxy server.

Since the client is unaware of the presence of the proxy server, it will not send an initial CONNECT method request. This behavior is similar to how reverse proxies like Nginx&trade; operate. Because of this, the proxy server also needs to listen on the same port that the request is intended for. This is accomplished via port forwarding.

- Client is not proxy-aware; it thinks it's talking directly to the destination
- No CONNECT method; the client sends regular HTTP requests directly
- The proxy acts like the destination server (similar to a reverse proxy)
- The proxy must listen on the same port as the destination (typically port 80)
- Requires DNS manipulation (e.g., /etc/hosts) to route traffic to the proxy
- Used for "thick clients" that cannot be configured to use a proxy

## Invisible HTTPS (Transparent Proxy for HTTPS)

- Same as invisible HTTP, but for HTTPS traffic
- Client initiates TLS directly with the proxy (which appears as the destination)
- The proxy must listen on the destination port (typically 443)
- Requires DNS manipulation and a trusted CA certificate for TLS interception
- The client sends TLS Client Hello directly, without CONNECT