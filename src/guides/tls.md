# CA Certificate Management

Each Caido instance generates its own CA certificate to be able to negotiate TLS handshakes and intercept HTTPS traffic.

If you click on your account icon in the upper-rightmost corner of the Caido window and select `Settings`, the following options are available in the `TLS` tab:

- `Export`: Save the CA certificate so it can be used in another instance.
- `Import`: Import a previously saved CA certificate.
- `Regenerate`: Create a new certificate.

::: warning
If you regenerate the certificate, you will need to [import the new one into your browser](/guides/import_ca_certificate.md).
:::

<img alt="CA certificate management." src="/_images/tls_settings.png" center/>

::: info
We currently do not support CA certificates from other tools.
:::
