# Troubleshooting

Here you'll find solutions to common issues you might face while using Caido.

## Installation Issues

### "The SUID sandbox helper binary was found, but is not configured correctly."

If you're using Linux and have installed Caido using the [AppImage](/quickstart/beginner_guide/setup/linux.html#appimage) installation method, you may encounter an error, accompanied by a message similar to the following:

```
[142547:0410/141348.635410:FATAL:setuid_sandbox_host.cc(163)] The SUID sandbox helper binary was found, but is not configured correctly. Rather than run without sandboxing I'm aborting now. You need to make sure that /tmp/.mount_caido-PMiQot/chrome-sandbox is owned by root and has mode 4755.
```

This error happens due to [AppArmor](https://apparmor.net/), the Linux application security system. Each time Caido is launched, it loads itself in the `tmp` folder as a virtual file system before execution. This means there is no hook to add an AppArmor profile, which defines exactly what a certain program is allowed and not allowed to do in the context of the operating system.

There are three ways to work around this issue (_listed in order, beginning with the most secure to the least secure methods_):

::: info
For the following commands throughout each of the three methods, be sure to replace `/path/to/caido-desktop-vX.XX.X-linux-<architecture>.AppImage` with the path, versioning, and architecture to the AppImage file that is appropriate to you. If you renamed the file, account for that as well.
:::

#### Create an AppArmor Profile for Caido (Preferred Method):

1. Create a new profile file in the AppArmor profile directory with:

```
sudo nano /etc/apparmor.d/appimage.caido
```

2. The file's content should be:

```
abi <abi/4.0>,
include <tunables/global>

profile appimage.caido /path/to/caido-desktop-vX.XX.X-linux-<architecture>.AppImage  flags=(unconfined) {
userns,

include if exists <local/appimage.caido>
}
```

3. Read and load the profile with:

```
apparmor_parser -r /etc/apparmor.d/appimage.caido
```

#### Run Caido without a Sandbox

To disable the AppArmor sandbox security restrictions, use the `--no-sandbox` argument when launching Caido:

```
/path/to/caido-desktop-vX.XX.X-linux-<architecture>.AppImage --no-sandbox
```

If you would like to apply this to every launch:

1. Create a file with the `.desktop` extension located in either:

- `~/.local/share/applications/` for the current user account.
- `/usr/share/applications/` for all user accounts.

2. The file's content should be:

```
[Desktop Entry]
Version=1.0
Name=Caido
Comment=Caido - A platform for secure vulnerability management
Exec=/path/to/caido-desktop-vX.XX.X-linux-<architecture>.AppImage --no-sandbox
Icon=/path/to/caido-icon.png
Terminal=false
Type=Application
Categories=Security;Utility;Networking;
StartupNotify=true
```

3. Refresh the desktop application icon cache with:

```
sudo update-icon-caches /usr/share/icons/*
```

::: tip TIPS

- Ensure to replace `/path/to/caido-icon.png` with the actual path and filename of the image you want to use for Caido's desktop application icon.

- You can use the Caido logo as the image by downloading it from [https://github.com/caido/caido/blob/main/brand/png/logo.png](https://github.com/caido/caido/blob/main/brand/png/logo.png).
:::

#### Disable AppArmor (Not Recommended)

To disable AppArmor globally, run the following command:

```
sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0
```

## Startup Issues

### "Instance is unreachable."

If you encounter this error when attempting to launch a Caido instance, it indicates the Caido subprocess failed to spawn. This can occur if a backend component of a plugin is dead locked. [View the backend logs for more insight](/guides/data_location.html).

<img alt="Instance is unreachable." src="/_images/instance_is_unreachable.png" width=700px center/>

To resolve this issue, enable safe mode to disable backend plugins and recover the Instance:

- Access Caido in your browser by navigating to [http://127.0.0.1:8080/?safe](http://127.0.0.1:8080/?safe).
- If you're using the CLI, start Caido with:

```
caido --safe
```

### "Encountered an error when communicating with the destination server."

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

### "Could not initialize configuration."

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

## Login Issues

### Can't Access Instance

You may encounter this error when trying to access an [Instance](/concepts/essentials/instances.md) that you do not own. This can occur if you've initially setup a Caido Instance using a different account.

<img alt="No access to Instance." src="/_images/instance_error.png" width=600px center/>

To resolve this issue, you can either:

1. Login to the initial account that was used to setup your Caido Instance.

2. Reset the Instance credentials:

- If you're using the CLI, start Caido using:

```
caido --reset-credentials
```

- If you're using the desktop application, check the `Reset Credentials` checkbox in your Instance's advanced settings.

  ::: warning
  These settings will allow you to login with any account you want. Once you've claimed your Instance, make sure to remove the `--reset-credentials` option or checkbox, otherwise your Instance credentials will be reset on every launch.
  :::

  <img src="/_images/reset_credentials_marked.png" alt="Reset Credentials" width=900px center/>

3. Delete your data folder.

- While not ideal, deleting your Caido data folder will allow you to start with a fresh installation. View the [Files](/reference/internal_files.md) page to locate your data folder.

### "Login URL generation failed: invalid authentication token."

You may encounter this error when trying to access an Instance that you **deleted** in the Caido [Dashboard](https://dashboard.caido.io).

<img alt="Login error." src="/_images/login_url_error.png" width=600px center/>

To resolve this, reset the Instance credentials:

- If you're using the CLI, start Caido using:

```
caido --reset-credentials
```

- If you're using the desktop application, check the `Reset Credentials` checkbox in your Instance's advanced settings.

::: warning
These settings will allow you to login with any account you want. Once you've claimed your Instance, make sure to remove the `--reset-credentials` option or checkbox, otherwise your Instance credentials will be reset on every launch.
:::

<img src="/_images/reset_credentials_marked.png" alt="Reset Credentials" width=900px center/>

### "Date mismatch: make sure your device's date and time settings are correct."

If you encounter this error during login, it means that your computer time is likely out of sync. Visit [time.is](https://time.is/) to confirm it.

<img alt="Date mismatch." src="/_images/date_mismatch_error.png" width=600px center/>

Caido allows 5 minutes of deviation between the "real" time and your computer time. To fix it, you will have to manually resync the time using NTP.

#### Fixing on Windows:

1. Right-click on the clock.
2. Select `Adjust date and time`.
3. Go to `Date & Time` in `Settings`.
4. Click `Sync now`.

#### Fixing on macOS:

1. Open a terminal window.
2. Use the `sntp` command with the `-S` option to slew the clock:
  
```
sudo sntp -S pool.ntp.org
```

3. Check the time synchronization status again using the same command.

#### Fixing on Linux:

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

## In-App Issues

### Can't Preview Responses

If you're unable to preview responses, you may encounter a rendering error, accompanied by a [log](/guides/data_location.md) error message entry similar to the following:

```
Rendering error: LaunchIo(Custom { kind: UnexpectedEof, error: "unexpected end of stream" }, BrowserStderr("[0101/110718.156035:ERROR:zygote_host_impl_linux.cc(90)] Running as root without --no-sandbox is not supported. See https://crbug.com/638180.\n"))
```

This error happens when Caido is running as root.

To fix it, you can either:

1. Not run Caido as the root user.
2. Remove the following flag when launching Caido:

- `--no-renderer-sandbox`

### Unable to Access 'Individual' Subscription Features

Caido caches the state of your account. Any changes to your account can take some time to update.

Refresh your account state by logging out/logging into your Caido Instance.

### The GraphQL Playground Doesn't Work

This might happen because you haven't added your Authorization header.

In GraphQL Playground, you can add an Authorization header as follows:

1. Open [GraphQL Playground](http://127.0.0.1:8080/graphql) in your browser.
2. Locate the "HTTP HEADERS" pane on the bottom left side of the interface.
3. Enter your Authorization header in the following format:

```
{
  "Authorization": "Bearer ACCESS_TOKEN_HERE"
}
```

To acquire your token:

1. Right-click inside the Caido application.
2. Select `Inspect`.
3. Select the `Application` tab.
4. Under `Storage` - `Local storage` within the left-hand side menu, select the [listening address/port](/guides/listening_address.md) of Caido.
5. Copy the value of the `accessToken` (_within the value of the `CAIDO_AUTHENTICATION` key_).

### A Section of the UI is Missing

Caido allows you to [resize parts of the UI](/concepts/essentials/layout.md). You might have accidentally minimized one of the sections.

### Match & Replace Rule Not Working

If your [Match & Replace](/guides/match_replace.md) rule is not working, ensure you're looking at the un-prettified version of the request/response body by pressing the `{} Prettify` button within the request/response panes to ensure your spacing is correct. While the prettified format provides easier readability, it is not an accurate representation of JSON body data.
