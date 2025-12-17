---
description: "A step-by-step guide to testing Match & Replace rules in Caido using the Test button and rule ordering for proper traffic modification."
---

# Testing Rules

::: warning NOTE
If your rule is not working, ensure you're viewing and matching data as it is actually sent by **clicking** on the `Raw` button above a HTTP request or response.
:::

To ensure your rules achieve the desired outcome, you can test them against content inside the `Before` editor by **clicking** on the `Test` button.

<img alt="Testing a rule." src="/_images/match_replace_capturing.png" center/>

Applied rules are listed in the `Active Rules` list and will be applied in top to bottom order. To avoid collisions between rules, you can rearrange their order by **left-clicking**, **dragging**, **holding**, and **releasing** a rule either above or below other rules in the list.
