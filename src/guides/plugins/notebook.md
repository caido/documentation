# Notebook Plugin Development Guide

_For general documentation on Plugins - click [here](/concepts/plugins/plugin_basics.md)._

_For advanced documentation on Frontend Plugins - click [here](/concepts/plugins/frontend.md)._

**Notebook** is a note taking plugin. The repository for Notebook can be found [here](https://github.com/caido-community/notebook).

## manifest.json

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

## types.ts

The Notebook `types.ts` file exports a type alias of `PluginStorage`. This is a custom type created to define the structure of the `notes` array.

::: tip types.ts

```ts
export type PluginStorage = {
  notes: { datetime: string; note: string; projectName?: string }[];
}
```

 Each note element within the array will be an object that has the following properties:

- `datetime` - The date and time the note was stored of type `string`.
- `note` - The note itself of type `string`.
- `projectName` - The Project that the note was taken in of type `string`. This property is **optional**.
:::

## index.ts

The file first imports the `Caido` type which is the interface to the SDK and the `PluginStorage` type defined in the `types.ts` file.

::: tip index.ts

```ts
// Imports.
import type { Caido } from "@caido/sdk-frontend";

import type { PluginStorage } from "./types";
```

:::

Next, the `Page` variable stores the path for the plugin page.

::: tip index.ts

```ts
// Creates path.
const Page = "/notebook";
```

Each Caido tab represents a separate page. You can conceptualize tabs and pages in the same sense as a web browser. The browser application can have multiple tabs each displaying different pages.
:::

The `Commands` object has two command properties.

::: tip index.ts

```ts
// Syntax of - identifier: "namespace.namespaceIdentifier".
const Commands = {
  clear: "notebook.clear",
  addNoteMenu: "notebook.addNoteMenu",
};
```

:::

The `getNotes` function is responsible for retrieving the notes array from storage.

::: tip index.ts

```ts
// Get notes from storage.
const getNotes = (caido: Caido): PluginStorage["notes"] => {
  const storage = caido.storage.get() as PluginStorage | undefined;
  return storage?.notes ?? [];
};
```

- The function takes the `caido` parameter of type `Caido` which represents the Caido SDK object and is used as the interface.
- The return value of the function will be of type `PluginStorage["notes"]`.
- It starts by calling the `caido.storage.get()` method to retrieve the current stored `notes` array.
- The `?.` operator checks if `storage` is not null/undefined before attempting to access the `notes` property. If the `notes` property exists, its value is returned. Otherwise, if the `notes` property does not exist or is null/undefined - an empty array is returned.
:::

The `addNoteStorage` function is responsible for adding to the storage.

::: tip index.ts

```ts
// Add note to storage.
const addNoteStorage = async (
  caido: Caido,
  datetime: string,
  note: string,
  projectName?: string,
) => {
  const currentNotes = getNotes(caido);
  const updatedNotes = [...currentNotes, { datetime, note, projectName }];
  await caido.storage.set({ notes: updatedNotes });

  // Print added note to console.
  console.log("Added Note:", { datetime, note, projectName });
};
```

- It first calls the `currentNotes` function to retrieve existing notes/return an empty array.
- The `updatedStorage` variable keeps the notes in the existing stored notes array and appends a new note object using the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `[...storage.notes]`.
- The `caido.storage.set()` method is called which updates the array with the new note. Before calling this method - the plugin is solely working in the frontend environment. So, if you close the Caido application, the data will be lost. This method calls the backend and persists the new note. Storage uses a last-write-wins strategy, meaning that if you add a note in another browser tab it will be overwritten unless you have a `storage.onChange()` method call that syncs your local storage. This `storage.onChange()` method call appears later in the script.
:::

Next an HTML table element is created.

::: tip index.ts

```ts
// Global scope table.
const table = document.createElement("table");
table.id = "notesTable";
```

- The table is given an `id` of `notesTable` (_to be used for CSS styling_).
- This table has a global scope - allowing other code blocks to easily access it.
:::

The `clear` function is responsible for clearing the table of all note entries.

::: tip index.ts

```ts
// Resetting the page table.
const clear = (caido: Caido) => {
  if (table) {
    const tbody = table.querySelector("tbody");
    if (tbody) {
      table.textContent = "";
    }
  }
  caido.storage.set({ notes: [] });
};
```

- This will eventually be tied to the `clear command` as its handler function.
:::

The async `addNoteMenu` function is responsible for awaiting notes to add to the table as table body rows by highlight click-drag selecting text within editor panes in Caido.

::: tip index.ts

```ts
// Add note via prompt or highlight selecting text and selecting context menu option.
const addNoteMenu = async (caido: Caido) => {
  let currentSelect = caido.window.getActiveEditor()?.getSelectedText();

  if (!currentSelect) {
    currentSelect = prompt("No selection - enter note here:") as string;
  }

  if (currentSelect) {
    const project = await caido.graphql.currentProject();
    const projectData = project?.currentProject;
    if (projectData) {
      const projectName = projectData.name || "No Project Selected";
      const datetime = new Date().toLocaleString();

      // Add the note to storage.
      await addNoteStorage(caido, datetime, currentSelect, projectName);
    }
  }
};
```

- The editor panes are accessed using the `caido.window.getActiveEditor()?.getSelectedText();` method.
- If no selection is made, a prompt window will appear asking the user to supply input.
- Once the value is received, if the note was taken while within a specific Caido [Project](/reference/features/workspace/projects.md) then the API call to get the current Project name is made via the `caido.graphql.currentProject()` method.
- If you are currently within a Project, then the Project's name will be included in the `datetimeCell` of the table.
- If you are not currently within a project, "No Project Selected" will be included instead.
- The note will also be added to storage by calling the `addNoteStorage` function.
:::

The `addPage` function creates the tab's page.

::: tip index.ts

```ts
// Plugin page construction.
const addPage = (caido: Caido) => {
```

- It takes the `caido` parameter.
- This function will later be called in the `init` function to initialize the plugin.
:::

Within the `addPage` function is the creation of HTML elements.

::: tip index.ts

```ts
  // Header.
  const headerText = document.createElement("h1");
  headerText.textContent = "Notebook";
  headerText.className = "center";

  // Instructions.
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
  4. <span class="light-brown">CTRL+C</span> and <span class="light-brown">CTRL+V</span> within request and response panes is available as well but <span class="red">ensure to deselect the text and unfocus the pane to avoid needing to restart the Caido application.</span><br>***Copying within panes using <span class="light-brown">Copy</span> from the right-click context menu is functional as normal.***<br>
  <br>
  <span class="bold-brown">To clear all notes:</span><br>
  <span class="bold-red">***This will reset the notes in storage. This action cannot be undone.***</span><br>
  1. Click the <span class="light-brown">>_ Commands</span> button located at the topbar in the upper-right corner. Search/Select <span class="light-brown">Clear Notes in Notebook</span>.`;
  instructions.className = "center";

  details.appendChild(instructions);

  // Input textarea.
  const textarea = document.createElement("textarea");
  textarea.placeholder = "Enter note here...";
  textarea.classList.add("text-area");

  // `Add note.` button.
  const addNoteButton = caido.ui.button({
    variant: "primary",
    label: "Add Note",
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
      const projectName = projectData?.name || "No Project Selected";

      // Add the note to storage.
      await addNoteStorage(caido, datetime, inputValue, projectName);

      // Clear textarea and reset value.
      inputValue = "";
      textarea.value = "";
    }
  });
