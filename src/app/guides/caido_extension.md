---
description: "A step-by-step guide to installing and configuring the Caido browser extension for Firefox."
---

# Using the Caido Browser Extension

Caido's browser extension gives you the ability to quickly enable/disable your browser's use of Caido as a proxy.

## Firefox

To install the browser extension, launch the Firefox browser, navigate to [https://addons.mozilla.org/en-US/firefox/addon/caido-extension/](https://addons.mozilla.org/en-US/firefox/addon/caido-extension/), and **click** on the `Add to Firefox` button.

In the pop-up window, select `Allow extension to run in private windows`, and then click on the `Add` button.

<img alt="Add FoxyProxy pop-up window." src="/_images/firefox_add_caido_extension.png" center/>

In the subsequent pop-up window, **click** on the `OK` button.

<img alt="FoxyProxy added to Firefox." src="/_images/firefox_caido_extension_added.png" center/>

Once the extension is installed, [continue to the configuration instructions](#configuring-the-caido-browser-extension).

## Configuring the Caido Browser Extension

**Click** on the Caido Extension toolbar button.

<img alt="The Caido Extension toolbar interface." src="/_images/caido_extension_options.png" center/>

### Automatic Configuration

To automatically detect the proxy settings of your instance and create a configuration, launch Caido and **click** on the <code><Icon icon="fas fa-magnifying-glass" /> Auto-detect</code> button.

<img alt="Auto-detect." src="/_images/caido_extension_auto.png" center/>

**Click** on the <code><Icon icon="fas fa-check" /> Confirm</code> button to save the configuration.

### Manual Configuration

To manually create a configuration, **click** on the `+ Create a proxy` button.

In the configuration interface, give an arbitrary name to the proxy configuration in the `Name` input field, and set the following settings:

- `Host`: `127.0.0.1`
- `Port`: `8080`

<img alt="Manual configuration." src="/_images/caido_extension_manual.png" center/>

Once the configuration is set, **click** on the `+ Create` button.

## Enabling/Disabling Proxying

To enable proxying to pass web traffic through Caido, **click** on the Caido Extension toolbar button and **click** on the sliding radio button.

<img alt="Enabling the configuration." src="/_images/caido_extension_enable.png" center/>

To disable proxying, **click** on the sliding radio button to remove its fill.
