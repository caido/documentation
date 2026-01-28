---
description: "A step-by-step guide to Caido's Replay feature for creating, modifying, and sending individual HTTP requests for security testing."
---

# Replay

The `Replay` interface gives you the ability to create, modify, and send individual requests. Each sent request and its corresponding response are recorded, enabling you to compare and identify how specific modifications affect responses.

::: tip <code><Icon icon="fas fa-video" /></code> Video Demonstration
---
<div class="video">
  <iframe src="https://www.youtube.com/embed/gDZlAnToWV4?si=2j5XR4H7s0jSoDxL&amp;rel=0" title="YouTube video player." frameborder="0"></iframe>
</div>
:::

::: tip HOW-TO GUIDES

- [Sending Requests to Replay](/guides/replay_requests.md)
- [Resending Requests](/guides/replay_resending.md)
- [Using Workflows in Replay](/guides/replay_workflows.md)
- [Using Environment Variables in Replay](/guides/replay_environment_variables.md)
:::

<LabContainer :labs="[{name: 'CSRF via Content-Type Lab', url: 'https://labs.cai.do/csrfContentType.php'}, {name: 'Reflected XSS Lab', url: 'https://labs.cai.do/xss.php'}, {name: 'SQL Injection Lab', url: 'https://labs.cai.do/sqlInjection.php'}]" />

<img alt="The Replay interface." src="/_images/replay_interface.png" center>
