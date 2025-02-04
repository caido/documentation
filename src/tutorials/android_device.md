# Proxying Android Traffic

In this tutorial, we will cover the process of configuring an Android device to proxy its traffic through Caido.

::: info

- ****This process does not require a rooted device.****
- Be aware that the names and locations of settings options may vary between devices.
- Ensure to pay attention to any prompts on the device itself while proceeding through these steps.
:::

## Android SDK Platform-Tools: adb

To interface with the Android device using your computer's terminal, you will need the **Android Debug Bridge (adb)** which is included in the Platform-Tools package of the Android SDK.

[Download the Platform-Tools for your operating system.](https://developer.android.com/tools/releases/platform-tools#downloads) Once downloaded, unzip the folder and make it globally accessible by adding it to your system's PATH environment variable.

To use `abd` with your Android device, navigate to the device settings and enable the [`Developer options`](https://developer.android.com/studio/debug/dev-options#enable). Then enable `USB debugging`.

Connect the Android device to your computer over USB and verify the connection by running `adb devices` in your terminal. If the device is connected, it will be listed in the output.

<img alt="List of connected Android devices." src="/_images/adb_device_list.png" center no-shadow/>

## Configuring the Android Device

To configure your Android device to use Caido:

1. Ensure the device is on the same Wi-Fi network as the computer running Caido.
2. Navigate to the device Wi-Fi settings and select your network SSID.
3. Access the `Advanced` settings of the network and select the `Manual` option from the `Proxy` dropdown menu:

<img alt="Android proxy settings." src="/_images/android_proxy_settings.png" center no-shadow width="300"/>

4. Set the proxy address to: `127.0.0.1:8080`
5. Click `Save` to set the proxy configurations.

### Port Forwarding

As Caido is running on your computer, not your phone - run the following command from the `/platform-tools` directory:

```
adb reverse tcp:8080 tcp:8080
```

This command forwards traffic from `localhost:8080` on your device to port `8080` on your computer through the USB connection.

::: tip
If the command output contains the message "adb.exe: device unauthorized", accept the permissions prompt on your device, run `adb kill-server` and then `adb reverse tcp:8080 tcp:8080` again.
:::

## Intercepting Mobile Browser Traffic

1. Navigate to [http://127.0.0.1:8080/ca.crt](~http://127.0.0.1:8080/ca.crt~) in your device's browser to download Caido's CA certificate. Provide an arbitrary certificate name and select `Wi-Fi` in the `Used for` dropdown menu.

<img alt="Mobile browser Caido certificate options." src="/_images/android_cert_options.png" center no-shadow width="300"/>

2. Access the `Advanced` general Wi-Fi settings, select `Install network certificates`, and select the Caido `ca.crt` file.
3. Navigate to a website using your device's browser, you will now see the traffic in Caido's HTTP History.

## Intercepting Application Traffic

Android mobile applications are packaged as `.apk` (_Android Package Kit_) files.

::: tip
You can download these files using sites such as [apkpure.com](~https://apkpure.com/~).
:::

Once downloaded, you can install the application to your device using:

```
adb install <file-name>
```

### "I am not seeing any traffic in Caido and I cannot navigate the application. What is happening?"

For some applications, you will immediately see the traffic they generate in Caido's history. Others implement security measures to prevent MITM attacks by specifying one or more trusted CA certificates, rather than relying on Android's built-in system certificate store.

This security measure, known as "certificate pinning", ensures that the application will only trust SSL/TLS certificates from servers it is specifically designed to communicate with.

If you are unable to navigate the application and are not seeing its traffic in Caido, you will need to make modifications to its files.

[Download the HTTPToolkit android-ssl-pinning-demo application](https://github.com/httptoolkit/android-ssl-pinning-demo/releases/download/v1.4.1/pinning-demo.apk) and install it on your device. This is the application we will be using in the following sections to demonstrate how to make the necessary modifications.

## Unpacking APKs

**Apktool** is a tool for reverse engineering Android applications. With Apktool, you can decompile APK files to their original resources (_such as XML files, images, and code_) and then rebuild them after making modifications.

[Download Apktools for your operating system.](https://apktool.org/docs/install)

Once installed, to unpack an APK:

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

5. Unpack the contents of the `base.apk` package to a new directory within the current directory using:

```
apktool d -o unpacked base.apk
```

## Modifying the Network Security Configuration File

One of the reasons that Caido may not be able to proxy the application traffic is due to the presence of a [Network Security Configuration file](https://developer.android.com/privacy-and-security/security-config).
Introduced in Android 7.0 (API level 24), the `network_security_config.xml` file allows developers to customize network security settings for their applications.

You will need to [export the CA Certificate of your Caido instance](https://docs.caido.io/guides/tls.html) and add it to this file:

1. Open the file in a text editor. It will be located at `/res/xml/network_security_config.xml`.

``` xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
<!-- Root element for Android network security configurations. -->
    <domain-config>
    <!-- Configuration block for a specific domain (sha256.badssl.com). -->
        <domain includeSubdomains="false">sha256.badssl.com</domain>
        <!-- Specifies the domain this config applies to. includeSubdomains="false" means 
             it only applies to exact domain match, not subdomains. -->
        <pin-set>
        <!-- Defines SSL certificate pinning rules. -->
            <pin digest="SHA-256">C5+lpZ7tcVwmwQIMcRtPbsQtWLABXhQzejna0wHFr8M=</pin>
            <pin digest="SHA-256">ABCDEFABCDEFABCDEFABCDEFABCDEFABCDEFABCDEFA</pin>
            <!-- Two certificate pins using SHA-256 hashes. The app will only trust 
                 certificates matching these public key hashes. -->
        </pin-set>
        <trust-anchors>
            <certificates src="@raw/lets_encrypt_isrg_root" />
            <!-- Specifies trusted root certificates. Here it's using a Let's Encrypt 
                 ISRG root certificate stored in the app's raw resources. -->
        </trust-anchors>
        <trustkit-config enforcePinning="true">
            <!-- TrustKit-specific configuration. -->
            <report-uri>http://trustkit-report-url.test</report-uri>
            <!-- URL where pin validation failures will be reported. -->
        </trustkit-config>
    </domain-config>
    <domain-config>
    <!-- Second configuration block for a different domain (rsa4096.badssl.com). -->
        <domain includeSubdomains="false">rsa4096.badssl.com</domain>
        <pin-set>
            <pin digest="SHA-256">C5+lpZ7tcVwmwQIMcRtPbsQtWLABXhQzejna0wHFr8M=</pin>
        </pin-set>
        <trust-anchors>
            <certificates src="@raw/lets_encrypt_isrg_root" />
            <!-- Same trust anchor configuration as above. -->
        </trust-anchors>
    </domain-config>
</network-security-config>
```

::: tip
If you want to automate this entire process, you can use [apk-mitm](https://github.com/niklashigi/apk-mitm).
:::

## Intercepting Certificate Pinned Application Traffic

If the application is generating HTTPS errors, it is utilizing its own set of trusted CA certificates, rather than relying on Android's built-in system certificate store. This security measure, known as "certificate pinning", ensures that the application will only trust SSL/TLS certificates from servers it is specifically designed to communicate with.

If this is the case, you will need the following:

### Frida

Frida is a toolkit that allows you to inject custom scripts into running application processes, enabling real-time analysis and modification.

[Download Frida's CLI tools.](~https://frida.re/docs/installation/~)

## Bypassing Cerificate Pinning

To modify an application to bypass certificate pinning protections:

1. Open the `AndroidManifest.xml` file of the unpacked APK in a text editor.

2. Next, search for the `activity` tag with a nested `intent-filter` tag that contains:

- `<action android:name="android.intent.action.MAIN"/>`

- `<category android:name="android.intent.category.LAUNCHER"/>`

The value of the `android:name` attribute of this `<activity>` tag is the full AppActivity package name which serves as the entry point of the application upon launch.

```
<activity android:name="com.example.app.MainActivity">
    <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
    </intent-filter>
</activity>
```

::: info
Syntax of `<Keyword>Activity` (_e.g. `MainActivity`, `SplashActivity`, `WindowActivity`, `LauncherActivity`, etc._).
:::

3. Recursively search through the unpacked directory for the AppActivity’s full package name (_e.g. `com.example.app.MainActivity`_) to locate its corresponding `.smali` file (_typically under `smali/` or `smali_classes2/`_).

```
grep -r <package-name>
```

4. After searching, look for the AppActivity file in the results (_e.g. `smali/com/example/app/dir/main/activity/MainActivity.smali`_).
