# Cloud

Caido Cloud is comprised of the [Dashboard](https://dashboard.caido.io) and the API that the Instances use to communicate with us.

## Why?

We are aware that tying our product to a cloud is controversial. We developed our own cloud platform for a couple of reasons:

- **Billing**: We don't bill per license, we bill per user and we want to allow you to install Caido on as many machines as you want. It is not possible to do so without a concept of account (notably to prevent abuse).
- **Access Control**: We want to allow multiple users to share Instances securely without having to re-create a new account on each one, this requires a central service to set permissions. You can learn more about the process in the [Authentication](./authentication.md) page.
- **Complementary Services**: We want to offer complementary cloud services like the [Assistant](/reference/features/testing/assistant.md) and sharing capabilities (in the future).

## API

In an effort of transparency, we are publishing the OpenAPI specification of the cloud API used by Caido Instances. It is automatically updated when we deploy changes to our production environment.

[Go to Specification](https://github.com/caido/caido/blob/main/api/cloud_instance.yaml).

## Data Collection

When you register for Caido, we collect your name and email address, as well as information about your user agent. You can **always** request for us to delete your account by sending us an email at `info [at] caido.io`.

When you use Caido, we collect interaction data between your Instances and our cloud services. This includes the **IP address** of the Instance and **API call actions/timestamps**. If you look at the OpenAPI specification, this mainly relates to:

- `/instance/alive`: We track Instance startup and alive status once per 24H.
- `/instance/user/session`: We track when a user interact for the first time with an Instance and once every hour.
- `/instance/user/profile`: We track when a user interact for the first time with an Instance and once every hour.
- `/instance/assistant/complete`: We track assistant token usage, but **not** the messages sent to us.

::: info
We do not collect any data stored on your Instances nor interactions within the Caido application.
:::

[Privacy Policy](https://caido.io/privacy)

## Location & Security

- Our Cloud services are currently hosted on [Render](https://render.com) in their Oregon (USA) region. Refer to their [trust](https://trust.render.com/) page for more information.
- The assistant uses the [OpenAI](https://openai.com) services hosted in the US. Data sent to it can be stored for [up to 30 days](https://platform.openai.com/docs/models/how-we-use-your-data).
- The public facing part of our API is protected by [Cloudflare](https://cloudflare.com).
- We perform daily backups that are stored encrypted for 30 days on [Google Cloud](https://cloud.google.com/) in the US.
- Our data in transit uses HTTPS with TLS 1.2 and data at rest uses AES-256.
- Our production environment can only be accessed by the founding team using [Tailscale](https://tailscale.com).

::: tip
If you wish to report a security issue, please contact us at `security [at] caido.io`.
:::
