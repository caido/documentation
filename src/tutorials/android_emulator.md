# Proxying Android Emulator Traffic

In this tutorial, we will cover the process of configuring an **Android Virtual Device (AVD)**, also known as an "emulator", to proxy its traffic through Caido.

::: info

You will need to [download and install Android Studio](https://developer.android.com/studio) for your operating system.
:::

## Emulator Builds

Android manages SSL/TLS certificates at a **system level** and **user level**. The **system certificate store** contains pre-installed certificates trusted by the Android system. In order to access and modify this store, you must have root privileges.

Using adb, we can inject certificates into the privileged store in standard Google API or Android Open Source Project (AOSP) builds. However, Google Play builds are signed with a release key, meaning you can't get root privileges with these images, preventing this direct injection.

::: tip

[Learn how to create an AVD.](https://developer.android.com/studio/run/managing-avds?utm_source=android-studio)
:::

However, when trying to reverse engineer applications that reply on Google Play services, such as authentication, location services, etc., this can be an issue. For emulators that lack the Play Store, you can manually install these applications and services with [Open GApps](https://opengapps.org/).

## Configuring the Android Device

1. Launch the emulator and verify the connection with the terminal command:

```
adb devices
```

<img alt="List of connected Android devices." src="/_images/adb_emulator_list.png" center no-shadow/>

2. Restart the `adbd` process on the emulator to gain root privileges:

```
adb root
```

3. Generate the legacy hash of Caido's CA certificate's subject field:

```
openssl x509 -inform DER -subject_hash_old -in </path/to/your/cacert.der>
```

4. Rename the Caido CA certificate to the hash with a `.0` extension.

5. 