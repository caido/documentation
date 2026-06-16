---
description: "A guide to the configuration file for Caido."
---

# Configuration File

As an alternative to including [command-line options](/app/reference/cli.md) directly, you can launch Caido with the `--config` command-line option to specify a configuration file.

```bash
caido-cli --config /path/to/caido.yaml
```

::: info
[View the configuration file schema.](https://raw.githubusercontent.com/caido/schemas/main/.schemastore/proxy/config.schema.json)
:::

::: tip TIPS
- To obtain the Caido CA certificate in the required P12 format, export it from the [CA Certificate Management](/app/guides/ca_certificate_managing.html#ca-certificate-management) options.

- Installation of the [YAML VSCode extension](https://marketplace.cursorapi.com/items/?itemName=redhat.vscode-yaml) and naming the configuration file as `caido.yaml` provides auto-completion and validation of the configuration file.

- The development of options is ongoing. To request an option property, [submit a templated issue.](https://github.com/caido/caido/issues/new?template=feature.md&title=New%20Configuration%20File%20Option)
:::

## Example

```yaml
# The target Caido version for the configuration file.
version: "0.57.0"

# Configuration (Required)
config:
  # Directory to store data
  data_path: "/alternate/data/location"

  # Cloud configuration
  cloud:
    # This is used to automatically register the instance in a workspace.
    registration_key: null
    # Enable sync with sync server
    sync: false
    # Reset the instance cache of cloud data
    reset_cache: false
    # Reset the instance credentials (DANGEROUS)
    reset_credentials: false

  # Security configuration
  security:
    # Allowed domains for UI
    allow_domains: []
    # Allow login as guest
    allow_guests: false
    # Enable sandboxing for the renderer
    render_sandbox: false

  # Networking configuration
  networking:
    # Enable invisible mode for all listeners
    invisible: false
    # CA certificate configuration
    ca:
      # CA certificate path (Required if ca is provided)
      path: "/path/to/certificate.p12"
      # CA certificate password
      password: null
    # Listeners configuration
    listeners:
      - # Listener address (Required)
        address: "127.0.0.1:8080"
        # Listener usage: Allowed values are 'ui', 'proxy', or 'both'
        usage: "both"

  # Project configuration
  project:
    # Project name (Required if project is provided)
    name: "Default_Assessment_Project"
    # Project scopes
    scopes:
      - # Import direct scope (Required fields: name, allowlist, denylist)
        name: "Example Scope"
        allowlist:
          - "*.example.com"
        denylist:
          - "admin.example.com"

  # Plugins configuration
  plugins:
    # Can install via 'store' identifier OR via local 'path'
    - store: "scanner"
    - path: "/path/to/plugin_package.zip"

  # Logging configuration
  logging:
    # Record and display debug logs
    debug: true
    # Enable file logging
    file: true

  # Runtime configuration
  runtime:
    # Enable safe mode
    safe: false
    # Parent PID (Must be a positive integer)
    parent_pid: null
    # Open browser automatically on startup
    open_browser: true

  # Strict mode
  # When enabled, the instance will refuse to start if part of the configuration cannot be
  # used. For example, if a requested plugin cannot be installed.
  strict: false
```
