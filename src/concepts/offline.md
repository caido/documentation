# Using Caido Offline

Caido can also be used offline to conduct security testing in internet-restricted environments, including internal networks, isolated systems, and when performing onsite penetration tests.

However, since authentication requires communication with our cloud platform, in order to utilize an instance and subscription features, internet connectivity is required:

- On initial launch.
- For certain updates.
- To authenticate from a new location/device.

<img alt="Authenticate user flow." src="/_images/authentication_user.png" no-shadow/>

Once authenticated, Caido will operate in offline mode for 7 days. After this period, internet connectivity will be required again to obtain access tokens.

::: warning NOTE
If internet access is completely unavailable, Caido can still be used in [guest mode](/guides/guest_mode.md)
:::
