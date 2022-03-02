# Configuration

Caido configuration is split in part per project and globally.
Currently there is no UI to modify the global configuration.
However, some parameters can be overriden with startup flags.

## Changing the default address and port

By default, Caido will try to bind `127.0.0.1:8080`.
You can change that with one of the following methods:

1. Specify the `--listen` flag at runtime
2. Modify the default in the [configuration file](./configuration.md#configuration-file-location)

It is totally possible to bind the address `0.0.0.0`, though we do recommend doing so if you expose Caido to the internet.

## Configuration file location

The configuration file is located inside the [Caido storage folder](./introduction.md#caido-storage-folder) at `config/api.yml`.
It is subject to change, but it currently contains the following elements:

```yaml
---
onboarding: # Steps of the onboarding process
  license: true
  project: true
  ca_certificate: true
api_addr: "127.0.0.1:8080" # The default address and port to bind
```
