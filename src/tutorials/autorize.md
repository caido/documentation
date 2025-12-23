---
description: "Learn how to configure and use the Autorize plugin for automated authorization and access control vulnerability detection, including passive and active scanning with template-based checks."
---

# Autorize

[Autorize](https://github.com/caido-community/autorize) is Caido's official authorization/access control vulnerability testing plugin.

In this tutorial you will learn how to configure the plugin to conduct both passive and active scanning against a intentionally vulnerable application from Caido's Web Security Labs.

::: info
Autorize is available for [installation](/guides/plugins_installing.md) in the `Official` tab of the Plugin interface.
:::

<img alt="The Autorize plugin listed in the Official tab." src="/_images/autorize_install.png" center />

Autorize creates templates for proxied requests that are modified to simulate requests sent by users with three different permission levels. The three requests sent for each template are the:

1. `Baseline Request`: This request is the original, high-privilege user request.
2. `Mutated Request`: This request is modified to replace the baseline request with the credentials of a lower-privilege user.
3. `No-Auth Request`: This request is stripped of all authentication headers.

By comparing the corresponding responses of these requests to each other, Autorize is able to determine if low-privilege or unauthenticated users are able to access the same resources or functionality available to the high-privilege user.

## Autorize Lab Walkthrough

The Autorize Lab features registered accounts for two users: John and Bob.

By designating John as the low-privilege user and Bob as the high-privilege user, we will use Autorize passively test for authorization vulnerabilities against API endpoints that return sensitive account data based on the `user_id` query parameter:

- `/autorize.php?action=profile&user_id={id}`
- `/autorize.php?action=orders&user_id={id}`
- `/autorize.php?action=messages&user_id={id}`
- `/autorize.php?action=settings&user_id={id}`

1. With your proxy settings enabled, navigate to [https://labs.cai.do/autorize.php](https://labs.cai.do/autorize.php) in your browser and **click** on the `Get John's Token` button to authenticate as John.
2. Under the authenticated session, **clicking** on the `Get Profile`, `Get Orders`, `Get Messages`, and `Get Settings` buttons return John's sensitive data. Notice that the `user_id` assigned to John's account is `101`.

<img alt="John's account settings data." src="/_images/autorize_user_data.png" center />

### Mutations

The modifications to each request are referred to as "mutations" and are applied to configuration profiles that represent the three template requests:

- `Mutated`: The low-privilege user request.
- `No Auth`: The unauthenticated user request.
- `Baseline`: The original high-privilege user request.


The mutation that will apply John's low-privilege session token to the high-privilege baseline requests sent by Bob can be configured either manually or via a context-menu shortcut.

#### Manual Configuration

To set the mutation for the low-privilege `Mutated` profile manually:

1. Copy the value of John's session token from the `token` parameter in the response to the `/autorize.php?action=login` POST request or from the `Authorization` header of subsequent API calls.
2. Navigate to the `Configuration` tab of the Autorize plugin interface, **click** on the `Mutations` tab, and select `Mutated` from the drop-down menu.

3. Next, select the `Header: Set` option from the `Add Mutation` drop-down menu, type in `Authorization` in the `Header name` input field, paste the token value into the `Value` input field, and **click** on the `+` button to update and save the configuration.

<img alt="The Header: Set mutation." src="/_images/autorize_mutation.png" center />

---

#### Context-Menu Shortcut

To quickly add a `Header: Set` mutation to the `Mutated` profile:

1. **Click**, **drag**, and **hold** over a header name and value within a low-privilege user request pane.
2. Then, **right-click** on the highlighted selection to open the context menu, hover your mouse cursor over `Plugins` and `Autorize`, and select <code><Icon icon="fas fa-key" /> Send Headers to Autorize</code>.

<img alt="The Send Headers to Autorize option." src="/_images/autorize_send_headers.png" center />

::: info
By default, Autorize automatically removes common authentication headers like `Authorization` and `Cookie` from the `No Auth` profile. However, mutations can still be configured to account for application-specific implementations.
:::

::: warning NOTE
Baseline mutations will apply to all three template requests.
:::

### Scanning

With the mutation set, testing can be conducted either passively against requests as they pass through Caido or actively against specific requests.

#### Passive Scanning

1. To enable passive scanning **click** on the `Enable Passive Scanning` radio button in the top-right corner of the plugin interface.

<img alt="The Enable Passive Scanning radio button." src="/_images/autorize_passive_scanning.png" center />

2. Now, return to the lab interface and **click** on the `Get Bob's Token` button to authenticate as Bob and make requests to the API endpoints that return sensitive data.

<img alt="Bob's account settings data." src="/_images/autorize_user_data_baseline.png" center />

---

#### Active Scanning

To execute a scan manually against a specific request **right-click** within a request pane or on a traffic table row, hover your mouse cursor over `Plugins` and `Autorize`, and select <code><Icon icon="fas fa-key" /> Send Request to Autorize</code>.

<img alt="The Send Request to Autorize option." src="/_images/autorize_send_request.png" center />

### Viewing Results

To view the results of template scans, **click** on the `Dashboard` tab of the Autorize plugin interface.

<img alt="The Autorize Dashboard tab interface." src="/_images/autorize_dashboard.png" center />

By default, the result of a template scan will be assigned one of three access states that will indicate whether the request succeeded or failed:

- `ALLOW`: The server accepted the request and returned a successful response. This might indicate an authorization vulnerability if a low-privilege user was able to access protected resources.
- `DENY`: The server denied the request, usually with status codes like 401, 403, or 404. This means access controls are working as expected.
- `UNCERTAIN`: Autorize could not determine if the request was allowed or denied. This happens when the response is different from the baseline but does not show clear denial indicators. You should manually review these cases.

To switch between HTTP request and response data for each profile, **click** on their associated buttons.

<img alt="Selecting the request and response for each profile." src="/_images/autorize_profile_views.png" center />

The original requests made with Bob's session can be viewed by selecting `baseline` from the request pane.

<img alt="Bob's original baseline request." src="/_images/autorize_baseline.png" center />

Select `mutated` to view the mutation that overwrote Bob's session token with John's.

<img alt="The mutated request." src="/_images/autorize_mutated.png" center />

Notice that John is able to access Bob's data in requests to the `orders`, `messages`, and `settings` endpoints.

Even unauthenticated users are able to access the sensitive information of other users in requests to the `settings` endpoint.

<img alt="The no-auth request." src="/_images/autorize_no_auth.png" center />

The only endpoint with proper access control to prevent unauthenticated or unauthorized users from viewing Bob's data is the `profile` endpoint.

<img alt="The mutated and no-auth request denial." src="/_images/autorize_deny_deny.png" center />

## Additional Configuration Options

Within the `Configuration` tab of the Autorize plugin interface, additional template settings are divided across several tabs.

### Filtering

The `Filtering` tab options apply [scope presets](/guides/scopes_defining.md), [filter presets](/guides/filters_defining.md), or [HTTPQL](/reference/httpql.md) query statements to passive scans.

::: info
By default, Autorize automatically excludes requests for common static files (images, CSS, JS) and analytic endpoints.
:::

### Detection

By default, Autorize uses smart logic to determine if a request was authorized or denied. However, for unique response patterns, custom HTTPQL query statements can be defined in the `Authorized Response Detection` and `Unauthorized Response Detection` input fields within the `Detection` tab.

::: warning NOTE
- If both queries match, the unauthorized query takes precedence.
- If neither query matches, the default detection logic will be used.
- This is optional. If not configured, the default detection logic will be used.
:::

### Queue

The `Queue` tab provides options to specify concurrency, rate limit, and timeout settings for the request templates generated by the plugin.

### General

The `General` tab provides the option to include/exclude the `No Auth` request from template tests and an option to enable/disable detailed logging.

### UI

The `UI` tab provides options to customize the results table within the `Dashboard` tab.

<img alt="The Autorize UI options." src="/_images/autorize_ui.png" center />
