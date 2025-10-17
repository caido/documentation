# Importing Caido's CA Certificate

To proxy HTTPS traffic with Caido, it is necessary to import and trust the CA Certificate of Caido in your browser.

To download the certificate, **click** on the account button <code><Icon icon="fas fa-user" /></code> in the top-right corner of the Caido user-interface, select `CA Certificate`, and **click** on the <code><Icon icon="fas fa-download" /> Download CA Certificate</code> button.

Once the certificate has been downloaded, continue with the import instructions for your browser:

## Chrome

1. Launch the Chrome browser, enter `chrome://certificate-manager/` in the address bar, and select `Installed by you`.

<img alt="Installed by you option." src="/_images/custom_certificate_chrome.png" center/>

2. Then, **click** on the Trusted Certificates `Import` button and select the `ca.crt` file you previously downloaded.

<img alt="Import button." src="/_images/trusted_certificates_chrome.png" center/>

3. Continue with the [Using FoxyProxy](/guides/foxyproxy.html#chrome) guide for Chrome.

## Firefox

1. Launch the Firefox browser, enter `about:preferences` in the address bar, and search for `View Certificates`.

<img alt="The View Certificates settings option." src="/_images/view_certificates_windows_firefox.png" center/>

2. **Click** on the `View Certificates...` button to open the Certificate Manager window.

3. Select the `Authorities` tab, **click** on the `Import...` button, and select the `ca.crt` file you previously downloaded.

4. In the Downloading Certificate window, select `Trust this CA to identify websites.` and **click** `OK`.

<img alt="The View Certificates settings option." src="/_images/downloading_certificate_windows_firefox.png" center/>

5. **Click** `OK` to close the Certificate Manager window.

6. Continue with the [Using FoxyProxy](/guides/foxyproxy.html#firefox) guide for Firefox.
