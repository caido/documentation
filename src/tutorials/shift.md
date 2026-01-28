---
description: "Learn how to configure and use the Shift plugin to automate tasks."
---

# Shift

::: tip <code><Icon icon="fas fa-video" /></code> Video Demonstration
---
<div class="video">
  <iframe src="https://www.youtube.com/embed/gDZlAnToWV4?si=2j5XR4H7s0jSoDxL&amp;start=1318&amp;rel=0" title="YouTube video player." frameborder="0"></iframe>
</div>
:::

[Shift](https://github.com/caido-community/shift) is Caido's official AI/LLM plugin that can be instructed to automate tasks in your security assessments.

In this tutorial, you will learn how to use the plugin's two main components: [Shift Core](#shift-core) and [Shift Agents](#shift-agents).

::: info
Shift is available for [installation](/guides/plugins_installing.md) in the `Official` tab of the Plugin interface.
:::

<img alt="The Shift plugin listed in the Official tab." src="/_images/shift_install.png" center />

Shift integrates AI/LLM models directly into Caido's user-interface, making the models context-aware. With access to a variety of tools that can carry out actions within Caido, you can submit prompts, written in natural language, to assign tasks to a model of your choosing such as:

```txt
Generate a wordlist of common sensitive files that may be publicly exposed.
```

```txt
Update this request to reflect this JS:
<response-body-javascript>
```

```txt
Create a M&R rule to replace the selected text with: isAdmin=true
```

```txt
Find similar requests to this.
```

::: tip
Shift is highly capable and should be able to carry out any task you could do with a well-written prompt.
:::

<LabContainer message="Learn how to use this plugin in a hands-on, simulated training environment:" :labs="[{name: 'Shift Payload Lab', url: 'https://labs.cai.do/shiftPayload.php'}]" />

## Configuration

To use Shift, register/login to [https://openrouter.ai/](https://openrouter.ai/) and obtain an [API key](https://openrouter.ai/settings/keys).

::: warning NOTE
Certain models can be used for [free](https://openrouter.ai/models?q=free) while others cost [credits](https://openrouter.ai/settings/credits). Actively monitor usage and consider setting a budget to avoid high costs.
:::

Copy the key to your clipboard, navigate to the `Settings` tab of the Shift interface, and paste it into the `Enter API key` input field.

<img alt="Adding the API key in Shift." src="/_images/shift_api_key.png" center />

Within the `Settings` interface, there are also options to limit the number of API calls a Shift Agent can make and an input field to provide a general system prompt or more contextual information about your target.

<img alt="Additional Shift settings." src="/_images/shift_settings.png" center />

## Shift Core

With Shift Core, you can provide direct instructions to the model by using the default keyboard shortcut `CTRL` + `SPACE`, typing in a prompt, and pressing `ENTER` or **clicking** on the <code><Icon icon="fas fa-circle-arrow-up" /></code> button.

<img alt="Shift prompt." src="/_images/shift_prompt.png" center />

---

<img alt="Shift modification." src="/_images/shift_modification.png" center />

## Shift Agents

With Shift Agents, you can assign tasks to a model that will be handled autonomously as background processes.

<img alt="Shift Agent prompt." src="/_images/shift_agent.png" center />

### Custom Prompts

For common tasks, you can create and save reusable prompts by **clicking** on the `+ Add prompt` button within the `Custom Prompts` tab.

<img alt="Custom prompts." src="/_images/shift_custom_prompts.png" center />

::: warning NOTE
When writing custom prompts, provide detailed information and guidelines for the model to follow, such as:

- The root cause of the vulnerability.
- An example of its secure implementation.
- Example payloads or exploitation techniques.
- Examples of commonly vulnerable endpoints or components.
- Indications of successful exploitation.
- Resources to target after successful exploitation.
- Edge cases and similar vulnerabilities.
- Common testing mistakes that may produce false positives.
:::

::: tip
[View how the default custom prompts are written as a reference.](https://github.com/caido-community/shift/blob/87aa9f1fef55af5b7e4ced5e2c848a428ad23182/packages/frontend/src/stores/config/prompts.ts)
:::

<img alt="Adding a custom prompt." src="/_images/shift_add_new_prompt.png" center />

To use a custom prompt, **click** on the `+` button within the message input field, select the prompt by name, and reference it in the message.

<img alt="Using a custom prompt." src="/_images/shift_custom_prompt_message.png" center />

---

<img alt="Custom prompt execution." src="/_images/shift_custom_prompt_execution.png" center />

## AI Session Renaming

Shift is also able to automatically rename Replay session tabs from their numerical names to descriptive names that identify the purpose of the request. To enable this feature, and configure additional settings, navigate to the `AI Session Renaming` tab.

<img alt="Session tab renaming settings." src="/_images/shift_session_renaming.png" center />
