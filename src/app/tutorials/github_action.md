---
description: "Learn how to orchestrate Caido in GitHub Actions for CI/CD"
---

# Using Caido in GitHub Actions

This tutorial will guide you through setting up and using Caido in a GitHub Actions CI/CD pipeline. You'll learn how to:

- Set up a headless Caido instance in GitHub Actions
- Configure secrets for secure authentication
- Create scripts to interact with your Caido instance

<ProContainer>
This tutorial requires a Caido Teams plan for registration key support.
</ProContainer>

## 1. Creating a Registration Key

To safely deploy Caido instances in automated environments without human intervention, you'll need to use a [Registration Key](/dashboard/concepts/registration_key). Registration keys automatically claim new instances, ensuring they're secure even when deployed in CI/CD pipelines.

### Creating a Registration Key

First, create a registration key in the [Caido Dashboard](https://dashboard.caido.io):

1. Navigate to your `Team` workspace
2. Go to the Registration Keys section
3. Click `Create Key`
4. Configure the key:
   - **Description**: `CI/CD Pipeline`
   - **Prefix**: `cicd` (or your preferred prefix)
   - **Expiration**: Set an expiration date appropriate for your use case
   - **Reusable**: Yes (recommended for CI/CD)

For detailed instructions, see our guide on [creating a registration key](/dashboard/guides/create_registration_key).

## 2. Creating a Personal Access Token (PAT)

To authenticate your scripts with the Caido instance, you'll need a [Personal Access Token (PAT)](/dashboard/concepts/pat). PATs allow headless authentication without requiring browser interaction.

### Creating a PAT

1. Visit the [Caido Dashboard](https://dashboard.caido.io)
2. Navigate to the Developer page **in your Workspace**
3. Click `+ Create Token`
4. Configure the token:
   - **Name**: `CI/CD Automation`
   - **Resource Owner**: Select your `Team`
   - **Expiration**: Set an expiration date

For detailed instructions, see our guide on [creating a PAT](/dashboard/guides/create_pat).

## 3. Configuring GitHub Secrets

To securely store your registration key and PAT, you'll need to add them as GitHub repository secrets. This ensures they're encrypted and only accessible to your GitHub Actions workflows.

### Adding Secrets to Your Repository

1. Navigate to your GitHub repository
2. Go to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

   - **Name**: `CAIDO_REGISTRATION_KEY`
     - **Value**: Your registration key (e.g., `ckey_xxxxx`)

   - **Name**: `CAIDO_PAT`
     - **Value**: Your Personal Access Token (e.g., `caido_xxxxx`)

<img alt="GitHub Actions repository secrets configuration." src="/_images/github_action_secrets.png" width=800px center>

::: warning
Never commit secrets directly in your code or workflow files. Always use GitHub Secrets for sensitive information.
:::

## 4. Creating the Automation Script

Now we'll create a script that uses the `@caido/sdk-client` to interact with your Caido instance. This script will demonstrate common CI/CD use cases like creating projects, running scans, and checking results.

### Setting Up the Project

First, create a directory for your automation scripts and initialize it:

```bash
mkdir script
cd script
pnpm init
```

Install the Caido SDK client:

```bash
pnpm install @caido/sdk-client
```

### The Automation Script

Create a file named `index.ts`:

```typescript
import { Client } from "@caido/sdk-client";

async function main() {
  // Get the Caido instance URL from environment or use default
  const instanceUrl =
    process.env["CAIDO_INSTANCE_URL"] ?? "http://localhost:8080";

  // Get the Personal Access Token from environment
  const pat = process.env["CAIDO_PAT"];
  if (pat === undefined || pat === "") {
    console.error("❌ Error: CAIDO_PAT environment variable is required");
    console.error("   Set it with: export CAIDO_PAT=caido_xxxxx");
    process.exit(1);
  }

  const client = new Client({
    url: instanceUrl,
    auth: {
      pat: pat,
      cache: {
        file: ".secrets.json",
      },
    },
  });

  await client.connect();
  console.log("✅ Connected to Caido instance");

  const viewer = await client.user.viewer();
  console.log("Viewer: ", JSON.stringify(viewer, null, 2));
}

main().catch((error: unknown) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
```

### Adding Scripts to package.json

Add the following to your `package.json`:

```json
{
  "scripts": {
    "test": "node index.ts"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.3.0"
  }
}
```

## 5. Creating the GitHub Actions Workflow

Now we'll create a GitHub Actions workflow that sets up Caido and runs your automation script.

### Workflow File

Create `.github/workflows/caido-tests.yml`:

```yaml
name: Run Caido Security Scan
on:
  push:
    branches:
      - 'main'

jobs:
  scan:
    runs-on: ubuntu-latest

    services:
      caido:
        image: caido/caido:latest
        ports:
          - 8080:8080
        env:
          CAIDO_REGISTRATION_KEY: ${{ secrets.CAIDO_REGISTRATION_KEY }}

    steps:
      - name: Checkout Repo
        uses: actions/checkout@v6

      - name: Set up Node
        uses: actions/setup-node@v6
        with:
          node-version: '24'

      - name: Install pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10

      - name: Install script dependencies
        working-directory: script
        run: pnpm install

      - name: Run script
        working-directory: script
        run: pnpm start
        env:
          CAIDO_PAT: ${{ secrets.CAIDO_PAT }}
          CAIDO_INSTANCE_URL: http://localhost:8080
```

## 6. Customizing for Your Use Case

You can extend this setup for various security testing scenarios:

### Create an OOB link

```typescript
// Execute a workflow
const pluginPackage = await client.plugin.pluginPackage("quickssrf");
if (pluginPackage === undefined) {
  console.error("❌ Error: Plugin package not found");
  process.exit(1);
}

const settings = await pluginPackage.callFunction<QuickSSRFSettings>({
  name: "getSettings",
});

await pluginPackage.callFunction({
  name: "startInteractsh",
  arguments: [
    {
      serverURL: settings.serverURL,
      token: settings.token,
      pollingInterval: settings.pollingInterval,
      correlationIdLength: settings.correlationIdLength,
      correlationIdNonceLength: settings.correlationIdNonceLength,
    },
  ],
});

const result = await pluginPackage.callFunction<GenerateUrlResult>({
  name: "generateInteractshUrl",
  arguments: [settings.serverURL],
});
```

### Running Scans

::: info
Will be added soon
:::

## Next Steps

For a complete working example, check out the [caido-community/cicd-example](https://github.com/caido-community/cicd-example) repository.
