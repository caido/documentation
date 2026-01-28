---
description: "A step-by-step guide to installing Caido on macOS using .dmg files or Homebrew for Intel and Apple Silicon Macs."
---

# Installing Caido on macOS

For macOS users, Caido provides a desktop application for both the Intel-based `x86_64` and Apple Silicon `M1/M2/M3, AArch64` architectures.

## Disk Image (.dmg)

A `.dmg` file is a macOS disk image used to distribute applications. It's the most common and user-friendly way to install apps on Mac.

1. To download the Caido desktop application for macOS, visit [caido.io/download](https://caido.io/download) and **click** on the `Mac Intel Chip` or `Mac Apple Chip` button, depending on your architecture.

::: tip
[Learn which download is suitable for your device.](https://support.apple.com/en-us/116943)
:::

<img alt="macOS dashboard download." src="/_images/macos_dashboard_download.png" center/>

2. Once the download is complete, run the installation package and **click**, **hold**, and **drag** the Caido icon into the `Applications` folder.

<img alt="macOS Caido installed application." src="/_images/macos_download_applications.png" width=690px center/>

3. Open the `Applications` folder, launch Caido, and [continue to the setup instructions](/app/quickstart/setup.md).

## Homebrew (Unofficial)

::: danger
 Using an unofficial Homebrew tap to install Caido may expose you to potential security risks. The installation is managed by third-party maintainers, not the official Caido team, which means it may not be as regularly updated or audited.
:::

[Homebrew](https://brew.sh/) is a popular package manager that simplifies the installation and management of software. It allows users to easily install, update, and manage software packages from the command-line.

::: tip
To download and install Homebrew, enter the following terminal command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once Homebrew is installed, add it to your PATH environment variable to make it available globally.

```bash
echo >> /Users/<username>/.zprofile
```

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/<username>/.zprofile
```

```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
```

:::

1. To download and install the Caido desktop application on your macOS device with the Homebrew package manager, run `brew install` with the `--cask` command-line option.

```bash
brew install --cask caido
```

2. Open the `Applications` folder, launch Caido, and [continue to the setup instructions](/app/quickstart/setup.md).
