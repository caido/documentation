# Common errors

You might face of any these issues while using Caido:

- ["You do not have access to this instance"](#you-do-not-have-access-to-this-instance)
- [I have paid for "Pro" but it still shows "Community" in the app](#i-have-paid-for-pro-but-it-still-shows-community-in-the-app)

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

## I have paid for "Pro" but it still shows "Community" in the app

Caido caches the state of your account. Any changes to your account can take some time to update.

You can refresh your account state by logging out / logging in to your Caido instance.
