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

### manifest.json

The example manifest file in the frontend starterkit is as follows:

::: tip Key/Value Breakdown

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

Additional information:

- Multiple plugins are allowed in the array of each `manifest.json` file.
- The first instance of the `name` property is the cosmetic Plugin package name and is displayed in the [Plugins](/reference/features/workspace/plugins.md) table. If the array includes multiple Plugins - additional instances of the `name` property are displayed next to the Plugins when expanding the parent element by toggling the `>` icon to `∨`.
- The `frontend` directory is generated upon the completion of the build process when using the Vite build tool.
:::

::: info

The specification for the `manifest.json` file is set in the [schema.json](https://github.com/caido/plugin-manifest/blob/main/src/schema.json) file.

Expand the sections below to view the `schema.json` file:

<details>
<summary>JSON Schema.</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Schema",
  "allOf": [
    {
      "$ref": "#/definitions/Manifest"
    }
  ],
  "definitions": {
    "Manifest": {
      "type": "object",
      "required": [
        "id",
        "plugins",
        "version"
      ],
      "properties": {
        "author": {
          "anyOf": [
            {
              "$ref": "#/definitions/ManifestAuthor"
            },
            {
              "type": "null"
            }
          ]
        },
        "description": {
          "type": [
            "string",
            "null"
          ]
        },
        "id": {
          "$ref": "#/definitions/ManifestID"
        },
        "name": {
          "type": [
            "string",
            "null"
          ]
        },
        "plugins": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ManifestPlugin"
          }
        },
        "version": {
          "type": "string"
        }
      }
    },
    "ManifestAuthor": {
      "type": "object",
      "properties": {
        "email": {
          "type": [
            "string",
            "null"
          ]
        },
        "name": {
          "type": [
            "string",
            "null"
          ]
        },
        "url": {
          "type": [
            "string",
            "null"
          ]
        }
      }
    },
    "ManifestBackendPluginRuntime": {
      "type": "string",
      "enum": [
        "javascript"
      ]
    },
    "ManifestFrontendPluginConnection": {
      "type": "object",
      "required": [
        "id"
      ],
      "properties": {
        "id": {
          "$ref": "#/definitions/ManifestID"
        }
      }
    },
    "ManifestID": {
      "type": "string"
    },
    "ManifestPlugin": {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "id",
            "kind"
          ],
          "properties": {
            "backend": {
              "anyOf": [
                {
                  "$ref": "#/definitions/ManifestFrontendPluginConnection"
                },
                {
                  "type": "null"
                }
              ]
            },
            "entrypoint": {
              "type": [
                "string",
                "null"
              ]
            },
            "id": {
              "$ref": "#/definitions/ManifestID"
            },
            "kind": {
              "type": "string",
              "enum": [
                "frontend"
              ]
            },
            "name": {
              "type": [
                "string",
                "null"
              ]
            },
            "style": {
              "type": [
                "string",
                "null"
              ]
            }
          }
        },
        {
          "type": "object",
          "required": [
            "entrypoint",
            "id",
            "kind",
            "runtime"
          ],
          "properties": {
            "entrypoint": {
              "type": "string"
            },
            "id": {
              "$ref": "#/definitions/ManifestID"
            },
            "kind": {
              "type": "string",
              "enum": [
                "backend"
              ]
            },
            "name": {
              "type": [
                "string",
                "null"
              ]
            },
            "runtime": {
              "$ref": "#/definitions/ManifestBackendPluginRuntime"
            }
          }
        }
      ]
    }
  }
}
```

</details>

<details>
<summary>TypeScript format.</summary>

```ts
export type Schema = Manifest
export type ManifestID = string
export type ManifestPlugin =
  | {
      backend?: ManifestFrontendPluginConnection | null
      entrypoint: string
      id: ManifestID
      kind: "frontend"
      name?: string | null
      style: string
      [k: string]: unknown
    }
  | {
      entrypoint: string
      id: ManifestID
      kind: "backend"
      name?: string | null
      runtime: ManifestBackendPluginRuntime
      [k: string]: unknown
    }
export type ManifestBackendPluginRuntime = "javascript"

