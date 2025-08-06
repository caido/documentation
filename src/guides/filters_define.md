# Defining a Filter

Filters are defined by creating sets of HTTPQL expressions referred to as `Filter Presets`.

::: info
Filter Presets are specific to the Project they are created in.
:::

## Creating a New Filter Preset

To create a new Filter Preset, **click** on the `+ New Preset` button.

<img alt="Creating a new Filter Preset." src="/_images/filters_new_preset.png" center/>

Once the Filter Preset is created, you can edit its display name and code alias by typing within the `Name *` and `Alias` input fields. Names and aliases must be unique across all Filter Presets for referencing purposes. To save the changes, press `ENTER`.

::: info
Aliases can only contain the following characters:

- Lowercase letters: `a`-`z`
- Numbers: `0`-`9`
- Symbols: `-`, `_`
:::

### Defining Filters

To define filters, **click** in the `Expression` input field to type your HTTPQL expression.

::: tip
[View the HTTQL Reference documentation to learn expression syntax.](/reference/httpql.md)
:::

::: info
Filter Presets do not support the `preset` HTTPQL namespace.
:::

Once you have defined the filter, **click** on the `🖫 Save` button to update and save the Filter Preset.

<img alt="Saving a Filter Preset." src="/_images/filters_save.png" center>
