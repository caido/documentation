---
description: "Map Burp Suite Pro custom scan checks to Caido Scanner and workflows."
---

# Custom Scan Checks

Burp Suite Pro custom scan checks and their Caido equivalents.

::: info Related BApps
Several BApp Store extensions also add scan checks — for example, Active Scan++ and Additional Scanner Checks. See [Extensions](/burp-suite/extensibility/extensions) for those mappings.
:::

## Available

### Custom scan checks

User-defined passive and active scan rules written in BCheck format or via the custom scan checks API.

Define custom checks through the **Scanner** plugin's check definition API for active and passive vulnerability detection. Supplement with **Passive Workflows** for traffic-level rules that run on every request. Caido splits scanning between the Scanner plugin (issue detection) and workflows (traffic analysis) rather than a single BCheck format.

#### Resources

- [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) (GitHub)
- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)
- [Workflows](/app/quickstart/workflows.md)
- [Scanner Tutorial](/app/tutorials/scanner.md)
