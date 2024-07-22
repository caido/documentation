# Tooling for Plugin Development

While plugins can be developed with raw JavaScript - Caido offers **plugin starterkits**, preassembled packages that also provide tooling to assist in development.

The frontend starterkit can be found [here](https://github.com/caido/starterkit-plugin-frontend).

## Package Management

Caido utilizes the [Performant Node Package Manager(a.k.a. pnpm)](https://pnpm.io/) for plugin package management. You have a couple choices of package management (_npm, yarn, pnpm, etc._) - we chose pnpm. Plugins do not have dependencies, they are self contained. The Javascript dependencies are bundled into them.

The files related to package management within the starterkit repository are:

- `package.json`: This is the main configuration file for the package as a whole - it contains the project metadata and specifies the required dependencies to be used at runtime/build time. _View the [pnpm package.json](https://pnpm.io/package_json) documentation for more information._
- `pnpm-lock.yaml`: This file ensures the same versions of dependencies are installed with every installation. _View the [pnpm-lock.yaml](https://pnpm.io/git#lockfiles) documentation for more information._

## TypeScript

Externally, [TypeScript](https://docs.caido.io/concepts/essentials/workflows/js_in_caido.html#typing) is used by Caido for the starterkit package.

The file related to TypeScript within the starterkit repository is:

- `tsconfig.json`: This file provides instructions to the compiler when TypeScript is converted to JS. _View the [https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) documentation for more information._

## Build Tool

Once the package is developed, the code is processed by the [Vite](https://vitejs.dev/guide/) build tool. In general, a build tool automates the process of compiling, testing and packaging code into a deployable package - ensuring the plugin is ready for use and sharing.

The file related to the Vite build tool within the starterkit repository is:

- `vite.config.ts`: This file is a configuration file for customizing the build process. _View the [vite.config.js](https://v2.vitejs.dev/config/) documentation for more information.
