# Plugin Basics

## What are Plugins?

**Plugins** provide a way to enhance the functionality of the Caido application by allowing users to develop custom features and components. The ability to create and install plugins allows for modular extension - ensuring that your testing needs are met even if a feature is not available in the default installation.

Conceptualize them as extensive [Workflows](/concepts/essentials/workflows.md). While they both provide task automation - plugin development offers a greater level of complexity.

::: warning
Plugins are community driven by Caido users. Since development and distribution are done in this 3rd-party sense - Caido makes no warranty on the safety, functionality or quality of any plugin installed.
:::

As Caido utilizes **client/server architecture** - inherently, this means plugin development consists of the [frontend](/concepts/plugins/frontend.md) and [backend](/concepts/plugins/backend.md) components.

## Plugin Packages

A plugin is comprised of an installed **package** (_a collection of directories and files_). Everything from metadata properties, configuration details, dependency declarations, user-interface elements, function scripts, etc. are included in these packages.

::: info
For documentation on the tooling files shared by all plugin starterkits offered by Caido - click [here](/concepts/plugins/plugin_tooling.md).
:::

### manifest.json

The `manifest.json` configuration file defines the plugin structure and also contains metadata used by the Caido installer. The properties, values and their necessity of inclusion vary dependent on their component association (_frontend or backend_).

### index.ts

The `index.ts` file is acts as the entrypoint file (_the initial script that is loaded and executed, setting up the necessary resources and handling further logic and interactions_). Within this file - an `init` function is required in order to initialize the plugin.
