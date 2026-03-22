---
description: "Learn how to use Caido Skills to integrate Caido with AI agents."
---

# Using Caido Skills

In this tutorial, you will learn how to use Caido Skills to integrate Caido with AI agents.

## Skills

In the context of AI, "skills" extend the capabilities of an agent by providing the instructions, data, scripts, commands, and reference material needed in order to perform a specific task or series of tasks.

The official [Caido Skills](https://github.com/caido/skills) provides full coverage of Caido's API, allowing you to instruct AI agents to carry out tasks that you would normally have to do manually such as:

- Search, retrieve, resend, and edit requests with HTTPQL.
- Access Replay sessions/collections/entries.
- Fuzz request payloads.
- Create and manage scope presets.
- Create and manage filter presets.
- Store environment variables.
- Create, list, and update findings.
- Monitor and cancel background tasks.
- Switch between projects.
- Manage uploaded files.
- Enable and disable traffic interception.
- List installed plugins.
- Convert requests as cURL commands.
- Check the status of the instance.

## Configuration & Installation

To make the Caido Skills available to the Claude Code CLI tool:

1. Create a new project.

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
