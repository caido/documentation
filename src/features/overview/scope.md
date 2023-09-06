# Scope

The Scope feature allows you to filter requests throughout the app by creating presets of in-scope and out-of-scope hosts. Currently, scoping is available for the Sitemap, Search and HTTP History pages.

## Creating a scope preset

The Scope feature is split into two panes, the left pane contains the list of scope presets, and the right pane contains the details for a scope preset. To create a new scope preset, follow these steps:

1. In the left pane, click on the "New Preset" button.
2. In the right pane, enter a name for the new preset in the "Preset Name" field.
3. Write the name of the host you want to add to the scope preset. You can use the wildcard characters '%' and '\_' to create your presets.
4. Choose the type of the entry (in-scope or out-of-scope) and click "Add".
5. Click the "Save" button to create the preset.

![scope_creation](/_images/scope_creation.png)

## Using scope presets

Once you have created a scope preset, you can apply it to the HTTP history and Search pages by selecting it from the "Scope Preset" dropdown located in the top left corner of each page.

When you select a scope preset from the dropdown, the table on the page will be filtered based on the hosts defined in the selected scope preset.

![selecting_scope](/_images/history_selecting_scope.png)
