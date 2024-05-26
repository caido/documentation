# Filters

**Filter Presets**, created via the `Filters` tab allows you to fine-tune which proxied resources/objects are displayed/excluded. Utilizing the intuitive query syntax of HTTPQL for their `Expressions` - these custom filtering rules ensure your work is streamlined by reducing the time it takes to find that specific request you are looking for.

Through the use of wildccard characters and logical operators - Caido's Filter Preset feature makes it easy to evalute a large amount of data as you delve into your testing engagement.

::: info
View the [HTTPQL](../../../concepts/essentials/httpql.md) documentation for more information on query syntax.
:::

## Filter Preset Rules

::: info
Filter Presets are referenced by their `Names` and `Aliases`.
:::

- Aliases can **only** contain lowercase letters (`a-z`), numbers (`0-9`) and the symbols (`-` and `_`).
- Names and Aliases **must** be unique across all Presets for referencing purposes.
- The Expression or Expressions **cannot** reference other Presets.

## Creating a New Filter Preset

<img alt="Creating a new Filter." src="/_images/newfilter_marked_layout.png" center/>

::: info
In this example - the Filter Preset created will display requests that include the **/about** path when applied.
:::

1. Select the `Filters` tab from the left-hand menu within the Caido window.
2. This pane displays all saved Filters. To create a new Filter - click on the `+ New Preset` button.
3. Provide a `Name` and an `Alias` for your new Preset. In the `Expression` field - supply one or more [HTTPQL](/concepts/essentials/httpql.md) queries. Click `Save` once the Filter is defined to your liking. Clicking `Delete` will remove the associated Filter Preset from the current Caido Project.

## Using a Filter Preset

Currently, the tabs that support Scope selection are **HTTP History** and **Search**.

<img alt="Selecting Filters." src="/_images/filter_preset_results.png" center/>

1. Click the `Advanced` button located to the right of the `Enter an HTTPQL query...` input field.
2. In the `Advanced options` side menu that is presented - select/deselect the Filter Presets you want to apply.
3. As the example Filter Preset created is reliant on the presence of the **/about** path - you can confirm it is working properly based on the Path filter category of the displayed requests.

## Additional Information

::: info

- You can create as many Filter Presets as you want.
- Filter Presets are specific to the Project they are created in.

:::

::: tip

- Caido provides default Presets for each new Project, but you can modify or update them if you wish to.
- Expression shortcut syntax: `"Value"` is equal to `(req.raw.cont:"Value" OR resp.raw.cont:"Value")` - insert an arbitrary value within the double quotes.

:::
