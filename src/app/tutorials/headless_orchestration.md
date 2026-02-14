---
description: "Learn how to orchestrate headless Caido instances and automate instance configuration via scripting"
---

# Orchestrating Caido Headless

The goal of this tutorial is to automate headless Caido instances through scripting to ensure they are safely registered and configured without human intervention. This allows many use cases like:

- **Red boxes**: Pre-configure isolated instances for triaging/pentest/etc
- **CI/CD testing**: Automatically set up instances to run particular tests on-demand
- **AI agent interfaces**: Provide human-in-the-loop interfaces to AI agents

## 1. Creating a Registration Key and Launching the Instance

<ProContainer>
This feature is available starting with Caido v0.55.3 for Teams.
</ProContainer>

To safely deploy Caido instances without human intervention, you'll need to use a [Registration Key](/dashboard/concepts/registration_key). Registration keys automatically claim new instances, ensuring they're secure even when deployed in automated environments.

If you are not on a Team plan, you will need to do this registration step manually.

### Creating a Registration Key

First, create a registration key in the [Caido Dashboard](https://dashboard.caido.io):

1. Navigate to your Team workspace
2. Go to the Registration Keys section
3. Click `Create Key`
4. Configure the key:
   - **Description**: `Headless Tutorial`
   - **Prefix**: `headless`
   - **Expiration**: Set an expiration date
   - **Reusable**: Yes

For detailed instructions, see our guide on [creating a registration key](/dashboard/guides/create_registration_key).

### Downloading the Caido CLI

To download the latest  [Caido CLI](/app/concepts/cli_vs_desktop) version automatically, you can use our [release API](/app/reference/download_links).

```bash
curl -s https://caido.download/releases/latest
```

You can filter with JQ for your specific platform (here `Linux x86_64`):

```bash
curl -s https://caido.download/releases/latest | jq -r '.links[] | select(.os=="linux" and .arch=="x86_64" and .kind=="cli") | .link'
```

::: info
The binary is always packaged in an archive (zip or tar.gz), make sure to unarchive it before the next step!
:::

### Launching the Instance with a Registration Key

Once you have a registration key and the binary, launch your Caido instance. You can pass the registration key in two ways:

**Option 1: Using the `--registration-key` flag:**

```bash
caido --registration-key ckey_xxxxx
```

**Option 2: Using the `CAIDO_REGISTRATION_KEY` environment variable:**

```bash
export CAIDO_REGISTRATION_KEY=ckey_xxxxx
caido
```

When the instance starts, it will automatically register itself and be automatically claimed by the Team. This ensures the instance is secure.

::: info
For more information about the registration process, see our documentation on [instance registration](/app/concepts/instance_registration).
:::

::: warning
If you want to expose the instance to the internet, make sure to read our [tutorial](./instance_internet.md) on the subject to do so securely.
:::

## 2. Creating a PAT and Setting Environment Variable

To authenticate your scripts with the Caido instance, you'll need a [Personal Access Token (PAT)](/dashboard/concepts/pat). PATs allow headless authentication without requiring browser interaction.

### Creating a PAT

1. Visit the [Caido Dashboard](https://dashboard.caido.io)
2. Navigate to the Developer page **in your Workspace**
3. Click `+ Create Token`
4. Configure the token:
   - **Name**: `Headless automation`
   - **Resource Owner**: Select your Team
   - **Expiration**: Set an expiration date

For detailed instructions, see our guide on [creating a PAT](/dashboard/guides/create_pat).

### Setting the Environment Variable

Once you have your PAT, set it as an environment variable:

```bash
export CAIDO_PAT=caido_xxxxx
```

You can also set the Caido instance URL (if different from the default):

```bash
export CAIDO_INSTANCE_URL=http://abc.remote.cai.do:9000
```

::: info
For more information about authentication, see our documentation on [instance authentication](/app/concepts/instance_authentication).
:::

## 3. Creating the Configuration Script

Now we'll create a script that uses the `@caido/sdk-client` to automatically configure your Caido instance. This script will:

1. Create and select a project
2. Create a scope preset
3. Create a filter preset
4. Create an environment with environment variables
5. Upload a hosted file (wordlist)

### Setting Up the Project

First, create a new directory for your script and initialize it:

```bash
mkdir caido-automation
cd caido-automation
pnpm init
```

Install the Caido SDK client:

```bash
pnpm install @caido/sdk-client
```

::: info
Not all versions of the sdk-client are compatible with the targeted Caido instances.
If you see errors, make sure to update your sdk-client version.
:::

### The Configuration Script

Create a file named `configure.ts`:

```typescript
import { Client } from "@caido/sdk-client";

async function main() {
  // Get the Caido instance URL from environment or use default
  const instanceUrl =
    process.env["CAIDO_INSTANCE_URL"] ?? "http://localhost:8082";

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
        file: ".secrets.json", // This caches the access token on disk to speed up other scripts, can be removed
      },
    },
  });

  await client.connect();
  console.log("✅ Connected to Caido instance");

  // Verify authentication
  const viewer = await client.user.viewer();
  console.log(
    `✅ Authenticated as: ${
      viewer.kind === "CloudUser" ? viewer.profile.identity.email : viewer.id
    }`,
  );

  // 1. Create and select a project
  console.log("\n📁 Creating project...");
  const project = await client.project.create({
    name: "Automated Pentest Environment",
    temporary: false,
  });
  console.log(`✅ Created project: ${project.name} (${project.id})`);

  await client.project.select(project.id);
  console.log(`✅ Selected project: ${project.name}`);

  // 2. Create a scope preset
  console.log("\n🎯 Creating scope preset...");
  const scope = await client.scope.create({
    name: "Main Scope",
    allowlist: ["*.example.com", "*.test.example.com"],
    denylist: ["*.admin.example.com"],
  });
  console.log(`✅ Created scope: ${scope.name} (${scope.id})`);
  console.log(`   In-scope: ${scope.allowlist.join(", ")}`);
  console.log(`   Out-of-scope: ${scope.denylist.join(", ")}`);

  // 3. Create a filter preset
  console.log("\n🔍 Creating filter preset...");
  const filter = await client.filter.create({
    name: "API Requests Only",
    alias: "api_only",
    clause: 'req.method.eq:"GET" or req.method.eq:"POST"',
  });
  console.log(`✅ Created filter preset: ${filter.name} (${filter.alias})`);

  // 4. Create an environment with environment variables
  console.log("\n🌍 Creating environment...");
  const environment = await client.environment.create({
    name: "Production Environment",
    variables: [
      {
        name: "API_BASE_URL",
        value: "https://api.example.com",
        kind: "PLAIN",
      },
      {
        name: "API_KEY",
        value: "secret-api-key-12345",
        kind: "SECRET",
      },
    ],
  });
  console.log(
    `✅ Created environment: ${environment.name} (${environment.id})`,
  );
  console.log(
    `   Variables: ${environment.variables.map((v) => v.name).join(", ")}`,
  );

  // Add more variables to the environment
  await environment.addVariable({
    name: "SESSION_TOKEN",
    value: "initial-token-value",
    kind: "PLAIN",
  });
  console.log(`✅ Added variable: SESSION_TOKEN`);

  // Select the environment
  await client.environment.select(environment.id);
  console.log(`✅ Selected environment: ${environment.name}`);

  // 5. Upload a hosted file (wordlist)
  console.log("\n📄 Uploading hosted file...");

  // Create a sample wordlist file
  // In Node.js 18+, File is available globally
  // For older versions, you can use: import { File } from "node-fetch" or similar
  const wordlistContent = `admin
administrator
api
backup
config
database
dev
login
password
test
user
`;

  // Create a File object from the content
  // Note: File API is available in Node.js 18+; for older versions, use a polyfill
  const wordlistFile = new File([wordlistContent], "common-wordlist.txt", {
    type: "text/plain",
  });

  // Alternatively, read from an existing file (uncomment readFileSync import above):
  // const fileBuffer = readFileSync("path/to/wordlist.txt");
  // const wordlistFile = new File([fileBuffer], "wordlist.txt", { type: "text/plain" });

  const hostedFile = await client.hostedFile.upload({
    name: "Common Wordlist",
    file: wordlistFile,
  });
  console.log(`✅ Uploaded hosted file: ${hostedFile.name} (${hostedFile.id})`);
  console.log(`   Size: ${hostedFile.size} bytes`);
  console.log(`   Status: ${hostedFile.status}`);

  console.log("\n✨ Configuration complete!");
  console.log(`\nProject ID: ${project.id}`);
  console.log(`Scope ID: ${scope.id}`);
  console.log(`Filter ID: ${filter.id}`);
  console.log(`Environment ID: ${environment.id}`);
  console.log(`Hosted File ID: ${hostedFile.id}`);
}

main().catch((error: unknown) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});
```

### Running the Script

Make sure your environment variables are set.

Add the following start command to your `package.json`:

```json
"scripts": {
  "start": "node configure.ts"
}
```

Then simply run:

```bash
pnpm start
```

::: info
Modern versions of Node.js can now run TypeScript directly. No compilation step is needed!

If you see some errors, make sure your Node.js version is up to date.
:::

### Script Breakdown

The script performs the following operations:

1. **Project Creation**: Creates a new project named "Automated Pentest Environment" and selects it as the active project. Projects are containers for all your testing data.

2. **Scope Preset Creation**: Creates a scope preset that defines which targets are in-scope and out-of-scope. For more details, see our guide on [defining a scope](/app/guides/scopes_defining).

3. **Filter Preset Creation**: Creates a filter preset using HTTPQL to filter traffic. For more information, see our guide on [defining a filter](/app/guides/filters_defining) and the [HTTPQL reference](/app/reference/httpql).

4. **Environment Creation**: Creates a custom environment with environment variables. Environment variables can be used in requests and workflows. The script creates both plain and secret variables. For more details, see our guide on [creating environment variables](/app/guides/environment_variables).

5. **Hosted File Upload**: Uploads a wordlist file that can be used in Automate sessions for systematic payload testing. For more information, see our guides on [uploading files](/app/guides/files_uploading) and [using wordlists in Automate](/app/guides/automate_wordlists).

## Next Steps

Your instance is now configured, you can start using it directly as an operator or via further scripting.

You can also check out our tutorial on [GitHub Actions](./github_action.md).
