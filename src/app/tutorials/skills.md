---
description: "Learn how to use Caido Skills to integrate Caido with AI agents."
---

# Using Caido Skills

In this tutorial, you will learn how to use Caido Skills to integrate Caido with AI agents.

## Agent Skills

[Agent Skills](https://agentskills.io/home) is an open standard for extending the capabilities of AI agents.

At its most basic, a skill is a folder that contains a `SKILL.md` file. The file begins with a "frontmatter" header that provides basic information to a AI agent. The two required fields of a frontmatter header are the skill name and a brief description of what the skill does and when it should be used.

```yaml
---
name: my-skill
description: This skill does XYZ and should be used when a user prompt begins with "Run my-skill".
---
```

Once the frontmatter is written, the instructions of the skill can be defined in Markdown format in the rest of the file.

```markdown
---
name: my-skill
description: This skill does XYZ and should be used when a user prompt begins with "Run my-skill".
---

# My Skill

At a high-level this skill...

## Step-by-Step Instructions

1. Start with...
2. ...
3. ...

## Examples

An example use case of this skill is...
```

In addition to instructions defined in a `SKILL.md` file, a skill folder can also include categorical sub-folders for additional content to provide an agent with like scripts, references, and assets.

These can then be referenced in the `SKILL.md` file using relative paths from the skill folder root.

[View examples of skill folders.](https://github.com/anthropics/skills/tree/main/skills)

## Caido Skills

The official [Caido Skills](https://github.com/caido/skills) provides AI agents with the [Caido Client SDK](https://github.com/caido/sdk-js/tree/main/packages/sdk-client), giving agents the ability to connect, authenticate, and interact with an instance programmatically.

Caido Skills provides complete coverage of Caido's API, allowing you to instruct AI agents to carry out tasks that you would normally have to do manually such as send HTTP requests with Replay, fuzz payloads with Automate, search for proxied traffic, and more.

[View a complete list of capabilities.](https://github.com/caido/skills/tree/main/skills/caido-mode#whats-covered)

## Claude Code

::: warning NOTE
In this tutorial we will cover adding Caido Skills using the Claude Code CLI tool.

However, the skill package is available to other AI agents. A full list of available agents is available following the `Which agents do you want to install to?` prompt of the installation.
:::

Claude Code is an AI agent designed to work within a project to assist with development. Once Claude Code, is granted access to a project, it is able to read, edit, and execute its files - making it skill compatible.

[View the official documentation for instructions on how to install the Claude Code CLI tool.](https://code.claude.com/docs/en/overview#get-started)

## Configuration & Installation

To make the Caido Skills available to the Claude Code CLI tool:

1. Create a new project (_e.g. `my-project`_) to store the Caido Skills package.

```bash
mkdir my-project
```

2. Navigate to the project directory.

```bash
cd my-project
```

3. Add Caido Skills to the project.

```bash
pnpx skills add caido/skills --skill='*'
```

Or:

```bash
pnpm dlx skills add caido/skills --skill='*'
```

<img alt="Found skill." src="/_images/skills_found.png" center>

4. When prompted, use the down arrow key and spacebar to select `Claude Code` and press `ENTER` to add it as an additional agent.

<img alt="Adding an agent." src="/_images/skills_additional_agents.png" center>

5. Select either the `Project` or `Global` installation scope.

<img alt="Selecting the installation scope." src="/_images/skills_installation_scope.png" center>

6. Select the `Symlink` installation method.

<img alt="Selecting the installation method." src="/_images/skills_installation_method.png" center>

::: warning
Before proceeding with the installation, ensure to review and assess any messages displayed as Security Risk Assessments.
:::

7. To proceed with the installation, select `Yes` and press `ENTER`.

<img alt="Proceeding with the installation." src="/_images/skills_installation_proceed.png" center>

---

<img alt="Installation complete." src="/_images/skills_installation_complete.png" center>

8. Navigate to the `caido-mode` directory.

```bash
cd .agents/skills/caido-mode/
```

9. Install the dependencies.

```bash
npm install
```

<img alt="Installing the dependencies." src="/_images/skills_npm_install.png" center>

## Authentication

To authenticate to your Caido instance:

1. [Create a Personal Access Token (PAT)](https://docs.caido.io/dashboard/guides/create_pat.html).

::: info
Typically, authentication requires user interaction (_clicking `Login`, submitting account credentials, and granting your device authorization to access an instance_). With a PAT, authorization is granted immediately, and the PAT is exchanged for an access token and a refresh token.

A custom SecretsTokenCache (_implementing the SDK's TokenCache interface_) persists these tokens to `secrets.json` file in `~/.claude/config` so they survive across CLI invocations. 
:::

2. Execute the `setup` command and provide the PAT.

```bash
npx tsx caido-client.ts setup "<PAT>"
```

```txt
Connecting to http://localhost:8080...
[caido] Attempting to load cached token
[caido] Starting authentication flow
[caido] Authentication flow completed
[caido] Saving token to cache
Authenticated as: 01HWVM3E34S2G1BKHWB9ACEHK3

Saved to /Users/ninjeeter/.claude/config/secrets.json
URL: http://localhost:8080
PAT: caido_8yWtyz...
Access token: cached
```

3. To verify the authentication, execute the `auth-status` command.

```bash
npx tsx caido-client.ts auth-status
```

```txt
[caido] Attempting to load cached token
[caido] Loaded token from cache
{
  "authenticated": true,
  "user": {
    "kind": "CloudUser",
    "id": "01ABCD2E34F5G6HIJKL7MNOPQ8",
    "profile": {
      "identity": {
        "email": "user@example.com",
        "name": "User Name"
      },
      "subscription": {
        "plan": {
          "name": "Individual"
        },
        "entitlements": [
          {
            "name": "feature:assistant"
          },
          {
            "name": "feature:automate_workflows"
          },
          {
            "name": "feature:export_filtered_requests"
          },
          {
            "name": "feature:export_unlimited_findings"
          },
          {
            "name": "feature:project_backups"
          },
          {
            "name": "feature:replay_workflows"
          },
          {
            "name": "feature:search_bar"
          },
          {
            "name": "feature:unlimited_environments"
          },
          {
            "name": "feature:unlimited_filter_presets"
          },
          {
            "name": "feature:unlimited_plugins"
          },
          {
            "name": "feature:unlimited_projects"
          },
          {
            "name": "feature:unlimited_workflows"
          },
          {
            "name": "node:advanced"
          },
          {
            "name": "support:discord_role"
          }
        ]
      }
    }
  },
  "health": {
    "name": "caido",
    "version": "0.55.3",
    "ready": true
  },
  "url": "http://localhost:8080"
}
```

4. Navigate to the project directory.

```bash
cd ../../../
```

5. Launch the Claude Code CLI.

```bash
claude
```

6. Grant access to the project directory.

```txt
 Quick safety check: Is this a project you created or one you trust? (Like your own code, a well-known open source project, or work from your team). If not, take a moment to review what's in this folder
 first.

 Claude Code'll be able to read, edit, and execute files here.

 Security guide

 ❯ 1. Yes, I trust this folder
   2. No, exit

 Enter to confirm · Esc to cancel
```

::: warning NOTE
Assess and accept any security prompts encountered to continue.
:::

7. With Caido launched, test the Caido Skills integration.

```txt
Check the interception status of Caido.
```

<img alt="Successfully loaded skill." src="/_images/skills_successfully_loaded.png" center>

---

<img alt="Checking the interception status of Caido." src="/_images/skills_result.png" center>
