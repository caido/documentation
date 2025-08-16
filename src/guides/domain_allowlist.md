# Domain Allowlist

For security, only defined domains can access the Caido API and interface.

<img alt="Desktop Allowed Domains setting." src="/_images/unallowed_domain.png" center/>

For example, when utilizing a domain that resolves to `127.0.0.1` for [proxying local traffic](/guides/proxy_local.md), the domain must be added to the `Allowed Domains` list.

## Desktop Application

In the Caido desktop application, this list can be found within your instance settings.

<img alt="Desktop Allowed Domains setting." src="/_images/instance_settings_allowed_domains.png" center/>

## CLI

When using the Caido CLI, to add a domain to the allowlist, use `--ui-domain=` to specify the addition:

```
--ui-domain=example.com
```

## Docker

To add a domain to the allowlist when running the Caido Docker image, you need to override the default command with:

```
docker run caido/caido caido-cli --no-renderer-sandbox --no-open --listen 0.0.0.0:8080 --ui-domain=example.com
```

Or you can override the Docker Compose:

```
services:
  caido:
    image: caido/caido
    command: ["caido-cli", "--no-renderer-sandbox", "--no-open", "--listen", "0.0.0.0:8080", "--ui-domain", "example.com"]
```
