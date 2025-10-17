---
description: "A step-by-step guide to installing Caido on Linux using .deb packages, AppImage, or AUR for different architectures."
---

# Installing Caido on Linux

For Linux users, the Caido desktop application is available for both `x86_64` and `AArch64` architectures and any distribution.

::: tip
Caido comes preinstalled on [Parrot Security](/guides/parrot_os.md) and [Athena OS](/guides/athena_os.md).
:::

## Debian Distributions

1. To download the Caido desktop application for Debian-based Linux distributions, visit [caido.io/download](https://caido.io/download) and **click** on the `Linux (x86_64)` or `Linux (Aarch64)` button, depending on your architecture.

::: tip
To discover which download is suitable for your device, enter the following terminal command:

```bash
uname -m
```

:::

<img alt="Linux dashboard download." src="/_images/linux_dashboard_download.png" center/>

2. Once the installation package has been downloaded, navigate to its directory, and install Caido with the `dpkg` package manager.

```bash
sudo dpkg -i caido-desktop-vX.XX.X-linux-aarch64.deb
```

3. Once Caido has been installed, launch Caido, and [continue to the setup instructions](/quickstart/setup.md).

```bash
./caido
```

## AppImage

1. To download the Caido desktop application for any Linux distribution, visit the latest releases page on [Github](https://github.com/caido/caido/releases/latest), and download the `.AppImage` package appropriate for your architecture.

::: tip
To discover which download is suitable for your device, enter the following terminal command:

```bash
uname -m
```

:::

<img alt="Linux AppImage Caido download." src="/_images/linux_appimage_download.png" width=690px center/>

2. Once the installation package has been downloaded, navigate to its directory, and make it executable with `chmod +x`.

```bash
chmod +x caido-desktop-vX.XX.X-linux-<architecture>.AppImage
```

3. Rename the package to `caido` for convenience.

```bash
mv caido-desktop-vX.XX.X-linux-<architecture>.AppImage caido
```

4. Once Caido has been installed, launch Caido, and [continue to the setup instructions](/quickstart/setup.md).

```bash
caido
```

::: warning TROUBLESHOOTING
If Caido is not launching and you are getting a FATAL error message, view the [Installation Issues](/troubleshooting/installation.md) troubleshooting guide for possible fixes.
:::

## Arch User Repository

::: danger
 Using an unofficial repository to install Caido may expose you to potential security risks. The installation is managed by third-party maintainers, not the official Caido team, which means it may not be as regularly updated or audited.
:::

1. To download the Caido desktop application for Arch Linux and Arch-based distributions, first ensure you have the required dependencies installed.

```bash
sudo pacman -S --needed git base-devel fuse2
```

2. Then, clone the package from the repository.

```bash
git clone https://aur.archlinux.org/caido-desktop.git
```

<img alt="Linux AppImage Caido download." src="/_images/arch_clone.png" width=690px center/>

3. Once the package has been downloaded, navigate to its directory.

```bash
cd caido-desktop
```

4. Next, check for and install any missing dependencies, build the package from the source code, and install it with the `makepkg` tool.

```bash
makepkg -si
```

5. Ensure the package is executable with `chmod +x`.

```bash
chmod +x caido-desktop-vX.XX.X-linux-<architecture>.AppImage
```

6. Rename the package to `caido` for convenience.

```bash
mv caido-desktop-vX.XX.X-linux-<architecture>.AppImage caido
```

7. Once Caido has been installed, launch Caido, and [continue to the setup instructions](/quickstart/setup.md).

```bash
./caido
```

::: warning TROUBLESHOOTING
If Caido is not launching and you are getting a FATAL error message, view the [Installation Issues](/troubleshooting/installation.md) troubleshooting guide for possible fixes.
:::
