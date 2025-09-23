---
description: "A step-by-step guide to managing CA certificates in Caido including importing, exporting, and regenerating certificates for HTTPS traffic interception."
---

# CA Certificate Management

Each Caido instance generates its own CA certificate to be able to negotiate TLS handshakes and proxy HTTPS traffic.

To access the certificate management options, **click** on the account button <code><Icon icon="fas fa-user" /></code> in the top-right corner of the Caido user-interface, select `Settings`, and open the `Certificate` tab.

- <code><Icon icon="fas fa-file-import" /> Import</code>: Import a CA certificate from another Caido instance or a backup file to use it in this instance.
- <code><Icon icon="fas fa-file-download" /> Export</code>: Export the CA certificate to transfer it to another Caido instance or for backup purposes.
- <code><Icon icon="fas fa-arrows-rotate" /> Regenerate</code>: Regenerate the CA certificate for this Caido instance. You will need to reinstall the new certificate on your system after regeneration.

::: warning NOTE
Caido does not currently support CA certificates from other tools.
:::
