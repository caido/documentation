# Import the CA Certificate in Your Browser

To use Caido to intercept (and tamper with) your HTTP/S traffic, it is necessary to import and trust the CA certificate of Caido in your browser.

## Log in to Caido

---

After starting Caido on your machine, navigate to `localhost:8080` (or the port you've configured for Caido to listen to) and log in.

## Get the Certificate

---

Open the `User Dropdown Menu` in the top-right corner.

<img alt="User dropdown." src="/_images/user_dropdown.png" center/>

Navigate to `CA Certificate` or click [here](http://localhost:8080/#/settings/certificate).

Download the Certificate and follow the instructions to import and trust it in your browser of choice.

![download_cert](/_images/download_cert.png)

After you've successfully imported the certificate, you are good to go and can configure your browser to proxy it's traffic through Caido.
