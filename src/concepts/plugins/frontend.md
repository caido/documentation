# Plugin Frontend

The frontend client component of Caido is the application running on your device.

Frontend development allows you to:

- Enhance the user-interface/experience.
- Add new pages, components and elements.
- Modify the appearance, behavior and functionality of the user-interface.
- Provide additional features and customization options.
- Handle user interactions, render data and communicate with the backend server via Caido's API.

## Frontend Interfaces

_For advanced documentation on this topic - click [here](./frontend_sdk.md)._

`ui` - Used to create visual elements. Content options for each element are also provided. These elements provide a way to sectionalize the user-interface of your plugin.

`scopes` - Used to set, create, update and delete **target scoping rules**, ensuring your plugin is directed at desired hosts.

`commands` - Used to register **actions** to expose functionality, bind actions to the user-interface and implement business logic.

`menu` - Used to register right-click **context menu** actions/options, allowing quick access to your plugin functionality.

`navigation` - Used to create pages in the application, giving your plugin its own **tab**.

`window` - Used to interact with **text** within the application environment, allowing highlight to action flows.

`storage` - Used to **persist data** across different sessions or instances.

::: info
Caido has heavily referenced [Visual Studio Code's Command Model](https://code.visualstudio.com/api/extension-guides/command).
:::

::: tip
Be aware that your plugin can be loaded in multiple user tabs.
:::

## Frontend Starterkit Repository Contents

::: info

- For documentation on the tooling files shared by all plugin starterkits offered by Caido - click [here](/concepts/plugins/plugin_tooling.md).
- The frontend starterkit can be found [here](https://github.com/caido/starterkit-plugin-frontend).
:::

### Frontend Starterkit Directories

The `public` directory stores the `styles.css` file used to stylize elements of your plugin.

The `src` directory stores the following files:

- `index.ts` file is acts as the entrypoint file (_the initial script that is loaded and executed, setting up the necessary resources and handling further logic and interactions_). Within this file - an `init` function export is required in order to initialize the plugin.

- `types.ts`: This file defines and exports type delcarations/definitions to be bundled with your code and be consumable by dependents.

### Frontend Manifest

The example `manifest.json` file in the frontend starterkit is as follows:

```json
{
  "id": "starterkit-plugin",
  "name": "StarterKit Plugin",
  "version": "0.1.0",
  "description": "This is a starterkit plugin",
  "author": {
    "name": "Caido Labs Inc.",
    "email": "dev@caido.io",
    "url": "https://github.com/caido/starterkit-plugin"
  },
  "plugins": [
    {
      "kind": "frontend",
      "id": "caido-extra-commands",
      "name": "Extra Commands",
      "entrypoint": "frontend/script.js",
      "style": "frontend/style.css"
    }
  ]
}

```

::: tip Additional information:

- Multiple plugins are allowed in the array of each `manifest.json` file.
- The first instance of the `name` property is the cosmetic Plugin package name and is displayed in the [Plugins](/reference/features/workspace/plugins.md) table. If the array includes multiple Plugins - additional instances of the `name` property are displayed next to the Plugins when expanding the parent element by toggling the `>` icon to `∨`.
- The `frontend` directory is generated upon the completion of the build process when using the Vite build tool.
:::
