# AI with Caido

In this tutorial, you will learn how to integrate AI models/agents with Caido.

## Caido MCP Server

The community developed [Caido MCP Server](https://github.com/c0tton-fluff/caido-mcp-server) provides AI models/agents with a variety of tools and controlled access to project data.

With contexual awareness of a project's proxied traffic, extensions, and configurations - the Caido MCP Server gives you the ability to instruct AI assistants to:

- Intercept and forward traffic.
- Filter traffic with HTTPQL query statements.
- Send requests via Replay.
- List Automate and Replay sessions.
- Obtain request/response data.
- Create and list findings and scope presets.
- Discover the recorded endpoints in the Sitemap.
- List and switch between projects.
- List workflows and filter presets.

[View a complete list of the individual tools.](https://github.com/c0tton-fluff/caido-mcp-server?tab=readme-ov-file#tools)

### Installation

To install the Caido MCP Server:

1. Clone the repository.

```bash
git clone --branch v1.1.0 https://github.com/c0tton-fluff/caido-mcp-server.git
```

2. Navigate into the root directory.

```bash
cd caido-mcp-server
```

3. Compile the server.

::: code-group
```bash [Linux/macOS]
go build -o caido-mcp-server .
```

```powershell [Windows]
go build -o caido-mcp-server.exe .
```
:::

[View alternative installation methods.](https://github.com/c0tton-fluff/caido-mcp-server?tab=readme-ov-file#install)

### Configuration

Once the server is installed, to connect it to Caido:

1. Launch Caido.

2. Execute the `login` command with the listening address of the Caido instance as the value of the `-u` argument.

::: code-group
```bash [Linux/macOS]
caido-mcp-server login -u http://127.0.0.1:8080
```

```powershell [Windows]
caido-mcp-server.exe login -u http://127.0.0.1:8080
```
:::

3. **Click** on the `Allow` button to authorize the server.

<img alt="OAuth client authorization." src="/_images/mcp_auth.png" width=350px center>

## Configuring an MCP Client

Once the server is installed, configured, and you are authenticated, models/agents can be configured as clients.

### Cursor Desktop Application

To use the Caido MCP Server with the Cursor desktop application:

1. Create a `~/.cursor/mcp.json` file with the following content (_ensure to replace the value of the `command` key with the path location of your `caido-mcp-server` binary_).

::: code-group
```json [Linux/macOS]
{
  "mcpServers": {
    "caido": {
      "command": "/Users/ninjeeter/caido-mcp-server/caido-mcp-server",
      "args": ["serve"],
      "env": {
        "CAIDO_URL": "http://127.0.0.1:8080"
      }
    }
  }
}
```

```json [Windows]
{
  "mcpServers": {
    "caido": {
      "command": "C:\\Users\\ninje\\caido-mcp-server\\caido-mcp-server.exe",
      "args": ["serve"],
      "env": {
        "CAIDO_URL": "http://127.0.0.1:8080"
      }
    }
  }
}
```
:::

2. Ensure Caido is running and listening at the same address as the value of the `CAIDO_URL` environment variable (_e.g. `http://127.0.0.1:8080`_).

3. Restart Cursor (_or **click** on **View** in the navigation bar, select **Command Palette...**, and select **Developer: Reload Window**_).

::: tip
To verify the configuration, **click** on the <code><Icon icon="fas fa-gear" /></code> button to access the **Cursor Settings** and select **Tools & MCP**.

<img alt="Installed MCP Servers list." src="/_images/mcp_cursor.png" no-shadow center>
:::

4. **Click** on the `+ New Chat` button.

5. To verify the connection, submit the message "Send a Replay request to example.com".

::: tip
Select `Allowlist MCP Tool` to avoid having to authorize the server repeatedly.

<img alt="Allowlist MCP tool." src="/_images/mcp_allowlist.png" no-shadow center>
:::

A new Replay session will be created and a summary of the request and response will be returned.

<img alt="Replay request and response summary." src="/_images/mcp_cursor_replay.png" width=500px center>

### Claude CLI

To use the Caido MCP Server with the Claude CLI tool:

1. In the configuration object of the `~/.claude.json` file, add the following `mcpServers` object as a field (_ensure to replace the value of the `command` key with the path location of your `caido-mcp-server` binary_).

::: code-group
```json [Linux/macOS]
"mcpServers": {
  "caido": {
    "type": "stdio",
    "command": "/Users/ninjeeter/caido-mcp-server/caido-mcp-server",
    "args": ["serve"],
    "env": {
      "CAIDO_URL": "http://127.0.0.1:8080"
    }
  }
}
```

```json [Windows]
"mcpServers": {
  "caido": {
    "type": "stdio",
    "command": "C:\\Users\\ninje\\caido-mcp-server\\caido-mcp-server.exe",
    "args": ["serve"],
    "env": {
      "CAIDO_URL": "http://127.0.0.1:8080"
    }
  }
}
```
:::

2. Save the changes to `.claude.json`.

3. Start a Claude session.

```bash
claude
```

4. To verify the connection, submit the message "Send a Replay request to example.com".

::: tip
Select `2. Yes, and don't ask again for caido - caido_send_request commands in...` to avoid having to authorize the server repeatedly.

<img alt="Claude CLI authorization prompt." src="/_images/mcp_allowlist.png" no-shadow center>
:::

A new Replay session will be created and a summary of the request and response will be returned.

<img alt="Replay request and response summary." src="/_images/mcp_claude_replay.png" width=500px center>

## Caido Skills

[https://github.com/caido/skills](https://github.com/caido/skills)
