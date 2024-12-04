# Troubleshooting

You might face of any these issues while using Caido.

## Error Message: "You do not have access to this instance".

**You may encounter this error when trying to access an Instance that you do not own (_further information on Instances [here](/concepts/essentials/instances.md)_). This can occur if you've initially setup a Caido Instance using a different account.**

<img alt="No access to Instance." src="/_images/instance_error.png" width=600px center/>

### Resolution Method 1:

<details>

Login to the initial account that was used to setup your Caido Instance.
</details>

### Resolution Method 2:

<details>

Reset the Instance credentials:

- If using the CLI, start Caido using `caido --reset-credentials`.

- If using the desktop application, check the `Reset Credentials` checkbox in your Instance's advanced settings.

::: warning
These settings will allow you to login with any account you want. Once you've claimed your Instance, make sure to remove the `--reset-credentials` option or checkbox, otherwise your Instance credentials will be reset on every launch.
:::

<img src="/_images/reset_credentials_marked.png" alt="Reset Credentials" center/>
</details>

### Resolution Method 3:

<details>

Delete your data folder.

While not ideal, deleting your Caido data folder will allow you to start with a fresh installation. View the [Files](/concepts/internals/files.md) page to locate your data folder.
</details>

## Error Message: "Login URL generation failed: invalid authentication token".

**You may encounter this error when trying to access an Instance that you **deleted** in the Caido [Dashboard](https://dashboard.caido.io).**

<img alt="Login error." src="/_images/login_url_error.png" width=600px center/>

### Resolution:

<details>

Reset the Instance credentials:

- If using the CLI, start Caido using `caido --reset-credentials`.

- If using the desktop application, check the `Reset Credentials` checkbox in your Instance's advanced settings.

::: warning
These settings will allow you to login with any account you want. Once you've claimed your Instance, make sure to remove the `--reset-credentials` option or checkbox, otherwise your Instance credentials will be reset on every launch.
:::

<img src="/_images/reset_credentials_marked.png" alt="Reset Credentials" center/>
</details>

## Error Message: "Date mismatch: make sure your device's date and time settings are correct".

**If you encounter this error during login, it means that your computer time is likely out of sync. Visit [time.is](https://time.is/) to confirm it.**

<img alt="Date mismatch." src="/_images/date_mismatch_error.png" width=600px center/>

::: info
Caido allows 5 minutes of deviation between the "real" time and your computer time. To fix it, you will have to manually resync the time using NTP.
:::

### Resolution for Windows

<details>

::: info
Time synchronization instructions for Windows can be found [here](https://www.majorgeeks.com/content/page/synchronize_clock_with_an_internet_time_server.html).
:::

1. Right-click on the clock.
1. Select `Adjust date and time`.
1. Go to `Date & Time` in `Settings`.
1. Click `Sync now`.

</details>

### Resolution for MacOS

<details>

::: info
Time synchronization instructions for MacOS can be found [here](https://superuser.com/questions/155785/mac-os-x-date-time-synchronization#comment2136688_155788).
:::

1. Open a terminal window.
1. Use the `sntp` command with the `-S` option to slew the clock (`sudo sntp -S pool.ntp.org`).
1. Check the time synchronization status again using the same command.

</details>

### Resolution for Linux

<details>

::: info
Time synchronization instructions for Linux can be found [here](https://unix.stackexchange.com/questions/137266/how-to-keep-debian-internal-clock-synchronized-with-ntp-servers).
:::

1. Open a terminal or SSH into your server.
1. Install the NTP package: `sudo apt-get install ntp`.
1. Once the installation is complete, the NTP service should start automatically.
1. Check its status by using this command `sudo systemctl status ntp`.

</details>

## Error: Unexpected error when rendering on the frontend.

**If you encounter a rendering error, accompanied by a [log](/reference/configuration/data_location.md) error message entry similar to the following:**

```
Rendering error: LaunchIo(Custom { kind: UnexpectedEof, error: "unexpected end of stream" }, BrowserStderr("[0101/110718.156035:ERROR:zygote_host_impl_linux.cc(90)] Running as root without --no-sandbox is not supported. See https://crbug.com/638180.\n"))
```

### Resolution Method 1:

<details>

Do not run Caido as the root user.
</details>

### Resolution Method 2:

<details>

Remove the following flag when launching Caido:

- `--no-renderer-sandbox`

</details>

## Error: Could not initialize configuration.

**If you encounter this error and receive a 404 status code on `https://api.caido.io/oauth2/register` along with a similar message to the following:**

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

### Resolution:

<details>

Check your internet connection.

::: info
Caido requires an internet connection at the following moments:

- On first launch.
- During login.
- After 7 days offline (_the time period after which your authentication token needs to be refreshed_).

View the [Authentication](/concepts/internals/authentication.md) documentation for more information.
:::

</details>

## I have paid for "Pro" but it still shows "Community" in the application.

**Caido caches the state of your account. Any changes to your account can take some time to update.**

### Resolution:

<details>

Refresh your account state by logging out/logging into your Caido Instance.
</details>

## I cannot call my data in the GraphQL Playground.

**You must add your Authorization header.**

### Resolution:

<details>

In GraphQL Playground, you can add an Authorization header as follows:

- Open [GraphQL Playground](http://127.0.0.1:8080/graphql) in your browser.
- Locate the "HTTP HEADERS" pane on the bottom left side of the interface.
- Enter your Authorization header in the following format:

```
{
  "Authorization": "Bearer ACCESS_TOKEN_HERE"
}
```

::: tip
To acquire your token:

- Right-click inside the Caido application.
- Select `Inspect`.
- Select the `Application` tab.
- Under `Storage` - `Local storage` within the left-hand side menu, select the [listening address/port](/reference/configuration/listening_address.md) of Caido.
- Copy the value of the `accessToken` (_within the value of the `CAIDO_AUTHENTICATION` key_).
:::

</details>

## A window pane is not available anymore.

**The pane may have accidentally been minimized in size.**

### Resolution:

<details>

[Resize the pane](/concepts/essentials/layout.md).
</details>
