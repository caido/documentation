# Scope

Scopes allows you to filter requests throughout the app by creating presets of in-scope and out-of-scope hosts. Scoping is available for most of the Caido tools.

## Creating a scope

You can create as many scopes as you want. Scopes are specific to a project.
Scopes are composed of **scope rules**:

- They can **only** contain lowercase letters (`a-z`), numbers (`0-9`) and some symbols (`-`, `_`, `*`).
- They can include wildcards (`*`) to support multiple subdomains (`*.example.com`) and TLD (`*example*`).
- They currently only support domains, **not paths**.
- They can be `In Scope` acting as an allow list or `Out of Scope` acting as a deny list.

> **NOTE**: Adding or removing a rule can be **slow** if you have a big project since Caido will re-index your data on each change

<img alt="Scope creation" src="/_images/scope_creation.png" no-shadow/>

## Using a scope

Once you have created a scope preset, you can apply it to a given tool by selecting it from the `Scope Preset` dropdown located in the **top left corner** of each page that support it.

In Caido, scopes are **NOT** global. Each tool and _(eventually)_ each view can have a different scope. You can switch between scopes very fast.

<img width="400" alt="Selecting scope" src="/_images/scope_selection.png" center/>
