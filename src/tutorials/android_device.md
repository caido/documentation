# Proxying Android Device Traffic

In this tutorial, we will cover the process of configuring an Android device to proxy its traffic through Caido.

::: info

- **This process does not require a rooted device.**
- Be aware that the names and locations of settings options may vary between devices.
- Ensure to pay attention to any prompts on the device itself while proceeding through these steps.
:::

## Configuring the Android Device

To configure your Android device to use Caido:

1. [Download the Android SDK Platform-Tools for your operating system.](https://developer.android.com/tools/releases/platform-tools#downloads)
2. Once Platform-Tools is downloaded, unzip the package and move it into your desired directory.
3. [Enable the Developer settings for your specific Android device.](https://developer.android.com/studio/debug/dev-options#enable)
4. Within the Developer options, enable `USB debugging`.
5. Connect the Android device to your computer over USB.
6. Ensure the device is on the same Wi-Fi network the computer running Caido.
7. Navigate to the device Wi-Fi settings and select your network SSID.
8. Access the `Advanced` settings of the network and select the `Manual` option from the `Proxy` dropdown menu:

<img alt="Android proxy settings." src="/_images/android_proxy_settings.png" center no-shadow width="300"/>

9. Set the proxy address to: `127.0.0.1:8080`

11. Click `Save` to set the proxy configurations.
12. Navigate to the `/platform-tools` directory in the Platform-Tools package and run the following terminal command:

```
adb reverse tcp:8080 tcp:8080
```

13. Navigate to [http://127.0.0.1:8080/ca.crt](http://127.0.0.1:8080/ca.crt) in your device's browser to download Caido's CA certificate. Provide an arbitrary certificate name and select `Wi-Fi` in the `Used for` dropdown menu.
14. Access the `Advanced` general Wi-Fi settings, select `Install network certificates`, and select the Caido `ca.crt` file.
15. Navigate to a website using your device's browser, you will now see the traffic in Caido's HTTP History.

## Proxying Mobile Applications

In order to capture Android mobile application traffic:

1. Download the mobile application to your computer and save it as an `.apk` file.