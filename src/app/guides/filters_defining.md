---
description: "A step-by-step guide to creating and defining filter presets in Caido using HTTPQL queries to organize and categorize traffic analysis."
---

# Defining a Filter

Filters are defined by creating sets of HTTPQL queries referred to as "filter presets".

::: info
Filter presets are specific to the project they are created in.
:::

## Creating a New Filter Preset

To create a new filter preset, **click** on the `+ New Preset` button.

<img alt="Creating a new filter preset." src="/_images/filters_new_preset.png" center/>

Once the filter preset is created, you can edit its display name and code alias by typing within the `Name *` and `Alias` input fields. Names and aliases must be unique across all filter presets for referencing purposes. To save the changes, press `ENTER`.

::: info
Aliases can only contain the following characters:

- Lowercase letters: `a`-`z`
- Numbers: `0`-`9`
- Symbols: `-`, `_`
:::

### Defining Filters

To define filters, **click** in the `Expression` input field to type your HTTPQL queries.

::: tip
[View the HTTPQL Reference documentation to learn statement syntax.](/app/reference/httpql.md)
:::

::: info
Filter presets do not support the `preset` HTTPQL namespace.
:::

Once you have defined the filter, **click** on the <code><Icon icon="fas fa-floppy-disk" /> Save</code> button to update and save the filter preset.

<img alt="Saving a filter preset." src="/_images/filters_save.png" center>
