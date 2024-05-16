# Scope

Scopes allow you to filter requests throughout the application by creating presets of in-scope and out-of-scope hosts. Scoping is available for most of the Caido tools.

## Creating a Scope

---

You can create as many scopes as you want. Scopes are specific to a Project.
Scopes are composed of **Scope rules**:

- They can **only** contain lowercase letters (`a-z`), numbers (`0-9`) and some symbols (`-`, `_`, `*`, `?`).
- They can include [Glob wildcards](<https://en.wikipedia.org/wiki/Glob_(programming)>) (`*` and `?`) to support multiple subdomains (`*.example.com`) and TLD (`*example*`).
- They currently only support domains, **not paths**.
- They can be `In Scope` acting as an allow list or `Out of Scope` acting as a deny list.

> **NOTE**: Adding or removing a rule can be **slow** if you have a big project since Caido will re-index your data on each change.

<img alt="Scope creation." src="/_images/scope_creation.png" no-shadow/>

## Using a Scope

Once you have created a Scope preset, you can apply it to a given tool by selecting it from the `Scope Preset` dropdown located in the **top-left corner** of each page that supports it.

In Caido, Scopes are **NOT** global. Each tool and _(eventually)_ each view can have a different Scope. You can switch between Scopes very fast.

<img width="400" alt="Selecting scope" src="/_images/scope_selection.png" center/>
