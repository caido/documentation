---
description: "Find detailed reference information on Caido CLI command-line options and flags for advanced configuration and troubleshooting."
---

# CLI Options

To view the options available to the Caido CLI, use `-h` or `--help`.

``` txt
Options:
  -l, --listen <ADDR:PORT>                         Listening address
      --invisible                                  Enable invisible mode for all listeners
      --proxy-listen <ADDR:PORT>                   Proxy listening addresses
      --ui-listen <ADDR:PORT>                      UI listening addresses
      --ui-domain <UI_DOMAIN>                      Allowed domains for UI
      --no-open                                    Do not open the UI a browser tab
      --debug                                      Record and display debug logs
      --reset-cache                                Reset the instance cache of cloud data
      --reset-credentials                          Reset the instance credentials (DANGEROUS)
      --data-path <DATA_PATH>                      Directory to store data
      --no-logging                                 Disable file logging
      --no-renderer-sandbox                        Disable sandboxing for the renderer
      --import-ca-cert <IMPORT_CA_CERT>            Import CA certificate
      --import-ca-cert-pass <IMPORT_CA_CERT_PASS>  Import CA certificate password
      --allow-guests                               Allow login as guest
  -h, --help                                       Print help (see more with '--help')
  -V, --version                                    Print version
```
