# Plugin Basics

## What are Plugins?

**Plugins** provide a way to enhance the functionality of the Caido application by allowing users to develop custom features and components. The ability to create and install Plugins into Caido allows for modular extension - ensuring that your testing needs are met even if a feature is not available in the default installation.

::: warning
Plugins are community driven by Caido users. Since development and distribution are done in this 3rd-party sense - Caido makes no warranty on the safety, functionality or quality of any Plugin installed.
:::

## Plugin Types

Caido utilizes `client/server` architecture - inherently, this means Caido consists of a frontend and backend.

### Frontend Plugins

_For advanced documentation on Frontend Plugins - click [here](/concepts/plugins/frontend.md)._

The frontend client component of Caido is the application running on your device. Frontend Plugins are designed to enhance the user interface.

With frontend Plugins you can:

- Enhance the user interface/experience.
- Add new pages, components and elements.
- Modify the appearance, behavior and functionality of the user interface.
- Provide additional features and customization options.

These Plugins are responsible for handing user interactions, rendering data and communicating with the backend server via Caido's API.

### Backend Plugins

_For advanced documentation on Backend Plugins - click [here](/concepts/plugins/backend.md)._

The backend component of Caido is the server responsible for data processing, storage and business logic. _View the [Cloud](/concepts/internals/cloud.md) documentation for more information._

With backend Plugins you can:

- Extend the server-side functionality of the Caido application.
- Interact with the application's data, databases and infrastructure.
- Handle authentication, authorization and data calls.

### Full Stack Plugins

_For advanced documentation on Full Stack Plugins - click [here](/concepts/plugins/fullstack.md)._

Full Stack Plugins combine both the frontend and backend functionality into a single plugin, allowing developers to extend and customize both the client-side and server-side ascpects of the Caido application. These Plugins utilize the entire technology stack - from the user interface to the underlying server infrastructure.

With full stack Plugins you can:

- Facilitate the exchange of data and functionality between both the client and server.
- Manage the flow of data between the frontend and backend.

## SDKs

An **SDK** (Software Development Kit) is an interface that provides access to various services and functionalities. Caido provides different types of SDKs dependent on the type of the Plugin being developed.

A general description of the different SDK types are listed below:

### Frontend SDKs

_For advanced documentation on Caido's Frontend Plugin SDK - click [here](/concepts/plugins/frontend_sdk.md)._

These development kits are specifically designed to help developers build plugins that run client-side. The tools, libraries and APIs that facilitate interaction with the user interface, handle client-side logic and communicate with the backend or APIs are included in the kit. Often, frontend SDKs include features such as user interface components, data manipulation libraries and integration with external services.

### Backend SDKs

_For advanced documentation on Caido's Backend Plugin SDK - click [here](/concepts/plugins/backend_sdk.md)._

These SDKs assist developers in building server-side plugins. They also provide the tools, libraries and APIs to perform operations. Server-side operations include handling incoming requests from clients, managing databases, implementing business logic and integrating with external services. Scalability, security and performance optimization are all aspects given focus to server-side development.

### Full Stack SDKs

_For advanced documentation on Caido's Full Stack Plugin SDK - click [here](/concepts/plugins/fullstack_sdk.md)._

These kits combine the frontend and backend functionality into a single package. Utilizing a full stack SDK enables developers to build Plugins that span both the client-side and server-side. These SDKs often include additional features for managing data flow between the two sides, handling authentication/authorization and providing seamless integration.

## Conceptualizing Plugins

Think of Plugins in Caido as extensive [Workflows](/src/concepts/essentials/workflows.md). While they both provide task automation - Plugin development offers a greater level of complexity.

## Plugin Development

Plugins consist of packages - meaning a collection of directories and files.

### Contents of the StarterKit Repository

