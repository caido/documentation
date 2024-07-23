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

`menu` - Used to register right-click **context menu** actions/options and create a plugin specific **settings page**, allowing quick access to your plugin functionality.

`navigation` - Used to create pages in the application, giving your plugin its own **tab**.

`window` - Used to interact with **text** within the application environment, allowing text selection, replacement, read permission designations, focusing and editor related messaging.

`storage` - Used to **persist data** across different sessions or instances.

::: info
Caido has heavily referenced [Visual Studio Code's Command Model](https://code.visualstudio.com/api/extension-guides/command).
:::

::: tip
Be aware that your plugin can be loaded in multiple user tabs.
:::

## Frontend Starterkit Repository Contents

Caido convieniently offers a plugin starterkit that can serve as a skeleton model to offer insight into SDK usage and be further built upon.

::: info

- For documentation on the tooling files shared by all plugin starterkits offered by Caido - click [here](/concepts/plugins/plugin_tooling.md).
- The frontend starterkit can be found [here](https://github.com/caido/starterkit-plugin-frontend).
:::

### Frontend Starterkit Directories

The `public` directory stores the `styles.css` file used to stylize elements of your plugin.

The `src` directory stores the following files:

- `index.ts` file is acts as the entrypoint file (_the initial script that is loaded and executed, setting up the necessary resources and handling further logic and interactions with the plugin_). Within this file - an `init` function export is required in order to initialize the plugin. The init function receives a `caido` object of type `Caido` which is the SDK (_importable from `@caido/sdk-frontend`_) used to interact with the frontend application. Click [here](https://github.com/caido/sdk-frontend/blob/main/src/types/index.d.ts) for the full type definition.

- `types.ts`: This file allows you the ability to declare new types usable in your plugin.
