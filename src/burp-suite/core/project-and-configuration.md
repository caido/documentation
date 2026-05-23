---
description: "Map Burp Suite Pro project files and configuration to Caido."
---

# Project & Configuration

Burp Suite Pro project files, session handling, and configuration features and their Caido equivalents.

## Available

### Project files

Save and restore Burp state including traffic, site map, and configuration.

Use Caido's native **Workspace** to manage projects and persist traffic, scope, and configuration within an instance. Export traffic separately with **Exports** when you need portable data outside the workspace.

#### Resources

- [Workspace](/app/quickstart/workspace.md)
- [Exports](/app/quickstart/exports.md)
- [Recovering Projects](/app/guides/projects_recovering.md)
- [Project Backups](/app/guides/projects_backups.md)

## Indirectly Available

### Session handling rules

Automatically modify requests based on session state using macros and rules.

Caido has no native session handling rule engine like Burp. Store session tokens in **Environment Variables** and inject them into requests with **Workflows**. This requires explicit setup rather than Burp's rule-based automation.

#### Resources

- [Environment Variables](/app/quickstart/environment.md)
- [Workflows](/app/quickstart/workflows.md)
- [Refresh Authentication Tutorial](/app/tutorials/refresh_authentication.md)

### Macros

Recorded sequences of requests replayed to maintain session state.

Caido has no macro recorder like Burp. Chain requests manually in **Replay** or build login sequences in **Automate** to maintain session state across requests.

#### Resources

- [Replay](/app/quickstart/replay.md)
- [Automate](/app/quickstart/automate.md)
- [Refresh Authentication Tutorial](/app/tutorials/refresh_authentication.md)

### Save custom configuration

Export specific Burp settings as shareable configuration files.

Caido does not export unified configuration files like Burp. Share **Workflows** and plugin configurations through files or version control instead.

#### Resources

- [Workflows](/app/quickstart/workflows.md)
- [Creating Workflows](/app/guides/workflows_creating.md)

## Not Available

### Configuration library

Save and reuse Burp configuration profiles across projects.

Caido has no configuration library for sharing profiles across projects. Scope, filter, and workflow settings persist within each **Workspace**, and plugin settings are managed per plugin.

#### Resources

- [Workspace](/app/quickstart/workspace.md)
- [Managing Plugins](/app/guides/plugins_managing.md)
