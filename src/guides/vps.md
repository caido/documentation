---
description: "A step-by-step guide to running Caido on a virtual private server (VPS) including SSH port forwarding and AWS SSM configuration for remote access."
---

# Running on a VPS

Caido is designed to be a flexible web application security testing tool, and one of its key features is the ability for users to host it anywhere, such as on a virtual private server (VPS).

::: info
By default, Caido listens on the IP address 127.0.0.1 and port 8080. This is the recommended configuration as there is currently no native proxy access control. Listening on 127.0.0.1 limits access to the local device only.
:::

## Hosting Caido on a Linux-Based VPS:

To access a remote Caido instance, establish an SSH connection between your local device and VPS, and forward traffic bound to the local port to the listening address/port of the remote instance.

```bash
ssh -L <local-port>:127.0.0.1:8080 <username>@<vps-ip>
```

Once the connection is established, you can access the Caido user-interface by navigating to `http://127.0.0.1:<local-port>` in your web browser.

::: tip
If you're using AWS and have [SSM](https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-agent.html) configured, you can use port forwarding instead of SSH:

```bash
aws ssm start-session \
--target <instance-id> \
--document-name AWS-StartPortForwardingSession \
--parameters '{"portNumber":["8080"],"localPortNumber":["<local port>"]}'
```

Example for forwarding local port `9000`:

```bash
aws ssm start-session \
--target <instance-id> \
--document-name AWS-StartPortForwardingSession \
--parameters '{"portNumber":["8080"],"localPortNumber":["9000"]}'
```

:::
