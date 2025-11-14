---
description: "Understand the core concepts behind how Caido handles HTTPS traffic proxying with dynamic certificate generation and TLS connection management."
---

# Proxying HTTPS Traffic

When using Caido, two separate [TCP](https://developer.mozilla.org/en-US/docs/Glossary/TCP)/[TLS](https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security) connections are created: one between the client (_your browser_) and Caido, and the other between Caido and the server.

Caido acts as an intermediary, holding the symmetric keys for both connections, allowing it to encrypt and decrypt data. To ensure the [digital certificate](https://developer.mozilla.org/en-US/docs/Glossary/Digital_certificate) matches the domain name in the client’s request, Caido dynamically generates certificates for the server's domain. By adding Caido's CA certificate as a trusted entity, these certificates are signed with a trusted signature.

<img alt="Android proxy settings." src="/_images/https_diagram_a.png" center no-shadow/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_b.png" center no-shadow/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_c.png" center no-shadow/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_d.png" center no-shadow/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_e.png" center no-shadow/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_f.png" center no-shadow/>

---

<img alt="Android proxy settings." src="/_images/https_diagram_g.png" center no-shadow/>
