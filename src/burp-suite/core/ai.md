---
description: "Map Burp Suite Pro AI features to Caido AI plugins."
---

# Burp AI

Burp Suite Pro AI features and their Caido equivalents.

## Available

### Generating AI-Powered Explanations

Burp can generate natural-language explanations of HTTP requests and responses from Repeater.

Caido offers the **Chatio** and **Shift** community plugins to explain and analyze HTTP traffic in natural language. **Chatio** provides a dedicated chat interface for security-focused Q&A; **Shift** adds in-context explanations and analysis on requests in **Replay**.

#### Resources

- [Chatio](https://github.com/caido-community/Chatio) (GitHub)
- [Shift](https://github.com/caido-community/shift) (GitHub)
- [Shift Tutorial](/app/tutorials/shift.md)

### Using Burp AI in Repeater

In Burp, AI actions run directly inside Repeater tabs to modify or analyze the current request.

Caido offers the **Shift** plugin for AI-assisted request editing alongside native **Replay**. Shift provides in-context AI actions on requests, similar to Burp AI in Repeater.

#### Resources

- [Shift](https://github.com/caido-community/shift) (GitHub)
- [Shift Tutorial](/app/tutorials/shift.md)
- [Replay](/app/quickstart/replay.md)

## Indirectly Available

### Burp AI

Burp AI is PortSwigger's built-in assistant for explaining requests, suggesting payloads, and running custom actions inside Repeater.

Caido does not ship a single bundled AI product like Burp AI. Use **Shift** (including **Shift Agents** for autonomous background tasks) and **Chatio** for explanations, payload suggestions, and request editing. Each plugin manages its own API keys rather than a central credits system.

#### Resources

- [Shift](https://github.com/caido-community/shift) (GitHub)
- [Shift Tutorial](/app/tutorials/shift.md)
- [Chatio](https://github.com/caido-community/Chatio) (GitHub)

### Automating Tasks with Custom Actions

Burp AI custom actions automate repetitive Repeater tasks with prompts and predefined workflows.

Caido offers **Shift Agents** to assign autonomous background tasks to a model, and **Shift** custom prompts for repeatable AI actions on requests. Caido also covers non-AI repetitive task automation through native **Workflows** and **Automate**.

#### Resources

- [Shift Tutorial](/app/tutorials/shift.md)
- [Shift](https://github.com/caido-community/shift) (GitHub)
- [Workflows](/app/quickstart/workflows.md)
- [Automate](/app/quickstart/automate.md)

## Not Available

### AI Credits

Burp tracks AI usage through a credits system tied to your PortSwigger subscription.

Caido has no central AI credits system. AI plugins such as **Shift** and **Chatio** use your own API keys (OpenAI, Anthropic, etc.) or plugin-specific billing configured in each plugin's settings.

#### Resources

- [Shift Tutorial](/app/tutorials/shift.md)
- [Shift](https://github.com/caido-community/shift) (GitHub)
- [Chatio](https://github.com/caido-community/Chatio) (GitHub)
