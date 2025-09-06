# Troubleshooting: Startup

## "Instance is unreachable."

If you encounter this error when attempting to launch a Caido instance, it indicates the Caido subprocess failed to spawn. [View the backend logs for more insight](/guides/data_location.html).

<img alt="Instance is unreachable." src="/_images/instance_is_unreachable.png" width=700px center/>

### Plugin Failure

This can occur if a backend component of a plugin is dead locked. To resolve this issue, enable safe mode to disable either the frontend or backend plugin components and recover the Instance:

- To disable the frontend component of a plugin, access Caido in your browser by navigating to [http://127.0.0.1:8080/?safe](http://127.0.0.1:8080/?safe).
- To disable the backend component of a plugin, launch the Caido CLI with the `--safe` flag:

```
caido --safe
```

## "Encountered an error when communicating with the destination server."

If you encounter a similar message to the following:

```
Encountered an error when communicating with the destination server

Failed to acquire connection

Caused by:
    0: Failed to perform TLS handshake
    1: error:1408F10B:SSL routines:ssl3_get_record:wrong version number:ssl/record/ssl3_record:c:332
```

Check your proxy settings and ensure the `Type` is set to HTTP.

<img alt="Proxy settings type." src="/_images/proxy_settings_type.png" width=900px center/>

## "Could not initialize configuration."

If you encounter a similar message to the following:

```
Error: Could not initialize configuration
Caused by:
    0: Authentication service error
    1: Cloud operation failed
    2: Cloud unavailable
    3: error sending request for url (https://api.caido.io/oauth2/register): error trying to connect: tcp connect error: Connection refused (os error 111)
    4: error trying to connect: tcp connect error: Connection refused (os error 111)
    5: tcp connect error: Connection refused (os error 111)
    6: Connection refused (os error 111)
```

Check your internet connection. Caido requires an internet connection at the following moments:

- On first launch.
- During login.
- After 7 days offline (_the time period after which your authentication token needs to be refreshed_).

For more information on why/when this is required, view the [Authentication](/concepts/internals/authentication.md) page.

## "Date mismatch: make sure your device's date and time settings are correct."

If you encounter this error during login, it means that your computer time is likely out of sync. Visit [time.is](https://time.is/) to confirm it.

<img alt="Date mismatch." src="/_images/date_mismatch_error.png" width=600px center/>

Caido allows 5 minutes of deviation between the "real" time and your computer time. To fix it, you will have to manually resync the time using NTP.

### Fixing on Windows:

1. Right-click on the clock.
2. Select `Adjust date and time`.
3. Go to `Date & Time` in `Settings`.
4. Click `Sync now`.

### Fixing on macOS:

1. Open a terminal window.
2. Use the `sntp` command with the `-S` option to slew the clock:
  
```
sudo sntp -S pool.ntp.org
```

3. Check the time synchronization status again using the same command.

### Fixing on Linux:

1. Open a terminal or SSH into your server.
2. Install the NTP package:

```
sudo apt-get install ntp
```

3. Once the installation is complete, the NTP service should start automatically.
4. Check its status with:

```
sudo systemctl status ntp
```
