# Plugin Basics

## What are Plugins?

**Plugins** provide a way to enhance the functionality of the Caido application by allowing users to develop custom features and components. The ability to create and install plugins allows for modular extension - ensuring that your testing needs are met even if a feature is not available in the default installation.

Conceptualize them as extensive [Workflows](/concepts/essentials/workflows.md). While they both provide task automation - plugin development offers a greater level of complexity.

::: warning
Plugins are community driven by Caido users. Since development and distribution are done in this 3rd-party sense - Caido makes no warranty on the safety, functionality or quality of any plugin installed.
:::

As Caido utilizes **client/server architecture** - inherently, this means plugin development consists of the [frontend](/concepts/plugins/frontend.md) and [backend](/concepts/plugins/backend.md) components.

## Plugin Packages

Plugins are installed through plugin packages which can contain one or more plugins. Everything from metadata properties, configuration details, dependency declarations, user-interface elements, function scripts, etc. are included in these packages.

::: info
For documentation on the tooling files shared by all plugin starterkits offered by Caido - click [here](/concepts/plugins/plugin_tooling.md).
:::

### Manifest

The `manifest.json` configuration file defines the plugin package structure and also contains metadata used by the Caido installer.

The properties, values and their necessity of inclusion vary dependent on their component association (_frontend or backend_).

Within the first data object:

- `id`: Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z]+(?:[_-][a-z0-9]+)*$`_). This property is **required**.
- `name`: If not supplied, the `id` will be used as the `name`. This property is not subject to the same rules of the `id` property. This property is **optional**.
- `version`: Versioning follows the `MAJOR.MINOR.PATCH` syntax. This property is **required**.
- `description`: A description of the plugin. This property is **optional**.
- `author`: Within this object are the `name`, `email` and `url` properties. These may be supplied for crediting purposes. This property is **optional**.

Within the `plugins` array:

- `kind`: Specifies the plugin type: `frontend` or `backend`. This property is **required**.
- `id`: Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z]+(?:[_-][a-z0-9]+)*$`). This property is **required**.
- `name`: If not supplied, the `id` will be used as the `name`. This property is not subject to the same rules of the `id` property. This property is **optional**.
- `entrypoint`: Specifies the location of the primary script to be executed when the Caido application/plugin is launched. This property is **required**. **Only one entrypoint file per plugin package is allowed.**
- `style`: Specifies the location of the CSS file to be used to stylize elements of your plugin. This property is **optional**. **Only one style file per plugin package is allowed.**
- `backend`: This object contains the `id` of the associated backend plugin. This property is **required** when linking a frontend plugin to a backend plugin.
- `runtime`: Specifies that JavaScript code will be executed. This property is **required** for backend plugins.

::: tip Additional information:

- Multiple plugins are allowed in the array of each `manifest.json` file.
- The first instance of the `name` property is the cosmetic plugin package name and is displayed in the [Plugins](/reference/features/workspace/plugins.md) table. If the array includes multiple plugins - additional instances of the `name` property are displayed next to the plugins when expanding the parent element by toggling the `>` icon to `∨`.
- The `frontend` directory is generated upon the completion of the build process when using the Vite build tool.
:::
