# Connecting Android to Caido

In this guide, we will cover how to proxy Android mobile traffic through Caido.

**You will need:**

- A USB cord to connect your Android device.
- [Android Debug Bridge (ADB)](https://developer.android.com/tools/adb). This command-line tool allows you to communicate with a device. It facilitates device actions such as installing and debugging applications.
- [Frida](https://frida.re/). Most applications utilize [SSL certificate pinning](https://www.ssl.com/blogs/what-is-certificate-pinning/) to prevent tools such as Caido from intercepting secure traffic. With Frida, you can hook into the SSL validation functions in order to disable the pinning check.

::: info
This method will work even if the phone isn’t rooted.
:::

## Device Preparation

1. Ready your device by connecting it to your computer with the USB cable.

2. Next enable [Developer Mode](https://developer.android.com/studio/debug/dev-options) on your device.

3. Configure the Wi-Fi settings by navigating to `Network details` under your devices’s Wi-Fi settings. Select the configuration option (_the pencil icon in the top-right corner_) and then select `Manual` under the `Proxy` dropdown menu. Set the value of the `Proxy hostname` to `127.0.0.1` and `8080` for the `Proxy port`.

## Application Installation

4. Download the .apk file for the application on your computer.

5. To install the application to your connected device, run:

```
adb install [APPLICATION FILE]
```

## Caido Configuration

6. Next install [Caido’s CA certificate](/reference/configuration/import_ca_certificate.html#ca-certificate). Add the certificate to your device by navigating to the `Encryption and Credentials` settings and selecting `Install a certificate`.

7. To proxy the traffic on port 8080 of the device to port 8080 on your computer, run:

```
adb reverse tcp:8080 tcp:8080
```

## Bypass Certificate Pinning

8. Unpack the .apk file by running:

```
apktool d -o unpack [FILE NAME]
```

9. Download the [Frida Gadget](https://frida.re/docs/gadget/) library by running the following:

```
cd unpack/lib/arm64-v8a

wget https://github.com/frida/frida/releases/download/16.1.5/frida-gadget-16.1.5-android-arm64.so.xz

unxz frida-gadget-16.1.5-android-arm64.so.xz

mv frida-gadget-16.1.5-android-arm64.so libfrida-gadget.so
```

10. Open the `AndroidManifest.apk` file.

8. Find `android:extractNativeLibs=false` and change the value to `true`. This will be located within the `<application>` element.

9. Locate the `launcher` entry point of the application. This will be found within the `<activity>` element:

```
<activity android:exported="true" android:launchMode="standard" android:name="[ENTRY POINT]"
```

10. Search for the entry point in the rest of the unpacked application directory:

```
grep [ENTRY POINT]
```

10. Once the file that defines the class is found, add the Frida gadget library to the object class by using the following code within the `.method public constructor <init>()V` method:

```
const-string v0, “frida-gadget”
invoke-static {v0}, Ljava/lang/System;->loadLibrary(LJava/lang/String;)V
```

Ensure to change the value of `.locals` from 0 to 1. Once added, the file should resemble the following:

```
# direct methods
.method public constructor <init>()V
    .locals 1

    const-string v0, "frida-gadget"
    invoke-static {v0}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V

    .line 1
    invoke-direct {p0}, Lcom/trello/rxlifecycle3/components/support/RxAppCompatActivity;-><init>()V

    .line 2
    .line 3
    .line 4
    return-void
.end method
```

11. Navigate back to where the unpacking was done and repack the .apk file by running:

```
apktool b --use-aapt2 -o [FILE NAME].apk unpack/
```

12. Zip the .apk file with:

```
zipalign 4 [FILE NAME].apk [ZIP FILE NAME].apk
```

13. Create a Java key store in order to sign the file with:

```
keytool -genkey -v -keystore custom.keystore -alias [KEY NAME] -keylang RSA -keysize 2048 -validity 10000
```

14. Sign the file using:

```
apksigner sign -ks custom.keystore [ZIP FILE NAME].apk
```

15. Manually uninstall the original application and then use the following command to install the modified application just created:

```
adb install [ZIP FILE NAME].apk
```

16. Bypass certificate pinning with:

```
frida -U gadget --codeshare sowdust/universal-android-ssl-pinning-bypass-2
```

At this point, traffic from your Android device should be proxied and available within Caido!
