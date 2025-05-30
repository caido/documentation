# iOS Setup and Configuration

In this tutorial, we will cover how to setup and configure an iOS device in order to proxy HTTP/HTTPS traffic generated by iOS applications.

::: danger WARNING
Caido is not liable for any malfunctions, failures, damages, loss/theft of data, or other technical issues that may occur with your device as a result of following this tutorial. Proceed at your own risk.
:::

::: info

- Be aware that the exact names and locations of setting options may vary between devices.
- Ensure to pay attention to any prompts on the device itself while proceeding through these steps.
- For convenience, add all installed tools to your system's `PATH` envrionment variable to make them globally accessible. Ensure to restart your terminal afterwards so the changes take effect.
:::

## Configuring Caido

To capture traffic from your Apple devices on your Wi-Fi network, you will need to edit the default settings of Caido.

1. In the launch window, click the vertical ellipsis button of your desired instance and select `Edit`.
2. Select `All interfaces (0.0.0.0)` and click the `Save` button in the bottom right corner.

<img alt="All interfaces (0.0.0.0)." src="/_images/launcher_all_interfaces.png" center no-shadow/>

3. Now, launch Caido.

## Configuring the Proxy Settings

1. On your iOS device, navigate to `Settings` and select `Wi-Fi`.
2. Ensure your device is on the same network as your computer.
3. Select the network SSID and scroll down to select the `Configure Proxy` option, then select the `Manual` option.
4. In the `Server` field, enter the IP address of your computer running Caido (_run the terminal command `ipconfig` in Windows or `ifconfig` in macOS/Linux to discover your computer's IP address_). Then enter the listening port of Caido in the `Port` field. Once the values have been added, click `Save` in the upper left corner.

<img alt="iOS proxy configuration." src="/_images/ios_configure_proxy.png" center no-shadow width="500"/>

5. In the Safari browser, visit `http://<IP>:8080/ca.crt` (_replace `<IP>` with the IP address of your computer_) to download Caido's CA certificate. Select `Allow` in the prompt. In the `Choose a Device` prompt, select the device you are currently using. Click `Close` in the `Profile Downloaded` notification.
6. Return to your device's `Settings`, click on the `Profile Downloaded` option, and then click `Install`. On the warning screen, click `Install` again and `Install` yet again at the bottom. Then select `Done`.
7. Click the `< Back` button in the upper left corner to return to the `General Settings` screen. Next, select the `About` option. At the bottom of this screen will be the `Certificate Trust Settings` option, select this and then enable Caido to be a trusted root certificate. In the warning prompt, select `Continue`.

<img alt="Trusting Caido's CA certificate in iOS." src="/_images/ios_certificate_trust_settings.png" center no-shadow width="500"/>

::: tip
To test if the certificate was successfully installed for Wi-Fi, launch the device's browser and navigate to a website. You should see the traffic in Caido's HTTP History table.

Next, open an application and view if the traffic it is generating is being proxied. This will vary depending on the security techniques used by the developers.
:::

::: info
Applications may have security measures that will prevent them from working properly and allowing [Caido to proxy the HTTPS traffic](/concepts/essentials/https_traffic.md) they generate. If the application is still not working properly and traffic is still not being proxied, you will need to take additional steps to bypass these measures.

Due to Apple's robust security, the easiest way to do so is to obtain a device running an operating system version that has a jailbreak available.
:::
