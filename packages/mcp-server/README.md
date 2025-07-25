# TaxForge MCP Server

This MCP (Model Context Protocol) server provides Trae AI agents with access to TaxForge's form generation and status monitoring capabilities.

## Features

- **statusSnapshot**: Returns current form-queue snapshot
- **formFactory**: Runs factory for one form with optional force parameter

## Setup for Trae AI

### 1. Build the Server

```bash
cd packages/mcp-server
pnpm build
```

### 2. Test the Server

```bash
echo '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | node dist/index.js
```

### 3. Register in Trae

Go to Trae → Settings → MCP → **Add Manually** and paste:

```json
{
  "mcpServers": {
    "taxforge-mcp": {
      "command": "node",
      "args": ["<absolute-path>/packages/mcp-server/dist/index.js"],
      "env": {
        "REPO_ROOT": "<absolute-path>",
        "MCP_TRANSPORT": "stdio",
        "GITHUB_TOKEN": "<your-PAT>"
      }
    }
  }
}
```

**Replace `<absolute-path>` with the full path to your TaxForge frontend directory.**

### 4. Attach to Agents

For each agent (FORGE-AI, TaxForge-TaskMaster, TaxForge-UI-Engineer):

- Go to Agents → [Agent Name] → "+ Add MCP" → select "taxforge-mcp"

### 5. Verify

In any agent chat, run:

```
@mcp list
```

You should see `statusSnapshot` and `formFactory` tools listed.

## Environment Variables

- `REPO_ROOT`: Path to the TaxForge repository root (defaults to current working directory)
- `MCP_TRANSPORT`: Set to "stdio" for Trae integration
- `GITHUB_TOKEN`: Your GitHub Personal Access Token (if needed by scripts)

## Architecture

The server acts as a bridge between Trae AI agents and TaxForge's existing shell scripts:

- `statusSnapshot` → calls `scripts/statusSnapshot.mjs`
- `formFactory` → calls `scripts/formFactory.mjs <form>`

All script execution happens in the `REPO_ROOT` directory, ensuring proper context and file access.