export interface Manifest {
  author?: ManifestAuthor | null
  description?: string | null
  id: ManifestID
  name?: string | null
  plugins: ManifestPlugin[]
  version: string
  [k: string]: unknown
}
export interface ManifestAuthor {
  email?: string | null
  name?: string | null
  url?: string | null
  [k: string]: unknown
}
export interface ManifestFrontendPluginConnection {
  id: ManifestID
  [k: string]: unknown
}
```

</details>
:::

### index.ts

The example entrypoint file in the frontend starterkit is as follows:

::: tip Script Breakdown

```ts
import type { Caido } from "@caido/sdk-frontend";

import type { PluginStorage } from "./types";

const Page = "/my-plugin" as const;
const Commands = {
  increment: "my-plugin.increment",
  decrement: "my-plugin.decrement",
} as const;

const getCount = (caido: Caido) => {
  const storage = caido.storage.get() as PluginStorage | undefined;

  if (storage) {
    return storage.count;
  }

  return 0;
}

const increment = (caido: Caido) => {
  const count = getCount(caido);
  caido.storage.set({ count: count + 1 });
}

const decrement = (caido: Caido) => {
  const count = getCount(caido);
  caido.storage.set({ count: count - 1 });
}

const addPage = (caido: Caido) => {

  const count = getCount(caido);

  const body = document.createElement("div");
  body.className = "my-plugin";
  body.innerHTML = `
    <div class="my-plugin__count">
      <span>Count:</span>
      <span class="my-plugin__value">${count}</span>
    </div>
    <div>
      <button class="c-button" data-command="${Commands.increment}">Increment</button>
      <button class="c-button" data-command="${Commands.decrement}">Decrement</button>
    </div>
  `;

  const countElement = body.querySelector(".my-plugin__value") as HTMLElement;
  const incrementButton = body.querySelector(`[data-command="${Commands.increment}"]`) as HTMLElement;
  const decrementButton = body.querySelector(`[data-command="${Commands.decrement}"]`) as HTMLElement;

  caido.storage.onChange((newStorage) => {
    const storage = newStorage as PluginStorage | undefined;

    if (storage) {
      countElement.innerHTML = `${storage.count}`;
      return;
    }
  });

  incrementButton.addEventListener("click", () => {
    increment(caido);
  });

  decrementButton.addEventListener("click", () => {
    decrement(caido);
  });

  caido.navigation.addPage(Page, {
    body,
  });
}


export const init = (caido: Caido) => {

  // Register commands
  // Commands are registered with a unique identifier and a handler function
  // The run function is called when the command is executed
  // These commands can be registered in various places like command palette, context menu, etc.
  caido.commands.register(Commands.increment, {
    name: "Increment",
    run: () => increment(caido),
  });

  caido.commands.register(Commands.decrement, {
    name: "Decrement",
    run: () => decrement(caido),
  });

  // Register command palette items
  caido.commandPalette.register(Commands.increment);
  caido.commandPalette.register(Commands.decrement);

  // Register page
  addPage(caido);

  // Register sidebar
  caido.sidebar.registerItem("My plugin", Page, {
    icon: "fas fa-rocket",
  });
}
```

- In the external type definition file is `export { API as Caido } from “./types”;`. Now `Caido` is used as the interface to the API and is imported by `import type { Caido } from "@caido/sdk-frontend";`
- Access to plugin storage is achieved by `import type { PluginStorage } from "./types";`.
- The `Page` variable stores the path for the plugin page. When a user selects the plugin or navigates to `/my-plugin` - the page will be displayed.
- The `Commands` variable stores the unique identifiers for the plugin commands.
- The `getCount` function retrieves the current `count` value from the plugin's storage.
- The `increment` and `decrement` functions increase/decrease the `count` value by 1 respectively.
- The page is constructed by `caido.navigation.addPage`. The `addPage` method takes the `Page` and `body` variables as parameters.
- The `init` function takes the `Caido` interface object as a parameter in order to access the API.
- Within `init` the call `addPage(caido)` creates the page and makes it interactive by listening for events and updates the interface when needed.
- Within `init` the call `caido.sidebar.registerItem("My plugin", Page, {icon: "fas fa-rocket",});` creates a plugin entry in the left-hand side menu of the application. _For more icons and icon styles - visit [https://fontawesome.com/icons](https://fontawesome.com/icons)._

:::
