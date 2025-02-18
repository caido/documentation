# Proxying Android Traffic

In this tutorial, we will cover the process of manually configuring an Android device to proxy its traffic through Caido.

::: info

- ****This process does not require a rooted device.****
- Be aware that the names and locations of settings options may vary between devices.
- Ensure to pay attention to any prompts on the device itself while proceeding through these steps.
- Ensure to restart your terminal after adding to the PATH environment variable.
:::

::: tip
If you want to automate this entire process, you can use [apk-mitm](https://github.com/niklashigi/apk-mitm).
:::

## Android SDK Platform-Tools: adb

To interface with the Android device using your computer's terminal, you will need the **Android Debug Bridge (adb)** which is included in the Platform-Tools package of the Android SDK.

[Download the Platform-Tools for your operating system.](https://developer.android.com/tools/releases/platform-tools#downloads) Once downloaded, unzip the folder and make it globally accessible by adding it to your system's PATH environment variable.

To use `abd` with your Android device, navigate to the device settings and enable the [`Developer options`](https://developer.android.com/studio/debug/dev-options#enable). Then enable `USB debugging`.

<img alt="Enable developer options." src="/_images/developer_options.png" center no-shadow/>
<img alt="USB debugging." src="/_images/usb_debugging_settings.png" center no-shadow/>

Connect the Android device to your computer over USB and verify the connection by running `adb devices` in your terminal. If the device is connected, it will be listed in the output.

<img alt="List of connected Android devices." src="/_images/adb_device_list.png" center no-shadow/>

::: tip
If the command output lists the device as "unauthorized", disconnect and reconnect the device, and then accept the "Allow USB debugging?" permission prompt on your device.
:::

## Configuring the Android Device

To configure your Android device to use Caido:

1. Ensure the device is on the same Wi-Fi network as the computer running Caido.
2. Navigate to the device Wi-Fi settings and select your network SSID.
3. Access the `Advanced` settings of the network and select the `Manual` option from the `Proxy` dropdown menu:
4. Set the proxy address to: `127.0.0.1:8080`

<img alt="Android proxy settings." src="/_images/android_proxy_config.png" center no-shadow width="300"/>

5. Click `Save` to set the proxy configurations.

### Port Forwarding

Since Caido is running on your computer, not your phone - run the following command to forward traffic from `localhost:8080` on your device to port `8080` on your computer through the USB connection:

```
adb reverse tcp:8080 tcp:8080
```

::: tip TIPS

- If the command output contains the message "adb.exe: device unauthorized", accept the permissions prompt on your device, run `adb kill-server` and then `adb reverse tcp:8080 tcp:8080` again.

- To verify the proxy is working, run `adb shell settings list global`.

- To check if the app is actually using the proxy, run `adb shell dumpsys connectivity | grep -A 2 "Active network"`.
:::

## Intercepting Mobile Browser Traffic

1. Navigate to [http://127.0.0.1:8080/ca.crt](http://127.0.0.1:8080/ca.crt) in your device's browser to download Caido's CA certificate. Provide an arbitrary certificate name and select `Wi-Fi` in the `Used for` dropdown menu.

<img alt="Mobile browser Caido certificate options." src="/_images/android_cert_options.png" center no-shadow width="300"/>

2. Click `OK` and navigate to a website using your device's browser, you will now see the traffic in Caido's HTTP History.

## Intercepting Application Traffic

Android mobile applications are files bundled as `.apk` (_Android Package Kit_) packages and must be modified for use with Caido.

::: warning NOTE
In this tutorial, we’ll use the HTTPToolkit Pinning Demo application to demonstrate how to modify an APK so that Caido can proxy its traffic, and we’ll test these changes using the app’s various HTTP requests. If you are new to mobile application testing, we recommend you [download the HTTPToolkit SSL Pinning Demo APK](https://github.com/httptoolkit/android-ssl-pinning-demo/releases/download/v1.4.1/pinning-demo.apk) to ensure the steps align exactly.
:::

<img alt="List of connected Android devices." src="/_images/pinning_demo_requests.png" center no-shadow width="300"/>

Once downloaded, install the application to your connected device with:

```
adb install pinning-demo.apk
```

APKs can be acquired by downloading them directly from repositories or sites such as [apkmirror.com](https://www.apkmirror.com/) or [apkpure.com](https://apkpure.com/).

<details>
<summary>APKs can also be extracted from applications already installed on your device. Expand this section to learn how.</summary>

1. Initialize a command-line interface on your Android device:

```
adb shell
```

2. Find the application's `base.apk` package on your device by listing all the file paths of installed packages and filtering the results by the application name:

```
pm list packages -f | grep -i pinning
```

<img alt="Finding the base package." src="/_images/adb_package_location.png" center no-shadow/>

3. Copy the location and exit the device command-line interface using`CTRL+D` or by typing and entering `exit`.

4. Pull the `base.apk` from your device to your computer (_do not include the `=<package-name>` portion of the output_):

```
adb pull /data/app/tech.httptoolkit.pinning_demo-1wMoq8214ewjz2S-xt-sCA==/base.apk
```

<img alt="Pulling the base package." src="/_images/apk_pulled.png" center no-shadow/>

</details>

### Unpacking APKs

**Apktool** is a tool for reverse engineering Android applications. Once you have an application's APK, with Apktool you can decompile the package into its individual resources (_such as XML files, images, and code_) and then rebuild them after making modifications.

[Download Apktools for your operating system.](https://apktool.org/docs/install)

To unpack the contents of an APK to a new directory within the current directory, use the following command:

```
apktool d -o unpacked pinning-demo.apk
```

_If you extracted the APK, ensure to replace `pinning-demo.apk` with `base.apk`._

<img alt="Unpacking the APK." src="/_images/apk_unpacked.png" center no-shadow/>

## Modifying the Network Security Configuration File

One of the reasons that Caido may not be able to proxy the application traffic is due to the presence of a [Network Security Configuration file](https://developer.android.com/privacy-and-security/security-config).
Introduced in Android 7.0 (API level 24), the `network_security_config.xml` file allows developers to customize network security settings for their applications.

1. Open the `/res/xml/network_security_config.xml` file, or if it doesn't exist, create it.

2. Replace or write the content of the file to:

``` xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <!-- Base configuration that applies to all connections if not overridden. -->
    <base-config>
        <!-- Define which certificates should be trusted as root CAs (trust anchors). -->
        <trust-anchors>
            <!-- Trust the pre-installed system certificates. -->
            <certificates src="system" />
            <!-- Trust user-installed certificates (like Caido's CA) and allow them to override certificate pinning. -->
            <certificates src="user" overridePins="true" />
        </trust-anchors>
    </base-config>
</network-security-config>
```

3. Ensure that the main configuration file, `AndroidManifest.xml` references the `network_security_config.xml` file via the `android:networkSecurityConfig="@xml/network_security_config"` attribute in the `<application>` tag. If you created a new `network_security_config.xml` file, you will have to explicitly add this.

4. From the directory of the unpacked APK, repack it with:

```
apktool b -o modified.apk ./
```

<img alt="Repacking the APK." src="/_images/apk_repack.png" center no-shadow/>

5. You will need the `keytool` and `jarsigner` tools in order to repack the APK. These tools are included in the Java Development Kit (JDK).

[Download the JDK for your operating system.](https://docs.oracle.com/en/java/javase/23/install/overview-jdk-installation.html) and add it to your system's PATH environment variable.

6. Generate a signing key with:

```
keytool -genkey -v -keystore custom.keystore -alias aliasname -keyalg RSA -keysize 2048 -validity 10000
```

<img alt="Generating a key." src="/_images/apk_keytool_genkey.png" center no-shadow/>

7. Sign the APK with:

```
jarsigner -keystore custom.keystore -verbose modified.apk aliasname
```

<img alt="Signing the APK." src="/_images/apk_signed.png" center no-shadow/>

8. Uninstall the original application from the device:

```
adb uninstall tech.httptoolkit.pinning_demo
```

9. Install the modified APK:

```
adb install modified.apk
```

10. Navigate to your device settings and search for "certificates". Select `Install from phone storage` and select Caido's CA Certificate. Click `Done` to continue. Provide an arbitrary certificate name. This time select the `VPN and apps` option in the `Used for` dropdown menu. Click `OK` to save.

<img alt="Mobile app Caido certificate options." src="/_images/android_app_cert_option.png" center no-shadow width="300"/>

11. Next, open the HTTPToolkit application on your device. You should be able to make the following requests:

<img alt="Testing requests." src="/_images/pinning_demo_test.png" center no-shadow width="300"/>

11. You will now see traffic generated by the application in Caido's HTTP History.

<img alt="APK traffic." src="/_images/apk_test_traffic.png" center/>

## Known Issues

As you can see, certain requests result in an error message and are not proxied through Caido. This is due to additional security measures.

If you are unable to navigate the application and are still not seeing its traffic in Caido, continue to the [Intercepting Certificate Pinned Application Traffic](/tutorials/certificate_pinning.md) tutorial.
