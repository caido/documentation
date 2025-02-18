# Intercepting Certificate Pinned Application Traffic

In the [previous tutorial](/tutorials/android_device.md), we demonstrated how to configure and bypass the security protections provided by the `network_security_config.xml` file of an Android application. The technique that was being utilized is known as "certificate pinning" which ensures that an application will only trust SSL/TLS certificates from servers it is specifically designed to communicate with.

By defining our own security rules and including the `<certificates src="user" overridePins="true" />` directive, we configured the application to trust user-installed certificates and added Caido's CA certificate to the store.

However, there are many different libraries used in Android applications to provide HTTP support that implement certificate pinning directly in the application's code or by pulling certificates from a remote server.

If you are unable to navigate the application and are still not seeing its traffic in Caido, you will need to take additional steps to successfully proxy the application's traffic with Caido.

::: warning NOTE
In this tutorial, we’ll use the HTTPToolkit Pinning Demo application to demonstrate how to modify an APK so that Caido can proxy its traffic, and we’ll test these changes using the app’s various HTTP requests. If you are new to mobile application testing, we recommend you [download the HTTPToolkit SSL Pinning Demo APK](https://github.com/httptoolkit/android-ssl-pinning-demo/releases/download/v1.4.1/pinning-demo.apk) to ensure the steps align exactly.
:::

## Apktool

- Brief description of tool's purpose.
- Installation steps.

## Frida

- Brief description of tool's purpose.
- Installation steps.

## Bypassing Cerificate Pinning

To modify an Android application to bypass certificate pinning protections, we will need to insert the Frida Gadget library into the main configuration file, `AndroidManifest.xml`.

::: tip
Learn how to access the invididual files of an Android application APK in the previous tutorial: [Proxying Android Traffic](/tutorials/android_device.md)
:::

- Steps to make necessary modifications.
