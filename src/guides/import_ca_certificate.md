# Installing the CA Certificate

To use Caido to intercept (and tamper with) your HTTPS traffic, it is necessary to import and trust the CA Certificate of Caido in your browser.

## Importing the CA Certificate in Your Browser

1. After starting Caido on your machine, navigate to `localhost:8080` (or the port you've configured for Caido to listen to) and log in.

<img alt="User dropdown." src="/_images/import_cert_config.png" center/>

2. Click on your account icon in the upper-rightmost corner of the Caido window.
3. Select `CA Certificate` tab or navigate to [http://localhost:8080/#/settings/certificate](http://localhost:8080/#/settings/certificate).

<img alt="Downloading the CA Certificate." src="/_images/cert_instructions_new.png" center/>

4. Download the certificate and follow the importation instructions provided within Caido. After you've successfully imported the certificate, your browser is now configured to proxy its traffic through Caido.

::: tip
Ensure to select the importation instructions specific to your browser of choice.
:::
