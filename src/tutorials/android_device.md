# Proxying Android Traffic

In this tutorial, we will cover the process of configuring an Android device to proxy its traffic through Caido.

::: info

- ****This process does not require a rooted device.****
- Be aware that the names and locations of settings options may vary between devices.
- Ensure to pay attention to any prompts on the device itself while proceeding through these steps.
:::

## Android SDK Platform-Tools: adb

To interface with the Android device using your computer's terminal, you will need the `Android Debug Bridge (adb)` which is included in the Platform-Tools package of the Android SDK.

[Download the Platform-Tools for your operating system.](~https://developer.android.com/tools/releases/platform-tools#downloads~) Once downloaded, unzip the folder.

To use `abd` with your Android device, navigate to the device settings and enable the [`Developer options`](~https://developer.android.com/studio/debug/dev-options#enable~). Then enable `USB debugging`.

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

## Intercepting Browser Traffic

1. Navigate to [http://127.0.0.1:8080/ca.crt](~http://127.0.0.1:8080/ca.crt~) in your device's browser to download Caido's CA certificate. Provide an arbitrary certificate name and select `Wi-Fi` in the `Used for` dropdown menu.
2. Access the `Advanced` general Wi-Fi settings, select `Install network certificates`, and select the Caido `ca.crt` file.
3. Navigate to a website using your device's browser, you will now see the traffic in Caido's HTTP History.

## Intercepting Application Traffic

Android mobile applications are packaged as `.apk` (*_Android Package Kit_*) files. You can download these files using sites such as [apkpure.com](~https://apkpure.com/~).

Once downloaded, you can install the application to your device using:

```
adb install <file-name>
```

## Intercepting Certificate Pinned Application Traffic

If the application is generating HTTPS errors, it is utilizing its own set of trusted CA certificates, rather than relying on Android's built-in system certificate store. This security measure, known as "certificate pinning", ensures that the application will only trust SSL/TLS certificates from servers it is specifically designed to communicate with.

If this is the case, you will need the following:

### Apktool

Apktool is a tool for reverse engineering Android applications. With Apktool, you can decompile APK files to their original resources (*_such as XML files, images, and code_*) and then rebuild them after making modifications.

This process involves working with `.smali` files, which are a readable representation of the code within Android apps.

[Download Apktools for your operating system.](~https://apktool.org/docs/install~).

### Frida

Frida is a toolkit that allows you to inject custom scripts into running application processes, enabling real-time analysis and modification.

[Download Frida's CLI tools.](~https://frida.re/docs/installation/~)

## Bypassing Cerificate Pinning

To modify an application to bypass certificate pinning protections:

1. Initialize a command-line interface on your Android device:

```
adb shell
```

2. Find the application `.apk` file on your device by listing all the file paths of installed packages and filtering the results by the application name:

```
pm list packages -f | grep -i <application-name>
```

3. Exit the device command-line interface and return to your computer terminal using`CTRL+D` or by typing and entering `exit`.

4. Pull the `.apk` file from your device to your computer (_do not include the `=<package-name>` portion of the output_):

```
adb pull <application-path>
```

5. Unpack the `.apk` to a new directory within the current directory using:

```
apktool d -o <new-directory> <file-name>
```

6. Open the `AndroidManifest.xml` file of the unpacked APK in a text editor.

6. Next, search for the `activity` tag with a nested `intent-filter` tag that contains:

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

7. Recursively search through the unpacked directory for the AppActivity’s full package name (*_e.g. `com.example.app.MainActivity`_*) to locate its corresponding `.smali` file (*_typically under `smali/` or `smali_classes2/`_*).

```
grep -r <package-name>
```

9. After searching, look for the AppActivity file in the results (_e.g. `smali/com/example/app/dir/main/activity/MainActivity.smali`_).