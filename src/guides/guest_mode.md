# Guest Mode

::: warning
In Guest mode, anybody can access your instance without authentication. This means that binding to 0.0.0.0 would, for example, allow anybody on the same network as you to use it and have full RCE on your machine.
:::

Caido can be used without an account in Guest Mode by selecting the `Continue as guest` option in the authentication prompt.

<img alt="Guest Mode selection." src="/_images/guest_mode_selection.png" center/>

Guest Mode is enabled by default in the desktop application via the `Allow guests` option within the `Advanced` dropdown selection in your Instance settings.

<img alt="Guest Mode setting." src="/_images/guest_mode_setting.png" center/>

Guest Mode is disabled by default in the Caido CLI, and must be explicitly enabled with the use of the `--allow-guests` option.

## Guest Mode Limitations

When using Caido in Guest Mode, there are certain limitations compared to an authenticated session:

- No projects are saved.
- All user settings are shared between all guests such as: Custom Developer Settings, [HTTPQL](/reference/httpql.md) queries, and [user-interface customization](/guides/ui.md).

::: info
Shared Guest Mode settings are not shared with your account. This includes plugin component configurations. For instance, you will have to manually enable/disable the frontend/backend components.

<img alt="Guest Mode plugin configuration." src="/_images/plugin_component_config.png" center/>
:::

- You are limited to a single plugin.

::: tip
[Register an account](https://dashboard.caido.io/signup) and use an authenticated session to gain the ability to save two projects and utilize up to three plugins.
:::
