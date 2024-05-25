# Filters

The `Filters` tab allows you to create **Filter Presets** that can then later be used in [HTTPQL](/concepts/essentials/httpql.md) queries.
Caido provides a few presets for each new Project, but you can modify or update them if you wish to.

::: info
The Filters are Project specific for the moment.
:::

<img alt="Filters page overview" src="/_images/filters.png" no-shadow center/>

## Name & Alias

The `Name` and `Alias` are used to reference the Filter Preset in queries using either `preset:"Preset Name"` or `preset:preset-alias`.
This means they **must** be unique across all Presets.

::: info
The `Alias` can **only** contain lowercase letters (`a-z`), numbers (`0-9`) and some symbols (`-` and `_`).
:::

## Expression

The expression is an [HTTPQL](/concepts/essentials/httpql.md) query, but it has some limitations:

- It **cannot** reference other `Presets`.
- The shortcut `"my value"` is always expanded as `(req.raw.cont:"my value" OR resp.raw.cont:"my value")`.
