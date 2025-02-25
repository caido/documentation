# Intercepting Certificate Pinned Application Traffic

In the [previous tutorial](/tutorials/android_device.md), we demonstrated how to bypass the security protections provided by the `network_security_config.xml` file of an Android application. The technique that was being utilized is known as "certificate pinning" which ensures that an application will only trust SSL/TLS certificates from servers it is specifically designed to communicate with.

By defining our own security rules and including the `<certificates src="user" overridePins="true" />` directive, we configured the application to trust user-installed certificates and added Caido's CA certificate to the store.

However, there are many different libraries used in Android applications to provide HTTP support that implement certificate pinning directly in the application's code or pull certificates from a remote server.

If you are unable to navigate the application and are still not seeing its traffic in Caido, you will need to make additional modifications.

::: danger WARNING
Caido is not liable for any malfunctions, failures, damages, loss/theft of data, or other technical issues that may occur with your device as a result of following this tutorial. Proceed at your own risk.
:::

::: info

- ****This process does not require a rooted device.****
- Be aware that the names and locations of settings options may vary between devices.
- Ensure to pay attention to any prompts on the device itself while proceeding through these steps.
- Ensure to restart your terminal after adding to the PATH environment variable.
:::

::: warning NOTE
This tutorial is a continuation of [Proxying Android Traffic](/tutorials/android_device.md). If you are new to mobile application testing, we recommend you follow the steps covered in the previous tutorial to ensure the steps in this one align exactly.
:::

## Frida

**Frida** is a toolkit that allows you to hook custom scripts into running Android application processes, enabling real-time analysis and modification. This is what we will use to modify the processes are checking the SSL/TLS certificates.

[Download Frida's CLI tools.](https://frida.re/docs/installation/)

### Frida Gadget

Since certain Frida operations may not work with unrooted devices, you will also need the **Frida Gadget** library. Once we inject the library into the APK, we can then send commands to it using the CLI tools.

You can check what download you will need for your device's architecture with:

```
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

```
libfrida-gadget.so
```

## Bypassing Cerificate Pinning

To modify an Android application to bypass certificate pinning protections, we will need to insert the Frida Gadget library into the main **activity** stated in the `AndroidManifest.xml` configuration file. In Android development, an activity is the term used to refer to a specific page/screen of the application.

::: tip
Learn how to access the invididual files of an Android application APK in the previous tutorial: [Proxying Android Traffic](/tutorials/android_device.md)
:::

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

```
android:extractNativeLibs="true"
```

3. Next, search for the `activity` tag with a nested `intent-filter` tag that contains:

``` xml
<action android:name="android.intent.action.MAIN"/>
<category android:name="android.intent.category.LAUNCHER"/>
```

Within this `activity` tag will be a `android:name` attribute which stores the full name of the package that serves the main activity of the application upon launch:

```
tech.httptoolkit.pinning_demo.MainActivity
```

::: info
The packages can be recognized by their ending syntax of `<Keyword>Activity` (_e.g. `MainActivity`, `SplashActivity`, `WindowActivity`, `LauncherActivity`, etc._).
:::

4. Recursively search through the unpacked APK for the package name `tech.httptoolkit.pinning_demo.MainActivity` to locate its corresponding `.smali` file.

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

7. Next, create a `lib` directory in the unpacked APK folder, an architecture specific subdirectory, and move the `libfrida-gadget.so` file into it (_example: `/unpacked/lib/arm64-v8a/libfrida-gadget.so`_).

8. From the directory of the unpacked APK, repack it with:

```
apktool b -o unpinned.apk ./
```

<img alt="Repacking the APK." src="/_images/apk_unpinned_repack.png" center no-shadow/>

9. Sign the APK with:

```
jarsigner -keystore custom.keystore -verbose unpinned.apk aliasname
```

10. Uninstall the original application from the device:

```
adb uninstall tech.httptoolkit.pinning_demo
```

11. Install the modified APK:

```
adb install unpinned.apk
```

12. Next, open the SSL Pinning Demo application on your device. The screen will be blank as it is awaiting the script that will hook into the application's initialization. Supply it with:

```
frida -U gadget --codeshare fdciabdul/frida-multiple-bypass
```

14. Depending on the script used, you will now be able to make additional requests that were previously blocked when we only modified the `network_security_config.xml` file and see traffic in Caido's HTTP History.

## Bypass Scripts

Various HTTP libraries and their versions will require certain scripts in order to successfully bypass them.

### Frida CodeShare

[Frida Codeshare](https://codeshare.frida.re/browse) is Frida's official respository of scripts that can be called using the `--codeshare` command-line arguement.

```
frida -U gadget --codeshare <author>/<file>
```

::: danger WARNING
When sourcing files online, ensure to evaluate the code for any malicious operations before executing it.
:::

You can also write them yourself or source them alternative repositories. To specify a file, use the `-l` command-line arguement followed by the file's location:

```
frida -U gadget -l <file>
```
