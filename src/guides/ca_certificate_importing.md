# Importing Caido's CA Certificate

To proxy HTTPS traffic with Caido, it is necessary to import and trust the CA Certificate of Caido in your browser.

To download the certificate, **click** on the account button <code><Icon icon="fas fa-user" /></code> in the top-right corner of the Caido user-interface, select `CA Certificate`, and **click** on the <code><Icon icon="fas fa-download" /> Download CA Certificate</code> button.

Once the certificate has been downloaded, continue with the import instructions for your operating system and browser:

## Windows

### Chrome

1. Launch the Chrome browser, enter `chrome://certificate-manager/` in the address bar, and select `Manage imported certificates from Windows`.

<img alt="Manage imported certificates from Windows setting option." src="/_images/manage_imported_certificates_from_windows_chrome.png" center/>

2. In the Certificates window, select the `Trusted Root Certification Authorities` tab and **click** on the `Import...` button.

3. In the Certificate Import Wizard, **click** `Next`, **click** `Browse...`, and select the `ca.crt` file you previously downloaded.

<img alt="Selecting the downloaded ca.crt file." src="/_images/file_to_import_windows_chrome.png" center/>

4. **Click** `Next` and select the `Place all certificates in the following store` option.

<img alt="Place all certificates in the following store settings option." src="/_images/certificate_store_windows_chrome.png" center/>

5. **Click** `Next` and then `Finish`.

6. In the Security Warning window, confirm the installation of Caido's CA certificate by **clicking** `Yes`.

7. Continue with the [Using FoxyProxy](/guides/foxyproxy.html#chrome) guide for Chrome.

### Firefox

1. Launch the Firefox browser, enter `about:preferences` in the address bar, and search for `View Certificates`.

<img alt="The View Certificates settings option." src="/_images/view_certificates_windows_firefox.png" center/>

2. **Click** on the `View Certificates...` button to open the Certificate Manager window.

3. Select the `Authorities` tab, **click** on the `Import...` button, and select the `ca.crt` file you previously downloaded.

4. In the Downloading Certificate window, select `Trust this CA to identify websites.` and **click** `OK`.

<img alt="The View Certificates settings option." src="/_images/downloading_certificate_windows_firefox.png" center/>

5. **Click** `OK` to close the Certificate Manager window.

6. Continue with the [Using FoxyProxy](/guides/foxyproxy.html#firefox) guide for Firefox.