```

- The function will execute upon the `addNoteButton` being clicked.
- Once the value is received, if the note was taken while within a specific Caido [Project](/reference/features/workspace/projects.md) then the API call to get the current Project name is made via the `caido.graphql.currentProject()` method.
- If you are currently within a Project, then the Project's name will be included in the `datetimeCell` of the table.
- If you are not currently within a project, "No Project Selected" will be included instead.
- The note will also be added to storage by calling the `addNoteStorage` function.
- Once the note is added, the textarea input field is reset.
:::

A card is an element that consists of a header, body and footer. Since the UI interface is used in Notebook to create a card, the HTML elements are grouped together as the card cannot take an array for each property.

::: tip index.ts

```ts
 // Combining elements into divs since card properties cannot accept arrays.

  const headerContainer = document.createElement("div");
  headerContainer.appendChild(headerText);
  headerContainer.appendChild(details);

  const tableContainer = document.createElement("div");
  tableContainer.appendChild(table);
  tableContainer.classList.add("table-container");

  const buttonContainer = document.createElement("div");
  buttonContainer.appendChild(addNoteButton);
  buttonContainer.classList.add("button-container");

  const footerContainer = document.createElement("div");
  footerContainer.appendChild(textarea);
  footerContainer.appendChild(buttonContainer);
```

:::

The card propeties are then populated with the HTML elements that were previously grouped together using `div` elements.

::: tip index.ts

```ts
  // Card elements.
  const card = caido.ui.card({
    header: headerContainer,
    body: tableContainer,
    footer: footerContainer,
  });
