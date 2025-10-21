---
description: "A step-by-step guide to installing and configuring the FoxyProxy browser extension for Chrome and Firefox."
---

# Using FoxyProxy

The FoxyProxy browser extension gives you the ability to quickly enable/disable your browser's use of Caido as a proxy.

## Chrome

To install the browser extension, launch the Chrome browser, navigate to [https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp](https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp), and click on the `Add to Chrome` button.

In the pop-up window, **click** on the `Add extension` button.

<img alt="Add FoxyProxy pop-up window." src="/_images/chrome_add_foxyproxy.png" center/>

---

<img alt="FoxyProxy added to Chrome." src="/_images/chrome_foxyproxy_added.png" center/>

## Firefox

To install the browser extension, launch the Firefox browser, navigate to [https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/), and click on the `Add to Firefox` button.

In the pop-up window, select `Allow extension to run in private windows`, and then **click** on the `Add` button.

<img alt="Add FoxyProxy pop-up window." src="/_images/firefox_add_foxyproxy.png" center/>

In the subsequent pop-up window, **click** on the `OK` button.

<img alt="FoxyProxy added to Firefox." src="/_images/firefox_foxyproxy_added.png" center/>

## Configuring FoxyProxy

Once FoxyProxy is installed, **click** on the <code><Icon icon="fas fa-puzzle-piece" /></code> button in the top-right corner of the browser window and then either **click** on the <code><Icon icon="fas fa-thumbtack" /></code> button or **right-click** on the extension and select `Pin to Toolbar`.

Then, **click** on its toolbar button and select `Options`.

<img alt="The FoxyProxy toolbar interface." src="/_images/foxyproxy_options.png" center/>

Next, select the `Proxies` tab and **click** on the `Add button`.

<img alt="The FoxyProxy Proxies tab." src="/_images/foxyproxy_proxies_add.png" center/>

In the configuration interface, give an arbitrary name to the proxy configuration in the `Title` input field, and set the following settings:

- `Type`: `HTTP`
- `Hostname`: `127.0.0.1`
- `Port`: `8080`

<img alt="FoxyProxy configuration." src="/_images/foxyproxy_configuration.png" center/>

Once the configuration is set, **click** on the `Save` button.

## Enabling/Disabling Proxying

To enable proxying to pass web traffic through Caido, **click** on the FoxyProxy toolbar button and select the saved configuration by its name.

<img alt="Enabling FoxyProxy." src="/_images/foxyproxy_enable.png" center/>

To disable proxying, select the <code><Icon icon="fas fa-power-off" /> Disable</code> option.
