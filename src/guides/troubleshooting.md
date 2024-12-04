# Troubleshooting

Here you'll find solutions to common issues you might face while using Caido.

## Startup Issues

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

- Login to the initial account that was used to setup your Caido Instance.
- Reset the Instance credentials:
  - If using the CLI, start Caido using `caido --reset-credentials`.
  - If using the desktop application, check the `Reset Credentials` checkbox in your Instance's advanced settings.

  ::: warning
  These settings will allow you to login with any account you want. Once you've claimed your Instance, make sure to remove the `--reset-credentials` option or checkbox, otherwise your Instance credentials will be reset on every launch.
  :::

  <img src="/_images/reset_credentials_marked.png" alt="Reset Credentials" center/>

- Delete your data folder.
  - While not ideal, deleting your Caido data folder will allow you to start with a fresh installation. View the [Files](/reference/internal_files.md) page to locate your data folder.

### "Login URL generation failed: invalid authentication token".

You may encounter this error when trying to access an Instance that you **deleted** in the Caido [Dashboard](https://dashboard.caido.io).

<img alt="Login error." src="/_images/login_url_error.png" width=600px center/>

To resolve this, reset the Instance credentials:

- If using the CLI, start Caido using `caido --reset-credentials`.

- If using the desktop application, check the `Reset Credentials` checkbox in your Instance's advanced settings.

::: warning
These settings will allow you to login with any account you want. Once you've claimed your Instance, make sure to remove the `--reset-credentials` option or checkbox, otherwise your Instance credentials will be reset on every launch.
:::

<img src="/_images/reset_credentials_marked.png" alt="Reset Credentials" center/>

### "Date mismatch: make sure your device's date and time settings are correct".

If you encounter this error during login, it means that your computer time is likely out of sync. Visit [time.is](https://time.is/) to confirm it.

<img alt="Date mismatch." src="/_images/date_mismatch_error.png" width=600px center/>

Caido allows 5 minutes of deviation between the "real" time and your computer time. To fix it, you will have to manually resync the time using NTP.

- Fixing on Windows:
  1. Right-click on the clock.
  1. Select `Adjust date and time`.
  1. Go to `Date & Time` in `Settings`.
  1. Click `Sync now`.

- Fixing on macOS
  1. Open a terminal window.
  1. Use the `sntp` command with the `-S` option to slew the clock (`sudo sntp -S pool.ntp.org`).
  1. Check the time synchronization status again using the same command.

- Fixing on Linux
  1. Open a terminal or SSH into your server.
  1. Install the NTP package: `sudo apt-get install ntp`.
  1. Once the installation is complete, the NTP service should start automatically.
  1. Check its status by using this command `sudo systemctl status ntp`.

## In-App Issues

### Can't Preview Responses

If you're unable to preview responses, you may encounter a rendering error, accompanied by a [log](/guides/data_location.md) error message entry similar to the following:

```
Rendering error: LaunchIo(Custom { kind: UnexpectedEof, error: "unexpected end of stream" }, BrowserStderr("[0101/110718.156035:ERROR:zygote_host_impl_linux.cc(90)] Running as root without --no-sandbox is not supported. See https://crbug.com/638180.\n"))
```

This error happens when Caido is running as root.

To fix it, you can either:

- Not run Caido as the root user.
- Remove the following flag when launching Caido:
  - `--no-renderer-sandbox`

### I have paid for "Pro" but it still shows "Community" in the application.

Caido caches the state of your account. Any changes to your account can take some time to update.

Refresh your account state by logging out/logging into your Caido Instance.

### The GraphQL Playground Doesn't Work

This might happen because you haven't added your Authorization header.

In GraphQL Playground, you can add an Authorization header as follows:

- Open [GraphQL Playground](http://127.0.0.1:8080/graphql) in your browser.
- Locate the "HTTP HEADERS" pane on the bottom left side of the interface.
- Enter your Authorization header in the following format:

```
{
  "Authorization": "Bearer ACCESS_TOKEN_HERE"
}
```

To acquire your token:

- Right-click inside the Caido application.
- Select `Inspect`.
- Select the `Application` tab.
- Under `Storage` - `Local storage` within the left-hand side menu, select the [listening address/port](/guides/listening_address.md) of Caido.
- Copy the value of the `accessToken` (_within the value of the `CAIDO_AUTHENTICATION` key_).

### A Section of the UI is Missing

Caido allows you to [resize parts of the UI](/concepts/essentials/layout.md). You might have accidentally minimized one of the sections.
