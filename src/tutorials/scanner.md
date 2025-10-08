---
description: "Learn how to configure and use the Scanner plugin for automated vulnerability detection, including passive and active scanning with template-based checks."
---

# Scanner

The [Scanner](https://github.com/caido-community/scanner) is Caido's official template-based, vulnerability detection engine that brings automated security testing capabilities to Caido.

::: info
The Scanner is available for [installation](/guides/plugins_installing.md) in the `Official` tab of the Plugin interface.
:::

<img alt="The Scanner plugin listed in the Official tab." src="/_images/scanner_install.png" center />

## Checks

::: tip
[Learn how to create your own check templates.](https://github.com/caido-community/scanner#%E2%80%8D-developer-documentation)
:::

The templates utilized by the plugin are referred to as "checks" and contain the logic for identifying specific security issues.

To view the checks available, navigate to the Scanner plugin interface and **click** on the `Checks` tab.

Each check is listed as a table row. A check's metadata information, including a description of the vulnerability tested for and categorical tags, can be viewed by **clicking** on the <code><Icon icon="fas fa-chevron-right" /></code> button attached to its row. The metadata also includes a check's:

- `Type`: Passive type checks are silent enough to run in the background without causing noise. Active type checks require more noticible interaction with the target.
- `Aggressivity`: The number of requests that are generated and sent.

<img alt="The expanded details section of the Command Injection check row." src="/_images/scanner_command_injection_check.png" center />

## Selecting Checks

The Scanner plugin runs checks either passively as traffic is proxied through Caido or actively against manually selected requests.

To include or exclude a check in either passive or active scanning, **click** on it's associated checkbox in the `Passive` or `Active` column.

<img alt="The list of checks in the Checks tab of the Scanner plugin." src="/_images/scanner_checks.png" center />

### Check Presets

Predefined selections of passive and active checks are available as check presets. To save your current selection of checks as a custom preset, **click** on the `+ New Preset` button.

## Passive Scanning

By default, once the Scanner plugin is installed, passive scanning is enabled against in-scope proxied traffic. To disable passive scanning or apply it to all proxied traffic, navigate to the `Settings` tab interface.

This interface also includes rate limiting options and allows you to select the vulnerability severity levels that should generate [findings](/guides/workflows_findings.md) upon detection.

<img alt="The Settings tab of the Scanner plugin." src="/_images/scanner_settings.png" center />

## Active Scanning

To execute a scan manually against a specific request **right-click** within a request pane or on a traffic table row, hover your mouse cursor over `Plugins` and `Scanner`, and select <code><Icon icon="fas fa-shield-halved" /> Run Active Scanner</code> to open the `Scan Launcher` window.

::: tip
To scan multiple requests, either `CTRL` + **click** select multiple rows or select a range of rows with `SHIFT` + **click**.
:::

<img alt="The Run Active Scanner context menu option." src="/_images/scanner_context_menu.png" center />

All requests that the scan will be applied to will be listed in the `Targets` tab.

<img alt="The target requests of the scan." src="/_images/scanner_targets.png" center />

Additional configuration options for active scans are available in the `Configuration` tab.

<img alt="The configuration options available to active scans." src="/_images/scanner_configuration.png" center />

Once the active scan is configured, **click** on the <code><Icon icon="fas fa-play" /> Run Scan</code> button to run the enabled active checks.

In addition to generating findings, the results of ongoing and completed active scans are available in the `Dashboard` tab interface.

::: tip
To interupt an in-progress active scan, click on the `Cancel` button.
:::

<img alt="The Dashboard tab interface." src="/_images/scanner_dashboard.png" center />
