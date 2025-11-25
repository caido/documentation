---
description: "A step-by-step guide to configuring domain allowlists in Caido CLI, Desktop application, and Docker to control API and interface access security."
---

# Domain Allowlist

For security, only defined domains can access the Caido API and interface.

For example, when utilizing a domain that resolves to `127.0.0.1` to [proxy local traffic](/guides/proxy_local.md), the domain must be added to the `Allowed Domains` list.

<img alt="Desktop Allowed Domains setting." src="/_images/unallowed_domain.png" center/>

## Caido CLI

To add a domain to the allowlist with the Caido CLI, launch Caido with the `--ui-domain <domain>` command-line option.

```bash
--ui-domain example.com
```

## Desktop Application

To add a domain to the allowlist within the Caido desktop application, in the launch window, **click** on the <code><Icon icon="fas fa-ellipsis-vertical" /></code> button attached to an instance and select `Edit`.

<img alt="The Edit instance option." src="/_images/launch_window_edit.png" center/>

Type a domain name in the `Enter domain (e.g., example.com)` input field and **click** on the `+` button.

<img alt="Adding a domain to the allowlist." src="/_images/launch_window_allowlist.png" center/>

Once you have defined the allowlist, **click** on the `Save` button to update and save the configuration.

## Docker

To add a domain to the allowlist when running the Caido Docker image, either:

- Override the default command with:

```bash
docker run caido/caido caido-cli --no-renderer-sandbox --no-open --listen 0.0.0.0:8080 --ui-domain=example.com
```

- Or override the Docker Compose:

```yaml
services:
  caido:
    image: caido/caido
    command: ["caido-cli", "--no-renderer-sandbox", "--no-open", "--listen", "0.0.0.0:8080", "--ui-domain", "example.com"]
```
