---
description: "A step-by-step guide to using Caido on Parrot Security OS with native support, Docker integration, and launch instructions for the security-focused Linux distribution."
---

# Caido :handshake: Parrot Security

---

<img alt="ParrotOS banner." src="/_images/parrot_os.png" />

[ParrotOS](https://parrotsec.org/) is a versatile, security-focused Linux distribution designed for penetration testing, security research, and privacy protection. With a rich suite of security tools, it's an ideal operating system for ethical hackers, security professionals, and privacy-conscious users.

Known for its intuitive interface, regular updates, and strong commitment to open-source principles, ParrotOS stands out as an exceptional option in the security space.

[Caido is thrilled to maintain a partnership with the Parrot team.](https://parrotsec.org/blog/2025-01-11-parrot-caido/)

## Native Support

Caido now comes pre-installed in:

- [ParrotOS Security](https://parrotsec.org/download/)
- [ParrotOS WSL](https://parrotsec.org/docs/installation/install-with-wsl/)
- [ParrotOS Docker](https://parrot.run/)

::: info
Caido can also be ran as a Docker container inside ParrotOS, with [Rocket](https://gitlab.com/parrotsec/project/rocket)!
:::

Parrot also provides an image of their operating system that has been optimized for virtual environments, compatible with: VirtualBox, VMware, and UTM.

## Launching Caido

To launch Caido, select the `Applications` menu tab in the top-left corner of the desktop interface and select `Pentesting`, `Web Application Analysis`, `Web Application Proxies`, and `Caido`.

<img alt="Parrot desktop." src="/_images/parrot.png" center/>

Or, enter the following terminal command from any directory:

```bash
caido
```
