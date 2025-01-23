# Proxying Android Device Traffic

In this tutorial, we will cover the process of configuring an Android device to proxy its traffic through Caido.

::: info

- **This process does not require a rooted device.**
- Be aware that the names and locations of settings options may vary between devices.
- Ensure to pay attention to any prompts on the device itself while proceeding through these steps.
:::

## Android SDK Platform-Tools: adb

To interface with the Android device using your computer's terminal, you will need the `Android Debug Bridge (adb)` which is included in the Platform-Tools package of the Android SDK.

[Download the Platform-Tools for your operating system.](https://developer.android.com/tools/releases/platform-tools#downloads) Once downloaded, unzip the folder.

To use `abd` with your Android device, navigate to the device settings and enable the [`Developer options`](https://developer.android.com/studio/debug/dev-options#enable). Then enable `USB debugging`.

Connect the Android device to your computer over USB, navigate to the `/platform-tools` directory, and verify the connection by running `adb devices` in your terminal. If the device is connected, it will be listed in the output.

## Configuring the Android Device

To configure your Android device to use Caido:

1. Ensure the device is on the same Wi-Fi network as the computer running Caido.
2. Navigate to the device Wi-Fi settings and select your network SSID.
3. Access the `Advanced` settings of the network and select the `Manual` option from the `Proxy` dropdown menu:

<img alt="Android proxy settings." src="/_images/android_proxy_settings.png" center no-shadow width="300"/>

4. Set the proxy address to: `127.0.0.1:8080`
5. Click `Save` to set the proxy configurations.

## Port Forwarding

As Caido is running on your computer, not your phone - run the following command from the `/platform-tools` directory:

```
adb reverse tcp:8080 tcp:8080
```

This command forwards traffic from `localhost:8080` on your device to port `8080` on your computer through the USB connection.

## CA Certificate

1. Navigate to [http://127.0.0.1:8080/ca.crt](http://127.0.0.1:8080/ca.crt) in your device's browser to download Caido's CA certificate. Provide an arbitrary certificate name and select `Wi-Fi` in the `Used for` dropdown menu.
2. Access the `Advanced` general Wi-Fi settings, select `Install network certificates`, and select the Caido `ca.crt` file.
3. Navigate to a website using your device's browser, you will now see the traffic in Caido's HTTP History.
