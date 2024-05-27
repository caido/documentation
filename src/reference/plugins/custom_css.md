# Custom CSS

The Custom CSS feature allows you to personalize the look and feel of the interface.

By writing your own CSS code in the provided text area, you can modify the aesthetic aspects of the application, such as the color scheme, layout and fonts used.

<img width="1000" alt="Custom CSS." src="/_images/custom_css.png" no-shadow center/>

## Themes

One of the simplest changes you can make is to customize the default theme. You can do this by adjusting the CSS variables we've provided to your liking.

::: tip
Some sections of Caido are not be configurable with CSS variables yet. Depending on your use case, you might have to add CSS to existing classes directly.
:::

Here is an (incomplete) example of a CSS snippet for the solarized dark theme. You can paste this into the Custom CSS field to try it out.

```css
:root {
  /* === Background === */
  /* Background: Foundations */
  --c-bg-default: #002b36;
  --c-bg-subtle: #073642;
  --c-bg-inset: #586e75;

  /* Background: Roles */
  --c-bg-primary: #dc322f;
  --c-bg-primary--pressed: var(--c-red-700);
  --c-bg-secondary: #b58900;
  --c-bg-secondary--pressed: var(--c-yellow-400);
  --c-bg-tertiary: var(--c-gray-400);
  --c-bg-tertiary--pressed: var(--c-gray-500);
  --c-bg-danger: var(--c-red-300);
  --c-bg-danger--pressed: var(--c-red-400);
  --c-bg-info: var(--c-blue-100);
  --c-bg-success: var(--c-green-400);
  --c-bg-success--pressed: var(--c-green-500);

  /* === Foreground === */
  /* Foreground: Foundations */
  --c-fg-default: var(--c-white-100);
  --c-fg-subtle: var(--c-gray-400);
  --c-fg-onEmphasis: var(--c-gray-900);

  /* Foreground: Roles */
  --c-fg-primary: var(--c-red-600);
  --c-fg-primary--pressed: var(--c-red-700);
  --c-fg-secondary: #b58900;
  --c-fg-secondary--pressed: var(--c-yellow-400);
  --c-fg-tertiary: var(--c-gray-400);
  --c-fg-tertiary--pressed: var(--c-gray-500);
  --c-fg-danger: var(--c-red-300);
  --c-fg-danger--pressed: var(--c-red-400);
  --c-fg-info: var(--c-blue-100);
  --c-fg-success: var(--c-green-400);
  --c-fg-success--pressed: var(--c-green-500);

  /* === Border === */
  /* Border: Foundations */
  --c-border-default: var(--c-gray-600);

  /* Border: Roles */
  --c-border-primary: var(--c-red-600);
  --c-border-secondary: #b58900;
  --c-border-tertiary: var(--c-gray-400);
  --c-border-danger: var(--c-red-300);
  --c-border-info: var(--c-blue-100);
  --c-border-success: var(--c-green-400);
}
```
