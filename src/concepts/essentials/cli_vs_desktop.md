---
description: "Comparison between Caido CLI and Desktop application - understanding the client/server architecture and choosing the right option."
---

# CLI vs Desktop

Caido comes in two variations: `Desktop` and `CLI`. We are aware that this is **confusing** to new users, which is why we made this Concept page.

First, let's revisit the fact that Caido is built around a `client/server` architecture.
This means that the **interface** is decoupled from the **proxying/processing**.

## CLI

The **proxying/processing** part (aka the `server`) is what we call the `Caido CLI`. You can run the CLI pretty much everywhere (_such as on a VPS, a Container, a Cloud machine, etc._). It **doesn't** require a graphical desktop environment.

It is the most versatile way of using Caido and it is generally recommended as a fallback if your platform doesn't support our Desktop application well.
Advanced users will also find some start options only available in the `CLI`.

When using the `CLI`, you will use your browser to access the **interface** part of Caido.

<img width="800" alt="CLI" src="/_images/cli_vs_desktop_1.png" center/>

## Desktop

The `Desktop` application offers you an all-in-one experience. When you use the Caido desktop, you are also usually using `Caido CLI` without realizing it. :exploding_head:

When you click `start`, the application will spawn the `Caido CLI` in the background and then open a webview to the **interface** part of Caido. You can still use your browser to access the **interface**.

The `Desktop` application has some advantages over the `CLI`:

- You can record multiple Caido [instances](/concepts/essentials/instances) in one place.
- You can launch pre-configured browsers on your desktop.

<img width="800" alt="Desktop" src="/_images/cli_vs_desktop_2.png" center no-shadow/>

## Conclusion

There is no "right" choice here, we offer both since we know some people prefer a separate desktop interface and some prefer to use their browser.

Both methods should allow you to enjoy Caido at its full potential!

<img width="600" alt="CLI vs Desktop" src="/_images/cli_vs_desktop_3.png" center no-shadow/>
