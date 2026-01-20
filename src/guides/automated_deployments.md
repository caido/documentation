# Automated Deployments

By default, instances registered to Caido's cloud service remain unclaimed until initial login. However, with registration keys, instances can be automatically deployed ahead of an anticipated engagement or on-demand for a retest request.

This allows for service accounts/bots to claim instances to your account workspace without authenticating via the dashboard.

## Creating a Registration Key

To obtain a registration key, navigate to [https://dashboard.caido.io/login](https://dashboard.caido.io/login), authenticate, open the `Registration Key` tab, and **click** on the `+ Create Key` button.

Once you have configured the key, **click** on the `Save` button.

<img alt="Creating a registration key." src="/_images/registration_keys.png" center/>

## Using the Registration Key

### Caido CLI

To use the registration key with the Caido CLI, launch Caido with the `--registration-key` command-line option.

```bash
caido --registration-key <key>
```

### Desktop Application

To use the registration key with the Caido desktop application, [create a environment variable](/guides/environment_variables.md) with the key name `CAIDO_REGISTRATION_KEY`.
