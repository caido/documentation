---
description: "Troubleshooting Caido startup issues including unreachable instances, connection errors, and configuration problems."
---

# Startup Issues

## "Instance is unreachable"

This error may occur when a Caido subprocess has failed to spawn.

<img alt="Instance is unreachable." src="/_images/instance_is_unreachable.png" width=700px center/>

### Resolution

If you encounter this error message after attempting to launch a Caido instance, enable safe mode to disable either the frontend or backend component of a plugin and recover the instance.

To disable the frontend component of a plugin, access Caido in your browser by navigating to [http://127.0.0.1:8080/?safe](http://127.0.0.1:8080/?safe). In the Plugins interface, open the `Installed` tab, and **click** on the <code><Icon icon="fas fa-angle-right" /></code> button attached to a plugin row to expand the component settings. Then, **click** on the frontend component checkbox to remove its fill.

<img alt="The plugin component checkboxes." src="/_images/plugin_frontend_component_disabled.png" width=700px center/>

To disable the backend component of a plugin, launch Caido with the `--safe` argument.

```bash
caido --safe
```

## "Encountered an error when communicating with the destination server"

```text
Encountered an error when communicating with the destination server

Failed to acquire connection

Caused by:
    0: Failed to perform TLS handshake
    1: error:1408F10B:SSL routines:ssl3_get_record:wrong version number:ssl/record/ssl3_record:c:332
```

This error may occur when your proxy settings are misconfigured.

### Resolution

If you encounter this error message while proxying traffic through Caido, check your proxy settings and ensure the `Type` is set to HTTP.

<img alt="Proxy settings type." src="/_images/proxy_settings_type.png" width=900px center/>

## "Could not initialize configuration"

```text
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

This error may occur due to internet connection issues. Caido requires an internet connection on first launch, during login, and after 7 days offline (_the time period after which your authentication token needs to be refreshed_).

### Resolution

If you encounter this error message, check your internet connection.
