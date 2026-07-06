---
description: "Map Burp Suite Pro project files and configuration to Caido."
---

# Project & Configuration

Burp Suite Pro project files, session handling, and configuration features and their Caido equivalents.

## Available

### Project Files

Burp saves and restores project state including traffic, site map, and configuration.

Caido offers native **Workspaces** to manage projects and persist traffic, scope, and configuration within an instance. Caido also exports traffic separately through **Exports** when you need portable data outside the workspace.

#### Resources

- [Workspace](/app/quickstart/workspace.md)
- [Exports](/app/quickstart/exports.md)
- [Recovering Projects](/app/guides/projects_recovering.md)
- [Project Backups](/app/guides/projects_backups.md)

## Indirectly Available

### Session Handling Rules

Burp automatically modifies requests based on session state using macros and rules.

Caido has no native session handling rule engine like Burp. Caido supports session and identity switching through **Environment Variables** (store tokens and credentials per context), **Workflows** (inject or refresh values on traffic), and **Match & Replace** rules (swap headers or cookies when rules are enabled). The **Authswap** community plugin adds quick switching between authentication contexts during manual testing. This covers many Burp session workflows but requires explicit setup rather than Burp's integrated macros and rules.

#### Resources

- [Environment Variables](/app/quickstart/environment.md)
- [Workflows](/app/quickstart/workflows.md)
- [Match & Replace](/app/quickstart/match_replace.md)
- [Refresh Authentication Tutorial](/app/tutorials/refresh_authentication.md)
- [Authswap](https://github.com/caido-community/authswap) (GitHub)

### Macros

Burp records sequences of requests and replays them to maintain session state.

Caido offers **Workflows** as the equivalent for defining sequences of actions—such as sending requests, transforming traffic, or chaining steps based on responses. You build workflows in the editor rather than recording a macro, but they cover the same multi-step automation use cases as Burp macros.

#### Resources

- [Workflows](/app/quickstart/workflows.md)
- [Creating Workflows](/app/guides/workflows_creating.md)
- [Refresh Authentication Tutorial](/app/tutorials/refresh_authentication.md)

### Configuration Library

Burp exports specific settings as shareable configuration files and saves configuration profiles for reuse across projects.

Caido has no unified configuration library like Burp. Instead, many feature pages offer their own export so you can save settings to disk, version-control them, and import them into new projects—workflows, filters, scopes, match-and-replace rules, and environment variables, each from its own interface. Some objects, such as **global workflows**, are available across all projects in an instance by default; switch a workflow to project-specific scope when you want it limited to one workspace.

#### Resources

- [Workflows](/app/quickstart/workflows.md)
- [Creating Workflows](/app/guides/workflows_creating.md)
- [Filters](/app/quickstart/filters.md)
- [Scopes](/app/quickstart/scopes.md)
- [Match & Replace](/app/quickstart/match_replace.md)
- [Environment Variables](/app/quickstart/environment.md)
- [Workspace](/app/quickstart/workspace.md)
