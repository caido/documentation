# Proxying HTTPS Traffic

When using Caido, two separate TCP/TLS connections are created: one between the client and the proxy, and another between the proxy and the server.

The proxy acts as an intermediary, holding the symmetric keys for both connections, allowing it to encrypt and decrypt data. To ensure the SSL/TLS certificate matches the domain name in the client’s request, the proxy dynamically generates certificates for the server's domain. By adding the proxy's CA certificate as a trusted entity, these certificates are signed with a trusted signature.

<img alt="Android proxy settings." src="/_images/https_diagram_a.png" center/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_b.png" center/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_c.png" center/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_d.png" center/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_e.png" center/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_f.png" center/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_g.png" center/>
