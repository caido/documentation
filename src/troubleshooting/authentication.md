---
description: "Troubleshooting authentication issues in Caido including instance access problems and login URL generation failures."
---

# Login Issues

## "You do not have access to this instance. Go to dashboard." - "Login URL generation failed: invalid authentication token." - "The instance is no longer valid."

These errors may occur when you are trying to access an instance of a different account or the instance has been deleted from the [Dashboard](https://dashboard.caido.io).

<img alt="No access to instance." src="/_images/instance_error.png" width=600px center/>

---

<img alt="Login error." src="/_images/login_url_error.png" width=600px center/>

### Resolutions

If you encounter one of these error messages after attempting to login, either:

#### Use the Other Account

To gain access to the instance, login to the account that created the instance.

#### Reset the Instance Credentials

To reset the instance credentials with the Caido CLI, launch Caido with the `--reset-credentials` argument.

```bash
caido --reset-credentials
```

To reset the instance credentials within the Caido desktop application, in the launch window, **click** on the <code><Icon icon="fas fa-ellipsis-vertical" /></code> button attached to an instance and select `Edit`.

<img alt="The Edit instance option." src="/_images/launch_window_edit.png" center/>

Then, **click** on <code><Icon icon="fas fa-angle-right" /> Advanced</code> to expand the drop-down settings menu options and **click** on the `Reset credentials` checkbox.

<img alt="The Advanced instance options." src="/_images/launch_window_reset_credentials.png" center/>

**Click** on the `Save` button to update and save the configuration.

::: warning NOTE
Once you have authenticated to the instance, ensure to remove the `--reset-credentials` option or checkbox, otherwise your instance credentials will be reset on every launch.
:::

#### Delete the Data Storage Directory

Although it is not recommended, deleting the [data storage directory](/reference/data_storage.md) reset the installation.

## "Date mismatch: make sure your device's date and time settings are correct."

This error may occur due to your computer time being out of synchronization with the Coordinated Universal Time (UTC). For authentication, Caido only allows up to 5 minutes of deviation.

<img alt="Date mismatch." src="/_images/date_mismatch_error.png" width=600px center/>

### Resolutions

If you encounter this error after attempting to login, manually adjust the time utilized by your operating system.

#### Windows

To synchronize the time on Windows, **right-click** on the clock, select <code><Icon icon="fas fa-gear" /> Adjust date and time</code>, and **click** on the `Sync now` button.

#### macOS

To synchronize the time on macOS, use the `sntp` utility with the `-S` argument.
  
```bash
sudo sntp -S pool.ntp.org
```

::: tip
Check the time synchronization status with the same command.
:::

#### Linux

To synchronize the time on Linux, install the `ntp` package. Once the installation is complete, the service will start automatically.

```bash
sudo apt-get install ntp
```

::: tip

Check the time synchronization status with `sudo systemctl status ntp`.