```

:::

The `notebook` page is created, allowing Caido users to be able to navigate to it.

::: tip index.ts

```ts
  // Create plugin page in left tab menu.
  caido.navigation.addPage(Page, {
    body: card,
  });
};
```

- The `body` property stores the previously created card.
- Now the page just awaits registration.
:::

The `displayNotes` function populates the table with notes.

::: tip index.ts

```ts
const displayNotes = (notes: PluginStorage["notes"] | undefined) => {
  const tbody = table.querySelector("tbody");
  if (tbody) {
    table.textContent = "";
  }

  if (!notes) {
    return;
  }

  notes.forEach((note) => {
    const row = table.insertRow();
    const datetimeCell = row.insertCell();
    const noteCell = row.insertCell();

    datetimeCell.textContent = `${note.datetime} Project: ${note.projectName}`;
    datetimeCell.classList.add("datetime-cell");
    noteCell.textContent = note.note;
  });
};
```

- The function takes the array of notes and iterates through each note element.
- For each note element, a table row is added and populated with the `datetimeCell` and `noteCell`.
:::

The `init` function is responsible for initializing the plugin.

::: tip index.ts

```ts
export const init = (caido: Caido) => {
```

- The function also receives the `caido` parameter.
:::

Within the `init` function is the following:

::: tip index.ts

```ts
  // Retrieve notes from storage.
  const notes = getNotes(caido);
  console.log("Current notes:", notes);
```

The notes are retrieved from storage by calling the `getNotes(caido)` function and logged to the console.

```ts
  // Populate table with stored notes.
  displayNotes(notes);

  caido.storage.onChange((value) => {
    displayNotes((value as PluginStorage | undefined)?.notes);
  });
```

- The `displayNotes` function is called to populate the table with notes.
- The `onChange` method is used to register a callback function that will be executed whenever the value of the storage changes. This method ensures that data persists across different sessions (_such as when you add a note in another browser tab_) by syncing local storage. Without the `onChange` method, notes would be overwritten by different sessions.
- _Conceptual explanation_: Caido is open in two browser tabs on 127.0.0.1:8080. Tab 1 has Note A. Tab 2 has Note A and Note B. The server knows about Note A and Note B. Without the `onChange` method - if Tab 1 adds its own Note B, the original Note B will be overwritten.

```ts
  // Register commands.
  // Commands are registered with a unique identifier and a handler function.
  // The run function is called when the command is executed.
  // These commands can be registered in various places like command palette, context menu, etc.
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
  // Register command palette items.
  caido.commandPalette.register(Commands.clear);

  caido.commandPalette.register(Commands.addNoteMenu);
```

- The commands are then registered to the command palette via the `caido.commandPalette.register()` method.
- The commands are now accessible via the `>_Command` button in the Caido application.

```ts
  // Register context menu options.
  caido.menu.registerItem({
    type: "Request",
    commandId: Commands.addNoteMenu,
    leadingIcon: "fas fa-book",
  });

  caido.menu.registerItem({
    type: "Response",
    commandId: Commands.addNoteMenu,
    leadingIcon: "fas fa-book",
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
:::

## style.css

::: tip style.css

```css
/* Preserves line breaks and wraps lines that exceed content width. */
#instructions {
  white-space: pre-line;
}

#notesTable {
  width: 100%;
}

/* Allow user to select text. */
#notesTable td {
  user-select: auto;
  -webkit-user-select: auto;
}

/* Settings for the datetime column rows. */
#notesTable td:nth-child(1) {
  width: 200px;
  white-space: pre-wrap;
  text-align: left;
  padding: 8px;
}

/* Settings for the note column rows. */
#notesTable td:nth-child(2) {
  width: auto;
  white-space: pre-line;
  word-wrap: break-word;
  text-align: left;
}

/* Expands width of textarea input to fill width. */
.text-area {
  width: 100%;
  resize: none;
}

.center {
  text-align: center;
}

/* Settings for the table. */
.table-container {
  overflow: auto;
  max-height: 100%;
  max-width: 100%;
}

/* Border to separate table elements. */
.table-container table td {
  border: 1px solid black;
  padding: 5px;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.bold-brown {
  font-weight: bold;
  color: #b49566;
}

.red {
  color: #f58e97;
}

.bold-red {
  font-weight: bold;
  color: #f58e97;
}

.light-brown {
  color: #e9c38b;
}

/* Moves the datetime and Project name to the top of the table entry. */
.datetime-cell {
  vertical-align: top;
  color: #d1bfa5;
}
```

:::
