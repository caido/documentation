# Invisible proxying

Invisible proxying a setting that you can enable/disable for your listeners.
To learn more about this operation mode of operation, see our [concept page](/concepts/proxying/invisible) on the subject.

:::warning
If you enable invisible proxying on a remote instance, you MUST make sure to use the **same address and port**.
This includes any SSH port forwarding you might use.
Otherwise, Caido will not be able to [split the traffic](/concepts/proxying/traffic_splitting) correctly and will NOT work.
:::

## Enabling for the CLI

By default, invisible proxying is disabled for the CLI, you can enable with by using the `--invisible` option.

```
caido --invisible
```

## Enabling for the Desktop Application

By default, invisible proxying is enabled for local instances. You can change that by going in the options.

1. Click on the `⋮` icon to the right of the Instance you want to apply a custom listening address to and select `Edit`.

<img alt="Connection manager instance more options." src="/_images/connection_manager_instance_more_options.png" center no-shadow width=800px/>

2. Expand the `Advanced` settings and toggle the `Enable invisible proxying`

<img alt="Connection manager invisible proxying" src="/_images/connection_manager_invisible_proxying.png" center width=600px/>