::: info
While Plugins can be developed with raw JavaScript (without the use of a package.json file, Vite (the bundler) or TypeScript) - Caido offers a [Plugin StarterKit](https://github.com/caido/starterkit-plugin) that assists in development.

When using the **Plugin StarterKits** offered by Caido - the aforementioned packages are preassembled, only requiring certain customization on behalf of you as a Plugin developer.

The `.gitignore`, `LICENSE` and `README.md` files are excluded as they are ultimately immaterial to the Plugin developement process from an end-user perspective.
:::

#### public

The `public` directory stores the `styles.css` file used to stylize elements of your Plugin.

#### src

The `src` directory stores the following files:

- `index.ts`: This file contains the main code of your Plugin. _View the [EntryPoint File](#the-entrypoint-file) section for more information._
- `types.ts`: This file defines and exports type delcarations/definitions to be bundled with your code and be consumable by dependents.

#### Package Management

Internally, Caido utilizes the [Pinned Node Package Manager(a.k.a. pnpm)](https://pnpm.io/) for Plugin package management. In general, a package manager handles the installation, updating and removal of packages. This includes ensuring the correct dependency versions are installed and resolving and dependency conflicts between packages.

The files related to package management within the StarterKit repository are:

- `package.json`: This is the main configuration file for the package as a whole - it contains the project metadata and specifies the required dependencies. _View the [pnpm package.json](https://pnpm.io/package_json) documentation for more information._
- `pnpm-lock.yaml`: This file ensures the same versions of dependencies are installed with every installation. _View the [pnpm-lock.yaml](https://pnpm.io/git#lockfiles) documentation for more information._

#### TypeScript

Externally, [TypeScript](https://docs.caido.io/concepts/essentials/workflows/js_in_caido.html#typing) is used by Caido for the StarterKit package.

The file related to TypeScript within the StarterKit repository is:

- `tsconfig.json`: This file provides instructions to the compiler when TypeScript is converted to JS. _View the [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) documentation for more information._

#### Build Tool

Once the package is developed, the package is processed by the [Vite](https://vitejs.dev/guide/) build tool. In general, a build tool automates the process of compiling, testing and packaging code into a deployable package - ensuring the Plugin is ready for use and sharing.

The file related to the Vite build tool within the StarterKit repository is:

- `vite.config.ts`: This file is a configuration file for customizing the build process. _View the [vite.config.js](https://v2.vitejs.dev/config/) documentation for more information.

#### Plugin Specific Configuration

The `manifest.json` file is specific to the Plugin itself and defines the metadata and configurations. This file also represents the structure of the Plugin.

::: tip
The example manifest file in the StarterKit is as follows:

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

Within the first data object:

- **REQUIRED**: `id` - Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z]+(?:[_-][a-z0-9]+)*$`).
- **OPTIONAL**: `name` - If not supplied, the `id` will be used as the `name`. This property is not subject to the same rules of the `id` property.
- **REQUIRED**: `version` - Versioning follows the `MAJOR.MINOR.PATCH` syntax.
- **OPTIONAL**: `description`
- **OPTIONAL**: `author`

Within the `plugins` array:

- **REQUIRED**: `kind` - This property specifies the Plugin type: `frontend`, `backend` or `fullstack`.
- **REQUIRED**: `id` - Must be **unique** and must only consist of **lowercase** letters, **numbers**, **hyphens** and **underscores** (_the order of which must satisfy the regex: `^[a-z]+(?:[_-][a-z0-9]+)*$`).
- **OPTIONAL**: `name` - If not supplied, the `id` will be used as the `name`. This property is not subject to the same rules of the `id` property.
- **REQUIRED**: `entrypoint` - This property specifies the location of the primary script to be executed when the Caido application/Plugin is launched.
- **OPTIONAL**: `style` - This property specifies the location of the CSS file to be used to stylize elements of your Plugin.

Additional information:

- Multiple plugins are allowed in the array of each `manifest.json` file.
- The first instance of the `name` property is the cosmetic Plugin package name and is displayed in the [Plugins](/reference/features/workspace/plugins.md) table. If the array includes multiple Plugins - additional instances of the `name` property are displayed next to the Plugins when expanding the parent element by toggling the `>` icon to `∨`.
- The `frontend` directory is generated upon the completion of the build process when using the Vite build tool.
:::

## Manifest Validation

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

## The EntryPoint File

An entrypoint file is the initial script that is loaded and executed. These files initialize the Plugin - setting up the necessary resources and handling further logic and interactions.
