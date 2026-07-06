---
description: "Map Burp Suite Pro reporting features to Caido."
---

# Reporting

Burp Suite Pro reporting and export features and their Caido equivalents.

## Indirectly Available

### Generating a Report

Burp exports scan results and findings as formatted HTML or XML reports.

Caido tracks issues in native **Findings** and exports raw traffic data through **Exports**. Caido does not ship formatted HTML or XML report generation like Burp; use **Findings** for issue tracking, **Exports** for external reporting tools, or the **Notify** plugin to push findings to notification platforms.

#### Resources

- [Findings](/app/quickstart/findings.md)
- [Exports](/app/quickstart/exports.md)
- [Exporting Requests](/app/guides/exports_requests.md)
- [Notify](https://github.com/MDGDSS/caido-notify) (GitHub)
