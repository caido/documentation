# Frontend Plugin SDK

The examples below demonstrate usage of the various services and functionalities.

## navigation

Used to create pages in the application and navigate to them.

### To add a page:

``` ts
sdk.navigation.addPage("/my-plugin-page", {
    body: card;
    topbar: bar;
});
```

This creates a page of which the contents are the [card](/concepts/plugins/frontend_sdk.md#to-create-a-card) you will learn how to create below.

The `topbar` property is optional and appears to the right of the Caido logo in the top-left corner.

### To navigate to a page:

``` ts
sdk.navigation.goTo("/my-plugin-page");
```

## sidebar

Used to add an entry to the left-hand navigation menu in the Caido user-interface to navigate between pages.

``` ts
sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
  icon: "fas fa-rocket",
});
```

The `icon` property is optional and adds a [FontAwesome](https://fontawesome.com/icons) icon at the leading side of the button.

::: info

- The `group` property is optional and dictates which category the entry will be under in the left-hand side menu.
- The `isExternal` property is optional and takes a boolean value of _true_ if the path points to an external URL.
:::

## ui

Used to create visual elements. Content options for each element are also provided. These elements provide a way to sectionalize the user-interface of your plugin.

### To create a button:

``` ts
const deleteButton = sdk.ui.button({
    variant: "primary",
    label: "Delete",
    trailingIcon: "fas fa-trash-can",
    size: "small"
});
```

All button properties are optional and include:

- `variant` - Specifies the button type and can have a value of `"primary"`, `"secondary"` or `"tertiary"`.
- `label` - Specifies the inner string within the button.
- `leadingIcon` - Adds an icon at the leading side of the button.
- `trailingIcon` - Addsan icon at the trailing side of the button.
- `size` - Specifies the button size and can have a value of `"small"`, `"medium"` or `"large"`.

### To create a card:

``` ts
const card = sdk.ui.card({
    header: headerContainer,
    body: bodyText,
    footer: footerText
});
```

A **card** is a layout component. Cards consist of `header`, `body` and `footer` properties.

All properties are optional. The value of each property is a defined HTML element.

::: tip
To use multiple HTML elements, combine them using `<div></div>` tags:

``` ts
import type { Caido } from "@caido/sdk-frontend";
import type { API } from "starterkit-plugin-backend";

export type CaidoSDK = Caido<API>;

const createPage = (sdk: CaidoSDK) => {
  const headerText = document.createElement("h1");
  headerText.textContent = "Hello world!";

  const subText = document.createElement("p");
  subText.textContent = "Lorem ipsum.";

  const bodyText = document.createElement("p");
  bodyText.textContent = "Paragraph.";

  const footerText = document.createElement("p");
  footerText.textContent = "Footer text.";

  const headerContainer = document.createElement("div");
  headerContainer.appendChild(headerText);
  headerContainer.appendChild(subText);

  const bar = document.createElement("p");
  bar.textContent = "Topbar.";

  const card = sdk.ui.card({
    header: headerContainer,
    body: bodyText,
    footer: footerText,
  });

  sdk.navigation.addPage("/my-plugin-page", {
    body: card,
    topbar: bar,
  });
};

export const init = (sdk: CaidoSDK) => {
  // Register commands
  // Commands are registered with a unique identifier and a handler function
  // The run function is called when the command is executed
  // These commands can be registered in various places like command palette, context menu, etc.

  // Register page
  createPage(sdk);

  // Register sidebar
  sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
    icon: "fas fa-rocket",
  });
};
```

The `init` function contains the `createPage(sdk)` function to register the page and the `.registerItem` method to make it available in the sidebar when the plugin initializes.
:::

<img alt="Add page SKD." src="/_images/add_page_sdk.png" center/>

### To create a well:

``` ts
const well = sdk.ui.well({
    header: title,
    body: paragraph,
    footer: advisory
});
```

A **well** is a layout component. Wells are similar to cards in that they consist of `header`, `body` and `footer` properties.

All properties are optional. The value of each property is a defined HTML element.

### To create a request editor:

``` ts
const reqEditor = sdk.ui.httpRequestEditor();
```

This creates a request pane.

### To create a response editor:

``` ts
const respEditor = sdk.ui.httpResponseEditor();
```

This creates a response pane.

## scopes

Used to set, create, update and delete [Scope Presets](/reference/features/overview/scope.md), ensuring your plugin is directed at desired hosts.

### To get all Scopes Presets:

``` ts
const allScopes = sdk.scopes.getScopes();
```

This returns a list of Scope Presets.

### To create a Scope Preset:

``` ts
newScope = sdk.scopes.createScope({
    name: "Example",
    allowlist: ["*example.com", "*github.com"],
    denylist: ["*caido.io"]
});
```

This creates a Scope Preset in which `example.com`, `github.com` and all their subdomains are in-scope while `caido.io` and all of its subdomains will be out-of-scope.

<img alt="Create scope SDK." src="/_images/create_scope_sdk.png" center/>

### To update a Scope Preset:

``` ts
  sdk.scopes.updateScope('1',{
    name: "Overwrite",
    allowlist: ["*anotherexample.com"],
    denylist: []
  });
```

This updates a Scope Preset specified by it's `id` number which correlates with the number of Scope Presets in the current project. This will overwrite the rule settings.

<img alt="Update scope SDK." src="/_images/update_scope_sdk.png" center/>

### To delete a Scope Preset:

``` ts
sdk.scopes.deleteScope('1');
```

This deletes a Scope Preset specified by it's `id` number.

## findings

Used to create [Findings](/reference/features/logging/findings.md).

``` ts
sdk.findings.createFinding('1',{
    title: "Finding",
    description: "Description of finding.",
    reporter: "Initialization."
});
```

This creates a [Finding](/reference/features/logging/findings.md) based on the `id` number associated with a request. This is the same id number that is assigned to the request within the [HTTP History](/reference/features/proxy/http_history.md) tab.

The `title` property assigns a value to the Title column in the Findings table.

The `description` property is optional and can be used to provide additional information.

The `reporter` property assigns a value to the Reporter column in the Findings table and can be used to specify what component created the entry.

::: info

- The `dedupeKey` property is optional and ensures a duplicate Finding is not created.
- Clearing the HTTP History will offset the id numbers associated with the request but the original id assigned will still be paired.
:::

<img alt="Create Finding SDK." src="/_images/create_finding_sdk.png" center/>

## commands

Used to register actions to expose functionality, bind actions to the user-interface and implement business logic.

### To register a command:

``` ts
sdk.commands.register('newCommand',{
    name: "Print to console.",
    run: () => console.log("Hello world!"),
    group: "Custom Commands",
})
```

This creates a command.

::: info
The optional `when` property defines a conditional that must be met for the command to be available.

_For example, to explicity set the command to be available at all times, `when: () => true` can be used._
:::

### To add a command to the commandPalette:

``` ts
sdk.commandPalette.register('hello');
```

This registers the previously created command to the command palette.

<img alt="Register command SDK." src="/_images/register_command_sdk.png" center/>

## menu

Used to register right-click context menu actions/options and create a plugin specific settings page, allowing quick access to your plugin functionality.

### To register an entry to the context menu:

``` ts
sdk.menu.registerItem({
    type: "Request",
    commandId: "hello",
    leadingIcon: "fas fa-hand"
});
```

This registers the previously created command to the context menu.

The `type` property specifies which context menu to add the action/option to:

- `Request` makes it available when right-clicking in a request pane.
- `RequestRow` makes it available when right-clicking on a request in a table.
- `Response` makes it available when right-clicking in a response pane.
- `Settings` makes it available when right-clicking in the settings menu.

The `commandId` value is the name of the registered command to execute.

The `leadingIcon` property is optional and adds an icon on the leading side of the entry.

::: info
When using the `Settings` value - an additional property of `path` exists which takes a string value of the path to be navigated to.
:::

<img alt="Register context menu SKD." src="/_images/register_menu_sdk.png" center/>

## window

Used to interact with text within the application environment, allowing text selection, replacement, read permission designations, focusing and editor related messaging.

### To interact with text within the Caido user-interface:

``` ts
let currentSelection = sdk.window.getActiveEditor()?.getSelectedText();
```

This takes the value of the current highlight-selected text and stores it in a variable.

``` ts
sdk.window.getActiveEditor()?.replaceSelectedText("Text that will replace the selection.");
```

This takes the value of the current highlight-selected text and replaces it with the arguement value.

### To display a Toast message:

``` ts
sdk.window.showToast("Message to display.", {
    variant: "info",
    duration: 3000
});
```

This displays a banner containing the specified message.

All message properties are optional and include:

- `variant` - Specifies the message type and can have a value of `"success"`, `"error"`, `"warning"` or `"info"`.
- `duration` - Specifies the amount of time a message will be displayed in milliseconds.

::: tip
For an example of how to trigger Toast messages on button clicks, expand the following:

<details>
<summary>Example</summary>

``` ts
import type { Caido } from "@caido/sdk-frontend";
import type { API } from "starterkit-plugin-backend";

export type CaidoSDK = Caido<API>;

const createPage = (sdk: CaidoSDK) => {
  const messageButton = sdk.ui.button({
    variant: "primary",
    label: "Add Note",
  });

  messageButton.addEventListener("click", async () => {
    sdk.window.showToast("Message to display.", {
      variant: "info",
      duration: 3000
    });
  });

  const headerText = document.createElement("h1");
  headerText.textContent = "Hello world!";

  const subText = document.createElement("p");
  subText.textContent = "Lorem ipsum.";

  const bodyText = document.createElement("p");
  bodyText.textContent = "Paragraph.";

  const footerText = document.createElement("p");
  footerText.textContent = "Footer text.";

  const headerContainer = document.createElement("div");
  headerContainer.appendChild(headerText);
  headerContainer.appendChild(subText);
  headerContainer.appendChild(messageButton);

  const bar = document.createElement("p");
  bar.textContent = "Topbar.";

  const card = sdk.ui.card({
    header: headerContainer,
    body: bodyText,
    footer: footerText,
  });

  sdk.navigation.addPage("/my-plugin-page", {
    body: card,
    topbar: bar,
  });
};

export const init = (sdk: CaidoSDK) => {
  // Register commands
  // Commands are registered with a unique identifier and a handler function
  // The run function is called when the command is executed
  // These commands can be registered in various places like command palette, context menu, etc.

  // Register page
  createPage(sdk);

  // Register sidebar
  sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
    icon: "fas fa-rocket",
  });
};

```

</details>
:::

<img alt="Toast messages SKD." src="/_images/toast_message_sdk.png" center/>

## storage

Used to persist data across different sessions or instances.

First create a data type:

``` ts
export type PluginStorage = {
  notes: { datetime: string; note: string; projectName?: string; comment?: string; }[];
}
```

### To store items:

``` ts
```

### To retrieve stored items:

``` ts
export const getNotes = (sdk: CaidoSDK) => {
  const storage = sdk.storage.get() as PluginStorage | undefined;
  return storage?.notes ?? [];
};
```
