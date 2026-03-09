---
description: "Learn how to add Caido's CA certificate to the system-store of a virtual Android device."
---

# Adding Caido's CA Certificate to the System Partition

In this tutorial, we will cover the process of adding Caido's CA certificate to the system-store of a virtual Android device.

::: warning NOTE
This tutorial is a continuation of [Setup & Configuration](/app/tutorials/android_virtual_device.md) and [Proxying Browser Traffic](/app/tutorials/android_browser_virtual.md). Ensure you have completed the previous steps before proceeding.
:::

## Renaming Caido's CA Certificate

In order for Caido's CA certificate to be compatible with the Android system, it will need to meet the expected naming format. The format is the legacy hash of a CA certificate's subject field with a `.0` extension.

<img alt="System storage certificate names." src="/_images/cert_name_format.png" center no-shadow/>

To generate the correct certificate file name:

1. Navigate to `http://127.0.0.1:8080/ca.crt` in a browser on your computer to download Caido's CA certificate.

2. Open a terminal and navigate to the file system location of the certificate and enter the following command:

```bash
openssl x509 -inform PEM -subject_hash_old -in ca.crt
```

3. Rename the certificate to the returned hash (_located between the command and `-----BEGIN CERTIFICATE-----`_) with a `.0` extension.

## Adding the Certificate

::: warning NOTE
This method will only work for virtual devices with an Android API level <= 33.
:::

To add the certificate to the system level certificate storage of the device:

1. In the **Projects** interface of the Android Studio window, **click** on the <code><Icon icon="fas fa-angle-down" /> More Actions</code> button and select `SDK Manager`.

<img alt="SDK Manager." src="/_images/sdk_manager.png" center no-shadow/>

2. Select `Android SDK` from the **Languages & Frameworks** drop-down menu.

3. Add the `emulator` directory (_a subdirectory of the file system location stated in the `Android SDK Location` field_) to your system's PATH environment variable

<img alt="Android SDK Location." src="/_images/android_studio_sdk_tools.png" center no-shadow/>

4. Open a terminal and execute the **emulator** tool with `-list-avds` to ensure the device is listed.

```bash
emulator -list-avds
```

5. Execute the **emulator** tool with the name of your device as the value of the `-avd` argument and `writeable-system` (_if your device is currently running, terminate it first by clicking the <code><Icon icon="fas fa-stop" /></code> button of its associated row in the Device Manager window_).

```bash
emulator -avd <device-name> -writable-system
```

6. Once the device has booted up, open a new terminal and execute the `adb` tool with `devices` to ensure the device is listed.

```bash
adb devices
```

<img alt="List of connected virtual Android devices." src="/_images/adb_device_list_emulator.png" center no-shadow/>

7. Execute the `adb` tool with the device ID as the value of the `-s` argument and  `root` to gain root privileges.

```bash
adb -s <device-id> root
```

<img alt="Restarting for root privileges." src="/_images/adb_root.png" center no-shadow/>

8. Execute the `adb` tool against the device with `shell avbctl disable-verification` to disable secure boot verification.

```bash
adb -s <device-id> shell avbctl disable-verification
```

<img alt="Disabling verification." src="/_images/adb_disable_verification.png" center no-shadow/>

9. Execute the `adb` tool against the device with `reboot` to reboot the device.

```bash
adb -s <device-id> reboot
```

10. Once the device has rebooted, gain root privileges again.

```bash
adb -s <device-id> root
```

11. Execute the `adb` tool against the device with `remount` to modify the partition permissions as read/write.

```bash
adb -s <device-id> remount
```

<img alt="Remounting." src="/_images/adb_remount.png" center no-shadow/>

11. In your terminal, navigate to the file system location of the renamed certificate.

12. Execute the `adb` tool against the device with the filename of the renamed certificate as the value of the `push` argument to move it into the System partition.

```bash
adb -s <device-id> push <hash.0> /system/etc/security/cacerts/
```

<img alt="Remounting." src="/_images/adb_push_cert.png" center no-shadow/>

13. Execute the `adb` tool with `shell chmod 664 -v` to set the proper permissions on the certificate by specifying its file system location on the device.

```bash
adb -s <device-id> shell chmod 664 -v /system/etc/security/cacerts/<hash.0>
```

<img alt="Certificate permissions." src="/_images/adb_chmod.png" center no-shadow/>

14. Reboot the device again for the changes to take effect.

```bash
adb -s <device-id> reboot
```

15. Once the device has rebooted, execute the `adb` tool against the device with `reverse tcp:8080 tcp:8080` to forward traffic to Caido.

```bash
adb -s <device-id> reverse tcp:8080 tcp:8080
```

::: tip
To verify the addition of the certificate:

1. On the device, navigate to the **Settings** interface.

2. In the <code><Icon icon="fas fa-magnifying-glass" /> Search settings</code> input field, search for and select `Trusted credentials`.

3. **Click** on `Trusted credentials` and locate `Caido` in the **System** tab certificate list.
:::

Once the certificate has been installed, interacting with certain applications on the device will add rows to the **HTTP History** traffic table in Caido.

::: warning NOTE
If traffic is not appearing in the **HTTP History** table in Caido, try:

- Disabling `Mobile data` usage.

- Disabling any VPN connections.

- Setting the Wi-Fi **Proxy hostname** to `10.0.2.2`.
:::

If application traffic is still not proxied through Caido or you are encountering errors/limitations in functionality, continue with the [Modifying an Android Application](/app/tutorials/modifying_apk.md) tutorial.