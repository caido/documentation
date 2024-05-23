# Filters

The Filters page allows you to create **Filter presets** that can then later be used in [HTTPQL](/concepts/httpql.md) queries.
We provide a few presets for each new Project, but you can modify or update them if you wish to.

The Filters are Project specific for the moment.

<img alt="Filters page overview" src="/_images/filters.png" no-shadow center/>

## Name & Alias

The `name` and `alias` are used to reference the Filter preset in queries using either `preset:"Preset Name"` or `preset:preset-alias`.
This means they **must** be unique across all presets.

The `alias` can **only** contain lowercase letters (`a-z`), numbers (`0-9`) and some symbols (`-` and `_`).

## Expression

The expression is an [HTTPQL](/concepts/httpql.md) query, but it has some limitations:

- It **cannot** reference other `presets`.
- The shortcut `"my value"` is always expanded as `(req.raw.cont:"my value" OR resp.raw.cont:"my value")`.
