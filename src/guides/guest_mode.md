---
description: "A step-by-step guide to using Caido in guest mode without authentication, including security considerations and feature limitations."
---

# Guest Mode

Caido can be used without an account by selecting the `Continue as guest` option in the authentication prompt.

::: danger
In guest mode, anyone can access your instance without authentication. For example, binding to 0.0.0.0 would grant unauthorized access to anyone on the same network, exposing your device to remote code execution.
:::

<img alt="The guest mode option." src="/_images/guest_mode_selection.png" center/>

## Caido CLI

By default, guest mode is **disabled** for the Caido CLI. To enable guest mode with the Caido CLI, launch Caido with the `--allow-guests` argument.

```
caido --allow-guests
```

## Desktop Application

By default, guest mode is **enabled** for local instances. To disable guest mode within the Caido desktop application, in the launch window, **click** on the <code><Icon icon="fas fa-ellipsis-vertical" /></code> button attached to an instance and select `Edit`.

<img alt="The Edit instance option." src="/_images/launch_window_edit.png" center/>

Then, **click** on <code><Icon icon="fas fa-angle-right" /> Advanced</code> to expand the drop-down settings menu options and **click** on the `Allow guests` checkbox to remove its fill.

<img alt="The Advanced instance options." src="/_images/launch_window_advanced_options.png" center/>

**Click** on the `Save` button to update and save the configuration.

## Guest Mode Limitations

In contrast to an authenticated session, in guest mode:

- Projects are not saved.
- All user settings are shared across all guests.
- Only a single plugin can be installed at a time.

::: info
Shared guest mode settings are not shared with your account. This includes plugin component configurations. For instance, you will have to manually enable/disable the frontend/backend components.

<img alt="Guest Mode plugin configuration." src="/_images/plugin_component_config.png" center/>
:::

::: tip
[Register an account](https://dashboard.caido.io/signup) and use an authenticated session to gain the ability to save two projects and install up to three plugins.
:::
