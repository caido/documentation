---
description: "Learn how to modify Android APK files to bypass certificate pinning and enable HTTPS traffic interception through Caido."
---

# Modifying an Android Application

In this tutorial, we’ll use the **HTTPToolkit Pinning Demo** application to demonstrate how to modify an APK so that Caido can proxy its traffic, and we’ll test these changes using the app’s various HTTP requests. If you are new to mobile application testing, we recommend you [download the HTTPToolkit SSL Pinning Demo APK](https://github.com/httptoolkit/android-ssl-pinning-demo/releases/download/v1.4.1/pinning-demo.apk) to ensure the steps align exactly.

<img alt="List of connected Android devices." src="/_images/pinning_demo_requests.png" center no-shadow width="300"/>

::: danger WARNING
Caido is not liable for any malfunctions, failures, damages, loss/theft of data, or other technical issues that may occur with your device as a result of following this tutorial. Proceed at your own risk.
:::

::: warning NOTE
This tutorial is a continuation of [Android Setup and Configuration](/tutorials/android_configuration.md). Ensure your environment and device are prepared before continuing.
:::

::: info

- ****This process does not require a rooted device.****
- Be aware that the exact names and locations of setting options may vary between devices.
- Ensure to pay attention to any prompts on the device itself while proceeding through these steps.
- For convenience, add all installed tools to your system's `PATH` envrionment variable to make them globally accessible. Ensure to restart your terminal afterwards so the changes take effect.
- For physical devices, make sure the device is connected to the computer running Caido via USB and that both the device and the computer are on the same Wi-Fi network.
:::

::: tip
If you want to automate this entire process, you can use [apk-mitm](https://github.com/niklashigi/apk-mitm).
:::

## Android Package Kits

Android applications are files bundled as `.apk` (**Android Package Kit**) packages and must be modified for use with Caido.

APKs can be acquired by downloading them directly from repositories or sites such as [apkmirror.com](https://www.apkmirror.com/) or [apkpure.com](https://apkpure.com/).

### Extracting APKs

<details>
<summary>APKs can also be extracted from applications already installed on your device. Expand this section to learn how.</summary>

1. First, install the demo application to your connected device with:

```bash
adb install pinning-demo.apk
```

2. Initialize a command-line interface on your Android device:

```bash
adb shell
```

3. Find the application's `base.apk` package on your device by listing all the file paths of installed packages and filtering the results by the application name:

```bash
pm list packages -f | grep -i pinning
```

<img alt="Finding the base package." src="/_images/adb_package_location.png" center no-shadow/>

4. Copy the location and exit the device command-line interface using`CTRL` + `D` or by typing and entering `exit`.

5. Pull the `base.apk` from your device to your computer (_do not include the `=<package-name>` portion of the output_):

```bash
adb pull /data/app/tech.httptoolkit.pinning_demo-1wMoq8214ewjz2S-xt-sCA==/base.apk
```

<img alt="Pulling the base package." src="/_images/apk_pulled.png" center no-shadow/>

</details>

### Unpacking APKs

**Apktool** is a tool for reverse engineering Android applications. Once you have an application's APK, with Apktool you can decompile the package into its individual resources (_such as XML files, images, and code_) and then rebuild them after making modifications.

[Download Apktools for your operating system.](https://apktool.org/docs/install)

To unpack the contents of an APK to a new directory within the current directory, use the following command:

```bash
apktool d -o unpacked pinning-demo.apk
```

_If you extracted the APK, ensure to replace `pinning-demo.apk` with `base.apk`._

<img alt="Unpacking the APK." src="/_images/apk_unpacked.png" center no-shadow/>

## Modifying the Network Security Configuration File

One of the reasons that Caido may not be able to proxy the application traffic is due to the presence of a [Network Security Configuration file](https://developer.android.com/privacy-and-security/security-config).
Introduced in Android 7.0 (API level 24), the `network_security_config.xml` file allows developers to customize network security settings for their applications.

In some cases, modifying this file and including the `<certificates src="user" overridePins="true" />` directive to trust user-supplied certificates may be enough to make the application Caido compatible.

To make the appropriate changes:

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

```bash
apktool b -o modified.apk ./
```

<img alt="Repacking the APK." src="/_images/apk_repack.png" center no-shadow/>

5. You will need the `keytool` tool in order to repack the APK. This tool is included in the Java Development Kit (JDK).

[Download the JDK for your operating system](https://docs.oracle.com/en/java/javase/23/install/overview-jdk-installation.html) and add it to your system's `PATH` environment variable.

6. Generate a signing key with:

```bash
keytool -genkey -v -keystore custom.keystore -alias aliasname -keyalg RSA -keysize 2048 -validity 10000
```

<img alt="Generating a key." src="/_images/apk_keytool_genkey.png" center no-shadow/>

7. Align the APK:

```bash
zipalign -p 4 modified.apk aligned.apk
```

8. Sign the APK with:

```bash
apksigner sign --ks custom.keystore aligned.apk
```

::: tip
If the application is currently installed on your device, before continuing, uninstall it with:

```bash
adb uninstall tech.httptoolkit.pinning_demo
```

:::

9. Install the modified APK:

```bash
adb install aligned.apk
```

10. Next, open the HTTPToolkit application on your device. You should be able to make the following requests:

<img alt="Testing requests." src="/_images/android_security_config_modified.png" center no-shadow width="300"/>

11. You will now see traffic generated by the application in Caido's HTTP History.

<img alt="APK traffic." src="/_images/apk_test_traffic.png" center/>

As you can see, certain requests still result in an error message and are not proxied through Caido. This is due to certificate pinning within the codebase itself.

## Frida

**Frida** is a toolkit that allows you to hook custom scripts into running Android application processes, enabling real-time analysis and modification. This is what we will use to modify the processes are checking the SSL/TLS certificates.

[Download Frida's CLI tools.](https://frida.re/docs/installation/)

### Frida Gadget

Since certain Frida operations may not work with unrooted devices, you will also need the **Frida Gadget** library. Once we inject the library into the APK, we can then send commands to it using the CLI tools.

You can check what download you will need for your device's architecture with:

```bash
adb shell getprop ro.product.cpu.abi
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

8. From the directory of the unpacked APK, repack it with:

```bash
apktool b -o frida-app.apk ./
```

<img alt="Repacking the APK." src="/_images/apk_unpinned_repack.png" center no-shadow/>

9. Sign the APK with:

```bash
apksigner sign --ks custom.keystore frida-app.apk
```

10. Uninstall the original application from the device:

```bash
adb uninstall tech.httptoolkit.pinning_demo
```

11. Install the modified APK:

```bash
adb install frida-app.apk
```

12. Next, open the SSL Pinning Demo application on your device. The screen will be blank as it is awaiting the script that will hook into the application's initialization. Supply it with:

```bash
frida -U gadget --codeshare fdciabdul/frida-multiple-bypass
```

14. Depending on the script used, you will now be able to make additional requests that were previously blocked when we only modified the `network_security_config.xml` file and see traffic in Caido's HTTP History.

### Bypass Scripts

Various HTTP libraries and their versions will require certain scripts in order to successfully bypass them.

#### Frida CodeShare

[Frida Codeshare](https://codeshare.frida.re/browse) is Frida's official repository of scripts that can be called using the `--codeshare` command-line option.

```bash
frida -U gadget --codeshare <author>/<file>
```

::: danger WARNING
When sourcing files online, ensure to evaluate the code for any malicious operations before executing it.
:::

You can also write them yourself or source them alternative repositories. To specify a file, use the `-l` command-line option followed by the file's location:

```bash
frida -U gadget -l <file>
```
