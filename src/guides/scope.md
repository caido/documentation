# Scopes

Scopes are defined through the creation of **Scope Presets** within the `Scopes` interface. Your **Scope Presets** will match requests throughout the application by using a supplied list of `Hosts` that are designated either `In Scope` or `Out of Scope`. Scoping improves the efficiency of your testing process by quickly filtering the display of targets that are relevant/irrelevant to your engagement.

Caido offers the ability to switch between your Scope Presets with ease throughout the application.

## Scope Preset Rules

- Hosts can **only** contain lowercase letters (`a-z`), numbers (`0-9`) and some symbols (`-`, `_`, `*`, `?`).
- Hosts can include [Glob Wildcards](https://en.wikipedia.org/wiki/Glob_(programming)) (`*` and `?`) to support multiple subdomains (`*.example.com`) and TLDs (`*example*`).
- Hosts can be `In Scope` acting as an **allow list** or `Out of Scope` acting as a **deny list**.

::: warning NOTE
Scope Presets currently only support domains, **not paths**.

View the submitted [Github Issue](https://github.com/caido/caido/issues/642) for more information and to cast your vote to prioritize the implementation of paths within scoping rules.
:::

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
