---
description: "Map Burp Suite Pro project files and configuration to Caido."
---

# Project & Configuration

Burp Suite Pro project files, session handling, and configuration features and their Caido equivalents.

### Project files

Save and restore Burp state including traffic, site map, and configuration.

**Caido equivalent:** [Workspace](/app/quickstart/workspace.md) for project management. Export traffic with [Exports](/app/quickstart/exports.md).

### Session handling rules

Automatically modify requests based on session state using macros and rules.

**Caido equivalent:** No direct equivalent. Use [Environment Variables](/app/quickstart/environment.md) for token storage and [Workflows](/app/quickstart/workflows.md) to inject session values into requests.

### Macros

Recorded sequences of requests replayed to maintain session state.

**Caido equivalent:** No direct equivalent. Chain requests manually in [Replay](/app/quickstart/replay.md) or automate login sequences with [Automate](/app/quickstart/automate.md).

### Configuration library

Save and reuse Burp configuration profiles across projects.

**Caido equivalent:** No direct equivalent. Export plugin settings individually. Scope and filter configurations persist within each [Workspace](/app/quickstart/workspace.md).

### Save custom configuration

Export specific Burp settings as shareable configuration files.

**Caido equivalent:** No direct equivalent. Share [Workflows](/app/quickstart/workflows.md) and plugin configurations through files or version control.
