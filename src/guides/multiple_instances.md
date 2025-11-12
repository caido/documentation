---
description: "A step-by-step guide to running multiple Caido instances on the same device."
---

# Running Multiple Instances

To run multiple instances of Caido simultaneously, launch the Caido CLI with the `--listen <address:port>` and `--data-path <location>` arguments.

::: warning NOTE
Ensure any additional instances are using unique ports and data storage locations.
:::

<img alt="Launching an additional instance via the CLI." src="/_images/multiple_instances_cli.png" center/>

Then, [import the CA certificate](/guides/ca_certificate_importing.md) of the new instance, configure your proxy settings to account for the new listening address, and navigate to the listening address in your browser to access the additional user interface.

<img alt="Using the Caido desktop application and browser user interface." src="/_images/multiple_instances.png" center/>
