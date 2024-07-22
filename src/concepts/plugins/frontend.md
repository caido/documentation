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

- `types.ts`: This file defines and exports type delcarations/definitions to be bundled with your code and be consumable by dependents.

## Frontend Plugin Development

The plugin used as an example in the following sections is a note taking plugin named **Notebook**. The repository for Notebook can be found [here](https://github.com/ninjeeter/notebook).

### manifest.json

For a full breakdown on the properties of the manifest file - view the [Plugin Basics](/concepts/plugins/plugin_basics.md#manifest) page.

```json
{
  "id": "notebook",
  "name": "Notebook",
  "version": "0.1.0",
  "description": "Note taking plugin.",
  "author": {
    "name": "Ninjeeter",
    "email": "ninjeeter@proton.me",
    "url": "https://github.com/ninjeeter/notebook"
  },
  "plugins": [
    {
      "kind": "frontend",
      "id": "notebook",
      "name": "Notebook",
      "entrypoint": "frontend/script.js",
      "style": "frontend/style.css"
    }
  ]
}

```

### types.ts

The Notebook `types.ts` file exports a type alias of `PluginStorage` to define the structure of the `notes` array.

::: tip types.ts

```ts
export type PluginStorage = {
  notes: { datetime: string; note: string; projectName?: string }[];
}
```

 Each note element within the array is an object that has the following properties:

- `datetime` - The date and time the note was stored of type `string`.
- `note` - The note itself of type `string`.
- `projectName` - The Project that the note was taken in of type `string`. This property is **optional**.
:::

### index.ts

The file first imports the `Caido` type which is the interface to the SDK and the `PluginStorage` type defined in the `types.ts` file.

::: tip index.ts

```ts
import type { Caido } from "@caido/sdk-frontend";

import type { PluginStorage } from "./types";
```

:::

Next, the `Page` variable stores the path for the plugin page.

::: tip index.ts

```ts
const Page = "/notebook";
```

Each Caido tab represents a separate page. You can conceptualize tabs and pages in the same sense as a web browser. The browser application can have multiple tabs each displaying different pages.
:::

The `Commands` object has two command properties.

::: tip index.ts

```ts
const Commands = {
  clear: "notebook.clear",
  addNoteMenu: "notebook.addNoteMenu"
};
```

These commands are assigned an identifier and the namespace `notebook` plus a unique identifier.
:::

The `getNotes` function is responsible for retrieving the notes array from storage.

::: tip index.ts

```ts
const getNotes = (caido: Caido): PluginStorage["notes"] => {
  const storage = caido.storage.get() as PluginStorage | undefined;
  if (storage && storage.notes) {
    console.log("Retrieved notes from storage: ", storage.notes);
    return [...storage.notes];
  }
  return [];
}
```

- The function takes the `caido` parameter of type `Caido` which represents the Caido SDK object and is used as the interface.
- The return value of the function will be of type `PluginStorage["notes"]`.
- It starts by calling the `caido.storage.get()` method to retrieve the current stored `notes` array.
- If `storage` exists AND if it has a `notes` property it logs the retrieved notes to the console and returns a copy of the array using the spread operator `[...storage.notes]`. This copy ensures the array is persistent across multiple closing and openings of the Caido application. If there are no notes stored, the function returns an empty array.
:::

The `addNoteStorage` function is responsible for adding to the storage.

::: tip index.ts

```ts
const addNoteStorage = (caido: Caido, datetime: string, note: string, projectName?: string) => {
  let storage = caido.storage.get() as PluginStorage | undefined;
  if (!storage) {
    storage = { notes: [] };
  }
  
  const updatedNotes = [...storage.notes, { datetime, note, projectName }];
  caido.storage.set({ ...storage, notes: updatedNotes });

  // Print added note to console.
  console.log("Added Note:", { datetime, note, projectName });
};
```

- It takes the `caido`, `datetime`, `note` and optional `projectName` parameters.
- It first checks if `storage` exist and creates an empty array if it doesn't.
- The `updatedStorage` variable keeps the notes in the existing stored notes array and appends a new note object.
- The `caido.storage.set()` method is called which updates the array with the new note.
- The added note data is then printed to the console.
:::

Next an HTML table element is created.

::: tip index.ts

```ts
const table = document.createElement("table");
table.id = "notesTable";
```

- The table is given an `id` of `notesTable` (_to be used for CSS styling_).
- This table has a global scope - allowing other code blocks to easily access it.
:::

The `clear` function is responsible for clearing the table of all note entries.

::: tip index.ts

```ts
const clear = (caido: Caido) => {
  if (table) {
    const tbody = table.querySelector("tbody");
    if (tbody) {
      table.textContent = "";
    }
  }
  caido.storage.set({ notes: [] });
}
```

- This will eventually be tied to the `clear command` as its handler function.
:::

The async `addNoteMenu` function is responsible for awaiting notes to add to the table as table body rows by highlight click-drag selecting text within editor panes in Caido.

::: tip index.ts

```ts
const addNoteMenu = async (caido: Caido) => {
  let currentSelect = caido.window.getActiveEditor()?.getSelectedText();

  if (!currentSelect) {
    currentSelect = prompt("No selection - enter note here:") as string;
  }

  if (currentSelect) {
    const project = await caido.graphql.currentProject();
    const projectData = project?.currentProject;
    if (projectData) {
      const projectName = projectData.name || 'No Project Selected';
      const datetime = new Date().toLocaleString();
      const row = table.insertRow();
      const datetimeCell = row.insertCell();
      const inputCell = row.insertCell();

      datetimeCell.textContent = `${datetime} Project: ${projectName}`;
      datetimeCell.classList.add('datetime-cell');
      inputCell.textContent = currentSelect;

      // Add the note to storage.
      addNoteStorage(caido, datetime, currentSelect, projectName);
    }
  }
};
```

- The editor panes are accessed using the `caido.window.getActiveEditor()?.getSelectedText();` method.
- If no selection is made, a prompt window will appear asking the user to supply input.
- Either note value options are stored in the `currentSelect` variable.
- Once the value is received, if the note was taken while within a specific Caido [Project](/reference/features/workspace/projects.md) then the API call to get the current Project name is made via the `caido.graphql.currentProject()` method.
- If you are currently within a Project, then the Project's name will be included in the `datetimeCell` of the table.
- If you are not currently within a project, "No Project Selected" will be included instead.
- The note will also be added to storage by calling the `addNoteStorage` function.
:::

The `addPage` function creates the tab's page.

::: tip index.ts

```ts
const addPage = (caido: Caido) => {}
```

- It takes the `caido` parameter.
- This function will later be called in the `init` function to initialize the plugin.
:::

Within the `addPage` function is the creation of HTML elements.

::: tip index.ts

```ts
const headerText = document.createElement("h1");
headerText.textContent = "Notebook";
headerText.className = "center";
```

Such as a header.

```ts
const details = document.createElement("details");
const summary = document.createElement("summary");
summary.textContent = "Instructions";
summary.classList.add("center", "bold-brown");
details.appendChild(summary);

const instructions = document.createElement("p");
instructions.innerHTML = `<span class="bold-brown">To add a note:</span><br>
1. Supply input in the textarea located at the bottom and click the <span class="light-brown">Add Note</span> button.<br>
2. Click the <span class="light-brown">>_ Commands</span> button located at the topbar in the upper-right corner. Search/Select <span class="light-brown">Add Note to Notebook</span>. Supply input in the prompt and click <span class="light-brown">OK</span>.<br>
3. Highlight select text within a request/response pane and open the context menu by right-clicking. Hover over the <span class="light-brown">Plugins</span> item and select <span class="light-brown">Add Note to Notebook</span>.<br>
4. <span class="light-brown">CTRL+C</span> within request and response panes and <span class="light-brown">CTRL+V</span> within the textarea/prompt input field.<br>***Copying within panes using <span class="light-brown">Copy</span> from the right-click context menu is also an option.***<br>
<br>
<span class="bold-brown">To clear all notes:</span><br>
<span class="bold-red">***This will reset the notes in storage. This action cannot be undone.***</span><br>
1. Click the <span class="light-brown">>_ Commands</span> button located at the topbar in the upper-right corner. Search/Select <span class="light-brown">Clear Notes in Notebook</span>.`
instructions.className = "center";

details.appendChild(instructions);
```

A collapsible instuctions paragraph.

```ts
const textarea = document.createElement("textarea");
textarea.placeholder = "Enter note here...";
textarea.classList.add("text-area");


const addNoteButton = caido.ui.button({
    variant: "primary",
    label: "Add Note"
});
```

As well as a textarea input field and corresponding submit button.
:::

The `addNoteButton` has an async handler function and is responsible for awaiting notes to add to the table as table body rows by taking the submitted textarea value.

::: tip index.ts

```ts
addNoteButton.addEventListener("click", async () => {
  const datetime = new Date().toLocaleString();
  let inputValue = textarea.value;

  if (inputValue) {
    const project = await caido.graphql.currentProject();
    const projectData = project?.currentProject;
    const projectName = projectData?.name || 'No Project Selected';
    const row = table.insertRow();
    const datetimeCell = row.insertCell();
    const inputCell = row.insertCell();

    datetimeCell.textContent = `${datetime} Project: ${projectName}`;
    datetimeCell.classList.add('datetime-cell');
    inputCell.textContent = inputValue;

    addNoteStorage(caido, datetime, inputValue, projectName);

    inputValue = "";
    textarea.value = "";
    }
  });
```

- The function will execute upon the `addNoteButton` being clicked.
- The note supplied in the textarea input field is stored in the `inputValue` variable.
- Once the value is received, if the note was taken while within a specific Caido [Project](/reference/features/workspace/projects.md) then the API call to get the current Project name is made via the `caido.graphql.currentProject()` method.
- If you are currently within a Project, then the Project's name will be included in the `datetimeCell` of the table.
- If you are not currently within a project, "No Project Selected" will be included instead.
- The note will also be added to storage by calling the `addNoteStorage` function.
- Once the note is added, the textarea input field is reset.
:::

A card is an element that consists of a header, body and footer. Since the UI interface is used in Notebook to create a card, the HTML elements are grouped together as the card cannot take an array for each property.

::: tip index.ts

```ts
const headerContainer = document.createElement("div");
headerContainer.appendChild(headerText);
headerContainer.appendChild(details);

const tableContainer = document.createElement("div");
tableContainer.appendChild(table);
tableContainer.classList.add("table-container");

const buttonContainer = document.createElement("div");
buttonContainer.appendChild(addNoteButton);
buttonContainer.classList.add("button-container")

const footerContainer = document.createElement("div");
footerContainer.appendChild(textarea);
footerContainer.appendChild(buttonContainer);
```

:::

The card propeties are then populated with the HTML elements that were previously grouped together using `div` elements.

::: tip index.ts

```ts
const card = caido.ui.card({
  header: headerContainer,
  body: tableContainer,
  footer: footerContainer
});
```

:::

The `notebook` page is created, allowing Caido users to be able to navigate to it.

::: tip index.ts

```ts
caido.navigation.addPage(Page, {
  body: card,
});
```

- The `body` property stores the previously created card.
- Now the page just awaits registration.
:::

The `init` function is responsible for initializing the plugin.

::: tip index.ts

```ts
export const init = (caido: Caido) => {}
```

- The function also receives the `caido` parameter.
:::

Within the `init` function is the following:

::: tip index.ts

```ts
const notes = getNotes(caido);
console.log("Current notes:", notes);
```

The notes are retrieved from storage by calling the `getNotes(caido)` function and logged to the console.

```ts
if (notes && notes.length > 0) {
  notes.forEach((note) => {
    const row = table.insertRow();;
    const datetimeCell = row.insertCell();
    const noteCell = row.insertCell();
          
    datetimeCell.textContent = `${note.datetime} Project: ${note.projectName}`;
    datetimeCell.classList.add('datetime-cell');
    noteCell.textContent = note.note;
    });
  }
```

If the notes array exists in storage and the number of notes in the array is greater than zero, then the array is iterated through and each note is added to the table - ensuring notes taken in prior application sessions are included.

```ts
caido.commands.register(Commands.clear, {
  name: "Clear Notes in Notebook",
  run: () => clear(caido),
});

caido.commands.register(Commands.addNoteMenu, {
  name: "Add Note to Notebook",
  run: () => addNoteMenu(caido),
});
```

The commands that were assigned identifiers in the beginning of the script are registered via the `caido.commands.register()` method and assigned a display name as well as their handler functions.

```ts
caido.commandPalette.register(Commands.clear);

caido.commandPalette.register(Commands.addNoteMenu);
```

- The commands are then registered to the command palette via the `caido.commandPalette.register()` method.
- The commands are now accessible via the `>_Command` button in the Caido application.

```ts
caido.menu.registerItem({
  type: "Request",
  commandId: Commands.addNoteMenu,
  leadingIcon: "fas fa-book"
});

caido.menu.registerItem({
  type: "Response",
  commandId: Commands.addNoteMenu,
  leadingIcon: "fas fa-book"
});
```

- The commands are then made available within the right-click context menu via the `caido.menu.registerItem()` method.
- The `commandId` property takes the value of the `Command` object with the command identifier as a property.
- The `"Request"` and `"Response"` values for the `type` property specify that the request and response editor panes of Caido will now include the command. The commands will be available under the `Plugins` category of the context menu.
- The `leadingIcon` is an optional property and sets the graphical icon of the context menu command selection. The first portion of the value specifies the icon style and the second specifies the icon by its identifier. Icons can be found at [https://fontawesome.com/icons](https://fontawesome.com/icons).

```ts
addPage(caido);
```

The page is registered by calling the `addPage(caido)` function.

```ts
caido.sidebar.registerItem("Notebook", Page, {
  icon: "fas fa-book",
});
```

- The tab in the left-hand menu of the Caido application is registered via the `caido.sidebar.registerItem()` method.
- The `sidebar` takes a `name`, `path` and optional additional `options` properties (_the `icon` property is used by Notebook to display a book icon in the tab_). Again, icons can be found at [https://fontawesome.com/icons](https://fontawesome.com/icons).
