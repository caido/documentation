---
description: "Troubleshooting authentication issues in Caido including instance access problems and login URL generation failures."
---

# Authentication

### Can't Access Instance

You may encounter this error when trying to access an [instance](/concepts/essentials/instances.md) that you do not own. This can occur if you've initially setup a Caido instance using a different account.

<img alt="No access to instance." src="/_images/instance_error.png" width=600px center/>

To resolve this issue, you can either:

1. Login to the initial account that was used to setup your Caido instance.

2. Reset the instance credentials:

- If you're using the CLI, start Caido using:

```
caido --reset-credentials
```

- If you're using the desktop application, check the `Reset Credentials` checkbox in your instance's advanced settings.

  ::: warning
  These settings will allow you to login with any account you want. Once you've claimed your instance, make sure to remove the `--reset-credentials` option or checkbox, otherwise your instance credentials will be reset on every launch.
  :::

  <img src="/_images/reset_credentials_marked.png" alt="Reset Credentials" width=900px center/>

3. Delete your data folder.

- While not ideal, deleting your Caido data folder will allow you to start with a fresh installation. View the [Files](/reference/internal_files.md) page to locate your data folder.

### "Login URL generation failed: invalid authentication token."

You may encounter this error when trying to access an instance that you **deleted** in the Caido [Dashboard](https://dashboard.caido.io).

<img alt="Login error." src="/_images/login_url_error.png" width=600px center/>

To resolve this, reset the instance credentials:

- If you're using the CLI, start Caido using:

```
caido --reset-credentials
```

- If you're using the desktop application, check the `Reset Credentials` checkbox in your instance's advanced settings.

::: warning
These settings will allow you to login with any account you want. Once you've claimed your instance, make sure to remove the `--reset-credentials` option or checkbox, otherwise your instance credentials will be reset on every launch.
:::

<img src="/_images/reset_credentials_marked.png" alt="Reset Credentials" width=900px center/>
