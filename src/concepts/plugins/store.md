# Store

If you want to share your plugin package with the Caido community, the best way is to submit it to the official list of plugin packages. Once we've reviewed and published your plugin package, users will be able to install it directly from within Caido.

You only need to submit your plugin packge once. Once it has been accept, users will be able to download new releases from GitHub directly.

## Prerequisites

- A [GitHub](https://github.com/signup) account.

## Step 1: Preparation

At the root of your repository please ensure that you have:

- Have a `manifest.json` file that follows the standard Caido manifest format.
- Have a `LICENSE` file to describe the licensing of your plugin package.
- Have a `README.md` file to describe the goal and usage of your plugin packge.

## Step 2: Publish to Github

::: info
If you created your plugin package from one of our starter kit repositories, you may skip this step.
:::

All Caido plugin packages must have their source code on GitHub. If you're unfamiliar with GitHub, refer to the GitHub docs for how to [Create a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

## Step 3: Generate a key-pair

All plugin packages **must** releases be signed to be installable in Caido.
We use public-key signature using `ed25519` keys for that purpose. [Learn more](https://cendyne.dev/posts/2022-03-06-ed25519-signatures.html).

### 1. Generate the private key: `openssl genpkey -algorithm ed25519 -out private.pem`.

The file `private.pem` will contain the following format:

```
-----BEGIN PRIVATE KEY-----
<SOME BASE64 DATA ON ONE LINE>
-----END PRIVATE KEY-----
```

::: warning
**Keep this key very private!** Ideally, you should encrypt it or store it in [Github Action Secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).
:::

### 2. Generate the public key: `openssl pkey -in private.pem -pubout --out public.pem`

The file `public.pem` will contain the following format:

```
-----BEGIN PUBLIC KEY-----
<SOME BASE64 DATA ON ONE LINE>
-----END PUBLIC KEY-----
```

::: info
This is safe to share with other people, in fact it will be used later in the store.
:::

## Step 4: Create a release

There are two ways to create a release, either manually or using the Github Workflow from our [starterkit](https://github.com/caido/starterkit-plugin).

### Manually

1. In `manifest.json`, update the `version` field to a new version that follows the [Semantic Versioning](https://semver.org/) specification, for example `0.1.0` for your initial release. **Only use numbers and dots**.
1. Build the plugin package zip archive. If you use the starterkit, this will be `pnpm build` and it will create `dist/plugin_package.zip`.
1. Generate the signature: `openssl pkeyutl -sign -inkey private.pem -out dist/plugin_package.zip.sig -rawin -in dist/plugin_package.zip`
1. [Create a GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release). The `Tag version` of the release must match the version in your `manifest.json`, it **must not** include a `v` prefix.
1. Enter a name for the release, and describe it in the description field. Caido doesn't use the release name for anything, but we recommend also using the version for simplicity.
1. Upload the following assets to the release as binary attachments:
   - `plugin_package.zip`
   - `plugin_package.zip.sig`

### Github Workflow

If you want to simplify your life, we have created a [Github Workflow](https://github.com/caido/starterkit-plugin/blob/main/.github/workflows/release.yml) to automate all the steps from above.

1. Add your private key in a [Github Action Secret](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions) called `PRIVATE_KEY`.
1. In `manifest.json`, update the `version` field to a new version that follows the [Semantic Versioning](https://semver.org/) specification, for example `0.1.0` for your initial release. **Only use numbers and dots**.
1. In `Actions`, trigger the `Release` workflow.

<img width="800" alt="Store release Github Workflow" src="/_images/store_release.png" center/>

## Step 5: Submit your plugin for review

In this step, we will submit your plugin to the Caido [store](https://github.com/caido/store) for review.

1. In [plugin_packages.json](https://github.com/caido/store/edit/main/plugin_packages.json), add a new entry at the end of the JSON array.

   ```json
   {
     "id": "my-unique-plugin",
     "name": "My Unique Plugin",
     "license": "CC0-1.0",
     "description": "This my super cool new Caido plugin",
     "author": {
       "name": "John Doe",
       "email": "john@example.com",
       "url": "https://example.com"
     },
     "public_key": "MCowBQYDK2VwAyEA0zDx1tIO7S/d+AYFjLLmTA6pvuEyf+70KfcgVi1DNhc=",
     "repository": "john/my-unique-plugin"
   }
   ```

   A few things to be aware of:

   - `id`,`name`, `author`, `license`, and `description` determine how your plugin appear to the user in Caido.
   - `id` is unique to your plugin. Search `plugin_packages.json` to confirm that there's no existing plugin with the same id.
   - `public_key` is the base64 part of the public key generated in [Step 3](#step-3-generate-a-key-pair). **Don't** include the header/footer (`BEGIN/END PUBLIC KEY`).
   - `repository` is the path to your GitHub repository. For example, if your GitHub repo is <https://github.com/username/repo-name>, the path is `username/repo-name`.

   ::: warning
   Remember to add a comma after the closing brace (`}`) of the previous entry otherwise the json will not be valid!
   :::

1. Select `Commit changes...` in the upper-right corner.
1. Select `Propose changes`.
1. In the name of the pull request, enter `Add <YOUR PLUGIN PACKAGE NAME>`
1. Fill in the details in the description for the pull request. For the checkboxes, insert an x between the brackets, [x], to mark them as done.
1. Click `Create pull request`.

You've now submitted your plugin package to the Caido store. Our bot will verify that that format is correct and you will have to sign the [Contributor License Agreement](https://cla-assistant.io/caido/store).
Once your submission is ready for review, you can sit back and wait for the Caido team to review it.

## Step 6: Address review comments

Once a Caido team member has reviewed your plugin, they will add a comment to your pull request with the result of the review. The reviewer may ask that you update your plugin, or they can offer suggestions on how you can improve it.

Address any required changes and update the GitHub release with the new changes. Leave a comment on the PR to let us know you've addressed the feedback.

We will publish the plugin as soon we have verified that all required changes have been addressed.

## Next steps

Once your plugin is published, it is time to announce it to the community ✨

- Announce it in the Plugin `#discussion` channel on [Discord](https://links.caido.io/www-discord).
