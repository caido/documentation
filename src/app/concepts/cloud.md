---
description: "Understand the core concepts behind Caido Cloud services including billing, access control, API transparency, data collection, and security measures."
---

# Caido Cloud

Caido Cloud is comprised of your account dashboard (_accessible at [https://dashboard.caido.io](https://dashboard.caido.io)_) and an API that handles [instance](/app/concepts/instances.md) registration and authentication.

::: info
For transparency, the OpenAPI specification of the cloud API can be viewed at [https://github.com/caido/caido/blob/main/api/cloud_instance.yaml](https://github.com/caido/caido/blob/main/api/cloud_instance.yaml).
:::

## Data Collection

::: warning NOTE
We are aware that tying Caido to a cloud may be controversial to some. However, **we do not collect any data stored on your instances.** View our [privacy policy](https://caido.io/privacy) for more information.
:::

The data collected upon account registration (_name, email address, and user-agent information_) allows for:

- Billing on a per-user basis rather than per-license, so Caido can be installed on multiple devices.
- Access control to facilitate collaboration on instances belonging to the same account workspace.
- Complementary services such as the [Assistant](/quickstart/assistant.md) and sharing capabilities (_planned for a future release_).

::: info
Accounts can **always** be deleted upon request by contacting us at `security[at]caido.io`.
:::

The data collected as you use Caido (_IP address and API call actions/timestamps_) facilitates instance registration to your account and authenticated sessions. The associated API calls mainly relate to:

- `/instance/alive`: Instance startup and active status is tracked once per 24H.
- `/instance/user/session` / `/instance/user/profile`: Instance interaction is tracked upon first interaction and once per hour.
- `/instance/assistant/complete`: Assistant token usage is tracked (_message content data is **not** collected_).

## Location & Security

- Our cloud services are currently hosted on [Render](https://render.com) in their Oregon (_US_) region. Refer to Render's [Security and Trust](https://trust.render.com/) page for more information.
- The Assistant uses [OpenAI](https://openai.com) services hosted in the US. Data sent to it can be stored for [up to 30 days](https://platform.openai.com/docs/models/how-we-use-your-data).
- The public facing portion of our API is protected by [Cloudflare](https://cloudflare.com).
- We perform daily backups that are stored encrypted for 30 days on [Google Cloud](https://cloud.google.com/) in the US.
- Our data in transit uses HTTPS with TLS 1.2 and data at rest uses AES-256.
- Our production environment can only be accessed by the founding team using [Tailscale](https://tailscale.com).

::: tip
To report a security issue, please contact us at `security[at]caido.io`.
:::
