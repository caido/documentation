# Developer policy

Last Update: 02/09/2024

The goal of Caido plugins is to make it easy for users to safely modify and expand the capabilities of Caido.

All plugin packages added to the Caido store must respect the following policy. Every plugin package is individually vetted before being included in the store. Plugin packages that don't follow these policies will be removed from the store.

This policy only apply to plugin listed in the Caido store. We may update this policy at any point in the future without notification.
This policy does not apply to plugin packages installed outside of the Caido store, but it is nonetheless good practice to follow.

::: warning
Plugin Packages are community driven by Caido users. Since development and distribution are done in this 3rd-party sense - Caido makes no warranty on the safety, functionality or quality of any plugin installed.
:::

## Policy

This policy complements our [Terms & Conditions](https://caido.io/terms). In case of conflict between this policy and our `Terms & Conditions`, the `Terms & Conditions` prevail.

### Not allowed

Plugin packages must not:

- Obfuscate code to hide its purpose.
- Contain malware or any code that could be considered as such.
- Contain illegal or objectionable material (as determined by us).
- Insert static or dynamic ads.
- Include client-side telemetry.
- Include a mechanism that updates the plugin.
- Load assets from the internet (except if disclosed in README).

### Disclosures

The following are only allowed if clearly indicated in your README:

- Payment is required for full access.
- An account is required for full access.
- External services. Clearly explain which are used and why they are required.
- Server-side telemetry. Link to a privacy policy that explains how the data is handled must be included.
- Closed source code. Please contact us to include closed source plugin packages.

### Copyright and licensing

All community plugins and themes must follow these requirements:

- Include a `LICENSE` file and clearly indicate the license of your plugin or theme.
- Comply with the original licenses of any code your plugin or theme makes use of, including attribution in the README if required.
- Respect Caido Copyright. Don't use Caido Copyright in a way that could confuse users into thinking your plugin package is a first-party creation.

## Reporting violations

If you encounter a plugin package that violates the policy, please let the developer know by opening a GitHub issue on their repository.

If the developer doesn’t respond after 7 days, [contact the Caido team](mailto:info@caido.io). For serious violations, please contact us immediately!

## Removing plugin packages

In case of a policy violation, we may attempt to contact the developer and provide a reasonable timeframe for them to resolve the problem.

If the problem is not resolved by the agreed date, we will remove the plugin package from the store.

We may immediately remove a plugin package if:

- The plugin package appears to be malicious.
- The developer is uncooperative.
- This is a repeated violation.
- It is unmaintained or severely broken.
- Any other reason that we judge reasonable to protect Caido Labs Inc. and Caido users
