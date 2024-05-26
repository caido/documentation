# Scopes

The `Scopes` tab allows you to create **Scope Presets** that will match requests throughout the application by creating a list of `Hosts` that are either `In Scope` or `Out of Scope`. Scoping improves the efficiency of your testing process by quickly filtering the display of targets that are relevant/irrelevant to your engagement.

## Scope Preset Rules

- Hosts can **only** contain lowercase letters (`a-z`), numbers (`0-9`) and some symbols (`-`, `_`, `*`, `?`).
- Hosts can include [Glob wildcards](https://en.wikipedia.org/wiki/Glob_(programming)) (`*` and `?`) to support multiple subdomains (`*.example.com`) and TLDs (`*example*`).
- Scope Presets currently only support domains, **not paths**.
- Hosts can be `In Scope` acting as an **allow list** or `Out of Scope` acting as a **deny list**.

## Creating a New Scope Preset

<img alt="Creating a new Scope." src="/_images/scope_marked_layout.png" center/>

::: info
In this example - the Scope Preset created will record any traffic to/from **caido.io** and **example.com** as well as any subdomains with the exception of **docs.caido.io** as it is listed Out of Scope.
:::

1. Select the `Scope` tab from the left-hand menu within the Caido window.
2. This pane displays all saved Scopes. To create a new Scope - click on the `+ New Preset` button.
3. Name your Scope Preset and enter the rules of the Scope in this pane. Click `Save` once the Scope is defined to your liking. Clicking `Delete` will remove the associated Scope Preset from the current Caido Project.

## Applying a Scope Preset

Currently, the tabs that support Scope selection are **Sitemap**, **Intercept**, **HTTP History**, **WS History** and **Search**.

<img alt="Selecting Scopes." src="/_images/scope_preset_results.png" center/>

1. Click the Scope dropdown menu.
2. You will be presented with a list of your saved Scope Presets. Select one to apply it.

## Additional Information

::: info

- You can create as many Scope Presets as you want.
- Scope Presets are specific to the Project they are created in.
- Adding or removing a Preset can be **slow** if you have a big Project since Caido will re-index your data on each change.
- In Caido, Scopes are **NOT** global. Each tool and _(eventually)_ each view can have a different Scope.

:::

::: tip
Selecting `Unset Scope` acts as an absence of any scoping. All proxied traffic will be displayed.
:::
