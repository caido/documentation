---
description: "A step-by-step guide to enabling invisible proxying in Caido CLI and Desktop application to capture traffic from non-proxy aware applications."
---

# Invisible Proxying

::: tip
View the [Invisible Proxying for Non-Proxy Aware Thick Clients](/tutorials/invisible_proxy.md) tutorial for a detailed walk-through on configuring invisible proxying.
:::

::: warning NOTE
If you enable invisible proxying on a remote instance, you must ensure the **same address and port** is used. This includes any SSH port forwarding you may use. Otherwise, Caido will not be able to [split the traffic](/concepts/proxying/traffic_splitting) correctly and will not work.
:::

## Caido CLI

By default, invisible proxying is **disabled** for the Caido CLI. To enable invisible proxying with the Caido CLI, launch Caido with the `--invisible` argument.

```bash
caido --invisible
```

## Desktop Application

By default, invisible proxying is **enabled** for local instances. To disable invisible proxying within the Caido desktop application, in the launch window, **click** on the <code><Icon icon="fas fa-ellipsis-vertical" /></code> button attached to an instance and select `Edit`.

<img alt="The Edit instance option." src="/_images/launch_window_edit.png" center/>

Then, **click** on <code><Icon icon="fas fa-angle-right" /> Advanced</code> to expand the drop-down settings menu options and **click** on the `Enable invisible proxying` checkbox to remove its fill.

<img alt="The Advanced instance options." src="/_images/launch_window_advanced_options.png" center/>

**Click** on the `Save` button to update and save the configuration.
