# Common errors

You might face of any these issues while using Caido:

- ["You do not have access to this instance"](#you-do-not-have-access-to-this-instance)
- [I have paid for "Pro" but it still shows "Community" in the app](#i-have-paid-for-pro-but-it-still-shows-community-in-the-app)
- [I get a "Date mismatch" error during login](#i-get-a-date-mismatch-error-during-login)

## "You do not have access to this instance"

<img alt="No access to instance" src="/_images/no_access_instance.png"/>

You may encounter this error when trying to access an instance that you do not own (further info on instances [here](/internals/instances.md)). This can happen if you've initially setup a Caido instance using a different account.

### Method 1: Login with your original Caido account

Login to the initial account that was used to setup your Caido instance.

### Method 2: Reset the instance credentials

If you're using the CLI, start Caido using `caido --reset-credentials`

If you're using the desktop app, check the `Reset Credentials` checkbox in your instance's advanced settings.

These settings will allow you to login with any account you want.

Once you've claimed your instance, make sure to remove the `--reset-credentials` option or checkbox, otherwise your instance credentials will be reset on every launch.

<img src="/_images/reset_credentials.png" alt="Reset Credentials" width="1300" center/>

### Method 3: Delete your data folder

While not ideal, deleting your Caido data folder will allow you to start with a fresh installation. Check out the [Files](/internals/files.md) page to locate your data folder.

## "Login URL generation failed"

<img alt="Date mismatch" src="/_images/error_url_generation.png" width="400"/>

You may encounter this error when trying to access an instance that you **deleted** in the Caido [dashboard](https://dashboard.caido.io).

The easiest way to fix this issue is to [Reset the instance credentials](#method-2-reset-the-instance-credentials).

## I have paid for "Pro" but it still shows "Community" in the app

Caido caches the state of your account. Any changes to your account can take some time to update.

You can refresh your account state by logging out / logging in to your Caido instance.

## I get a "Date mismatch" error during login

<img alt="Date mismatch" src="/_images/error_date_mismatch.png"/>

You may see this error during login, it means that your computer time is likely out of sync. Visit [time.is](https://time.is/) to confirm it.

We allow 5 minutes slippage between the "real" time and your computer time. To fix it, you will have to manually resync the time using NTP.

### Windows ([details](https://www.majorgeeks.com/content/page/synchronize_clock_with_an_internet_time_server.html))

1. Right-click on the clock
1. `Adjust date/time`
1. Go to `Date & Time` in `Setting`
1. Click `Sync now`

### MacOS ([details](https://superuser.com/questions/155785/mac-os-x-date-time-synchronization#comment2136688_155788))

1. Open a terminal window
1. Use the `sntp` command with the `-S` option to slew the clock (`sudo sntp -S pool.ntp.org`)
1. Check the time synchronization status again using the same command

### Linux ([details](https://unix.stackexchange.com/questions/137266/how-to-keep-debian-internal-clock-synchronized-with-ntp-servers))

1. Open a terminal or SSH into your server
1. Install the NTP package: `sudo apt-get install ntp`
1. Once the installation is complete, the NTP service should start automatically
1. Check its status by using this command `sudo systemctl status ntp`
