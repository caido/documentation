---
description: "Learn how to modify Android APK files to bypass certificate pinning and enable HTTPS traffic interception through Caido."
---

# Modifying an Android Application: Virtual & Physical Devices

::: warning NOTE
This tutorial is a continuation of the previous tutorials. Ensure your environment and virtual/physical device is prepared before continuing.
:::

::: tip
For convenience, consider adding all installed tools/tool packages to your system PATH environment variable to avoid navigation/the need to use absolute paths in commands.
:::

To proceed with this tutorial, you will need to download/install the **SSL Pinning Demo** application.

## SSL Pinning Demo

The [SSL Pinning Demo](https://github.com/httptoolkit/android-ssl-pinning-demo) is an Android application developed by [HTTPToolkit](https://httptoolkit.tech/) for security education. It blocks HTTPS traffic from being proxied or intercepted via certificate pinning and a security configuration file.

The application provides an array of buttons that issue requests under various secure and insecure configurations. Unpacking and modifying the **Android Package Kit** (APK) file bundle that comprises the application demonstrates how these protective measures can be bypassed.

If an application's traffic is still not proxied through Caido or you encounter errors or limited functionality, similar protective measures likely exist in its code or configuration.

::: warning NOTE
This tutorial was written using:

- SSL Pinning Demo v1.4.1. To download this release visit: [https://github.com/httptoolkit/android-ssl-pinning-demo/releases/download/v1.4.1/pinning-demo.apk](https://github.com/httptoolkit/android-ssl-pinning-demo/releases/download/v1.4.1/pinning-demo.apk)

We recommend using the same version to ensure the instructions align.
:::

<img alt="List of connected Android devices." src="/_images/pinning_demo_requests.png" center no-shadow width="300"/>

::: info

- **This process does NOT require a rooted device.**
- Be aware that the exact names and locations of setting options may vary between devices.
- Ensure to pay attention to any prompts on the device itself while proceeding through these steps.
- For physical devices, ensure the device is connected to the computer running Caido via USB and that both the device and the computer are on the same Wi-Fi network.
- For convenience, consider adding all installed tools/tool packages to your system PATH environment variable to avoid the need to use absolute paths in commands.
:::

Once the `SSL Pinning Demo v1.4.1` APK has been downloaded to your computer, to install it on your device:

1. In the **Projects** interface of the Android Studio window, **click** on the <code><Icon icon="fas fa-angle-down" /> More Actions</code> button and select `SDK Manager`.

<img alt="SDK Manager." src="/_images/sdk_manager.png" center no-shadow/>

2. Select `Android SDK` from the **Languages & Frameworks** drop-down menu.

3. Open a terminal and navigate to the file system location stated in the `Android SDK Location` field.

<img alt="Android SDK Location." src="/_images/android_studio_sdk_tools.png" center no-shadow/>

4. Navigate into the `platform-tools` directory.

5. Execute the `adb` tool with `devices` to ensure the device is listed.

```bash
./adb devices
```

6. Execute the `adb` tool with the device ID as the value of the `-s` argument and the file system location of the `pinning-demo.apk` as the value of the `install` argument to install the application.

```bash
./adb -s <device-id> install </path/to/pinning-demo.apk>
```

## Extracting an APK

Once the `SSL Pinning Demo v1.4.1` application has been installed on your device, to simulate extracting the APK from the installation:

1. Execute the `adb` tool against the device with `shell` to initialize a terminal:

```bash
./adb -s <device-id> shell
```

2. Find the application's `base.apk` package on your device by listing all the file paths of installed packages and filtering the results by the application name:

```bash
./pm list packages -f | grep -i pinning
```

<img alt="Finding the base package." src="/_images/adb_package_location.png" center no-shadow/>

3. Copy the absolute file path (_starting from `/data` and ending with `/base.apk`_) and exit the device command-line interface using`CTRL` + `D` or by typing and entering `exit`.

4. Execute the `adb` tool against the device with the file path as the value of the `pull` argument to pull the APK to your computer.

```bash
./adb -s <device-id> pull </data/app/<path-segments>/base.apk>
```

<img alt="Pulling the base package." src="/_images/apk_pulled.png" center no-shadow/>

### Unpacking APKs

Once you have an application's APK, to decompile the package into its individual resources:

1. Download and install [Apktool](https://apktool.org/docs/install/) for your operating system.

2. Open a terminal and navigate to the file system location of the APK file.

3. Execute `apktool` with `d` and the output directory (_e.g. `unpacked`_) as the value of the `-o` argument against the APK file (_e.g. `pinning-demo.apk`_) to unpack the contents to the specified directory.

```bash
./apktool d -o unpacked pinning-demo.apk
```

<img alt="Unpacking the APK." src="/_images/apk_unpacked.png" center no-shadow/>

## Modifying the Network Security Configuration File

Application traffic may be blocked from interception/proxying due to the presence of a [Network Security Configuration](https://developer.android.com/privacy-and-security/security-config) file.
Introduced in Android 7.0 (_API level 24_), the `network_security_config.xml` file allows developers to customize network security settings for their applications.

In some cases, modifying this file and including the `<certificates src="user" overridePins="true" />` directive to trust user-supplied certificates may be sufficient enough to configure the application to be Caido compatible.

To make the appropriate changes:

1. Open the `/res/xml/network_security_config.xml` file from the unpacked directory in an editor (_or, if it doesn't exist, create it_).

2. Replace/write the content of the file to:

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

3. Save the changes to `/res/xml/network_security_config.xml`.

4. Ensure that the main configuration file, `AndroidManifest.xml` references the `network_security_config.xml` file via the `android:networkSecurityConfig="@xml/network_security_config"` attribute in the `<application>` tag. If you created a new `network_security_config.xml` file, you will have to explicitly add this.

5. Save any changes to `AndroidManifest.xml`.

6. Open a terminal and navigate to the file system location of the unpacked APK.

7. Execute `apktool` with `b` and the output filename (_e.g. `modified`_) as the value of the `-o` argument against the unpacked APK directory (_e.g. `unpacked`_) to repack the contents into an APK.

```bash
./apktool b -o modified.apk unpacked
```

<img alt="Repacking the APK." src="/_images/apk_repack.png" center no-shadow/>

8. Download and install [Java Development Kit (JDK)](https://docs.oracle.com/en/java/javase/23/install/overview-jdk-installation.html) for your operating system.

9. Open a new terminal and navigate to the `/bin` directory of the JDK installation.

10. Execute `keytool` to generate a signing key with a keystore filename as the value of the `-keystore` argument (_e.g. `custom.keystore`_).

```bash
./keytool -genkey -v -keystore custom.keystore -alias aliasname -keyalg RSA -keysize 2048 -validity 10000
```

<img alt="Generating a key." src="/_images/apk_keytool_genkey.png" center no-shadow/>

11. Follow the prompts to configure the key.

12. Navigate to the file system location stated in the `Android SDK Location` field.

13. Navigate into the version subdirectory of the `build-tools` directory.

14. Execute `zipalign` with `-p 4` against the file system location of the repacked APK filename (_e.g. `modified.apk`_) and specify a new APK file system location for the aligned file (_e.g. `aligned.apk`_).

```bash
./zipalign -p 4 </path/to/modified.apk> </path/to/aligned.apk>
```

15. Sign the APK with:

```bash
./apksigner sign --ks </path/to/custom.keystore> </path/to/aligned.apk>
```

16. Navigate to the `platform-tools` directory.

17. Execute the `adb` tool against the device with `uninstall tech.httptoolkit.pinning_demo` to uninstall the existing installation.

```bash
./adb -s <device-id> uninstall tech.httptoolkit.pinning_demo
```

18. Install the modified application on the device.

```bash
./adb -s <device-id> install </path/to/aligned.apk>
```

Open the SSL Pinning Demo application on your device. Modifying the `network_security_config.xml` file allows for the following requests (_highlighted in green_):

<img alt="Testing requests." src="/_images/android_security_config_modified.png" center no-shadow width="300"/>

You will now see traffic generated by the application in Caido's **HTTP History** traffic table.

<img alt="APK traffic." src="/_images/apk_test_traffic.png" center/>

As you can see, certain requests still result in an error message and are not proxied through Caido. This is due to certificate pinning within the codebase itself.

## Frida

**Frida** is a toolkit that allows you to hook custom scripts into running Android application processes, enabling real-time analysis and modification. This can be used to modify the processes are checking the SSL/TLS certificates.

[Download Frida's CLI tools.](https://frida.re/docs/installation/)

### Frida Gadget

Since certain Frida operations may not work with unrooted devices, you will also need the **Frida Gadget** library. Once we inject the library into the APK, we can then send commands to it using the CLI tools.

To check what download you will need for your device's architecture:

1. Navigate to the `platform-tools` directory.

2. Execute the `adb` tool against the device with `shell getprop ro.product.cpu.abi` to get the device's CPU ABI.

```bash
./adb -s <device-id> shell getprop ro.product.cpu.abi
```

Then, choose the appropriate Frida Gadget library download:

- For `armeabi-v7a` or `armeabi`: [android-arm.so.xz](https://github.com/frida/frida/releases/download/16.6.6/frida-gadget-16.6.6-android-arm.so.xz)
- For `arm64-v8a`: [android-arm64.so.xz](https://github.com/frida/frida/releases/download/16.6.6/frida-gadget-16.6.6-android-arm64.so.xz)
- For `x86`: [android-x86.so.xz](https://github.com/frida/frida/releases/download/16.6.6/frida-gadget-16.6.6-android-x86.so.xz)
- For `x86_64`: [android-x86_64.so.xz](https://github.com/frida/frida/releases/download/16.6.6/frida-gadget-16.6.6-android-x86_64.so.xz)

::: tip
The provided links will download v16.6.6. [View the latest releases in the Frida repository.](https://github.com/frida/frida/releases)
:::

Once downloaded, extract the library and rename it to:

```text
libfrida-gadget.so
```

## Bypassing Hardcoded Certificate Pinning

To bypass hardcoded certificate pinning protections, we will need to insert the Frida Gadget library into the main "activity" stated in the `AndroidManifest.xml` configuration file. In Android development, an activity is the term used to refer to a specific page/screen of the application.

1. Open the `AndroidManifest.xml` file of the unpacked APK in a text editor:

``` xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" android:compileSdkVersion="33" android:compileSdkVersionCodename="13" package="tech.httptoolkit.pinning_demo" platformBuildVersionCode="33" platformBuildVersionName="13">
    <uses-permission android:name="android.permission.INTERNET"/>
    <application android:allowBackup="true" android:appComponentFactory="androidx.core.app.CoreComponentFactory" android:extractNativeLibs="false" android:icon="@mipmap/ic_launcher" android:label="@string/app_name" android:networkSecurityConfig="@xml/network_security_config" android:roundIcon="@mipmap/ic_launcher_round" android:supportsRtl="true" android:theme="@style/Theme.MyApplication">
        <activity android:exported="true" android:name="tech.httptoolkit.pinning_demo.MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
    </application>
</manifest>
```

2. The `application` tag will contain an `android:extractNativeLibs` attribute. In order for the Frida Gadget library to function properly, this needs to be set to `"true"`:

```xml
android:extractNativeLibs="true"
```

3. Next, search for the `activity` tag with a nested `intent-filter` tag that contains:

``` xml
<action android:name="android.intent.action.MAIN"/>
<category android:name="android.intent.category.LAUNCHER"/>
```

Within this `activity` tag will be a `android:name` attribute which stores the full name of the package that serves the main activity of the application upon launch:

```text
tech.httptoolkit.pinning_demo.MainActivity
```

::: info
The packages can be recognized by their ending syntax of `<Keyword>Activity` (_e.g. `MainActivity`, `SplashActivity`, `WindowActivity`, `LauncherActivity`, etc._).
:::

4. Recursively search through the unpacked APK for the `MainActivity`'s `.smali` file.

5. Open the `smali/tech/httptoolkit/pinning_demo/MainActivity.smali` file and locate the `.method public constructor <init>()V` initialization function:

``` smali
.method public constructor <init>()V
    .locals 0

    .line 51
    invoke-direct {p0}, Landroidx/appcompat/app/AppCompatActivity;-><init>()V

    return-void
.end method
```

6. Modify this function class definition to include the Frida Gadget script and increment the value of its `.locals` property to account for the change:

``` smali
.method public constructor <init>()V
    .locals 1

    const-string v0, "frida-gadget"
    invoke-static {v0}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V

    .line 51
    invoke-direct {p0}, Landroidx/appcompat/app/AppCompatActivity;-><init>()V

    return-void
.end method
```

7. Next, create a `lib` directory in the unpacked APK folder, an architecture specific subdirectory, and move the `libfrida-gadget.so` file into it (_example: `/unpacked/lib/x86_64/libfrida-gadget.so`_).

8. Navigate to the `platform-tools` directory.

9. Execute the `adb` tool against the device with `b` and the output filename (_e.g. `frida-app.apk`_) as the value of the `-o` argument against the unpacked APK directory (_e.g. `unpacked`_) to repack the contents into an APK.

```bash
./apktool b -o frida-app.apk <path/to/unpacked>
```

<img alt="Repacking the APK." src="/_images/apk_unpinned_repack.png" center no-shadow/>

10. Navigate into the version subdirectory of the `build-tools` directory.

11. Sign the APK with:

```bash
./apksigner sign --ks custom.keystore frida-app.apk
```

12. Uninstall the original application from the device:

```bash
./adb uninstall tech.httptoolkit.pinning_demo
```

13. Install the modified APK:

```bash
./adb install frida-app.apk
```

14. Next, open the SSL Pinning Demo application on your device. The screen will be blank as it is awaiting the script that will hook into the application's initialization. Supply it with:

```bash
./frida -U gadget --codeshare fdciabdul/frida-multiple-bypass
```

15. Depending on the script used, you will now be able to make additional requests that were previously blocked when we only modified the `network_security_config.xml` file and see traffic in Caido's HTTP History.

### Bypass Scripts

Various HTTP libraries and their versions will require certain scripts in order to successfully bypass them.

#### Frida CodeShare

[Frida Codeshare](https://codeshare.frida.re/browse) is Frida's official repository of scripts that can be called using the `--codeshare` command-line option.

```bash
./frida -U gadget --codeshare <author>/<file>
```

::: danger WARNING
When sourcing files online, ensure to evaluate the code for any malicious operations before executing it.
:::

You can also write them yourself or source them alternative repositories. To specify a file, use the `-l` command-line option followed by the file's location:

```bash
./frida -U gadget -l <file>
```
