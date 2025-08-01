# Installing Caido on macOS

::: tip
Caido provides a desktop application for both Intel-based (x86_64) and Apple silicon (M1/M2/M3, AArch64) architectures. [Learn which download is suitable for your device.](https://support.apple.com/en-us/116943)
:::

## Disk Image (.dmg)

A `.dmg` file is a macOS disk image used to distribute applications. It's the most common and user-friendly way to install apps on Mac.

1. To download the Caido desktop application on your macOS device, visit [caido.io/download](https://caido.io/download) or check out the latest releases page on [Github](https://github.com/caido/caido/releases/latest).

<img alt="macOS dashboard download." src="/_images/macos_dashboard_download.png" center/>

2. Once the download is complete, open the installation package and click, hold, and drag the Caido icon into the `Applications` folder.

<img alt="macOS .dmg Caido download." src="/_images/macos_download.png" width=690px center/>

---

<img alt="macOS Caido installed application." src="/_images/macos_download_applications.png" width=690px center/>

3. Open the `Applications` folder, launch Caido, and select `Open` when met with the security window.

4. [Continue to Setup.](/quickstart/setup.md)

## Homebrew (Unofficial)

[Homebrew](https://brew.sh/) is a popular package manager that simplifies the installation and management of software. It allows users to easily install, update, and manage software packages from the command line.

::: danger
 Using an unofficial Homebrew tap to install Caido may expose you to potential security risks. The installation is managed by third-party maintainers, not the official Caido team, which means it may not be as regularly updated or audited.
:::

::: tip
To download and install Homebrew, use the following terminal command:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Once installed, Homebrew can be used globally by adding it to your PATH environment variable:

```
echo >> /Users/<username>/.zprofile
```

```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/<username>/.zprofile
```

```
eval "$(/opt/homebrew/bin/brew shellenv)"
```

:::

1. To download and install the Caido desktop application on your macOS device, run the following terminal command:

```
brew install --cask caido
```

::: info

The output should resemble:

```
==> Downloading https://caido.download/releases/vX.XX.X/caido-desktop-vX.XX.X-mac-<architecture>.zip
==> Downloading from Downloading from https://<UID>.r2.cloudflarestorage.com/caido-releases/vX.XX.X/caido-cli-vX.XX.X-<architecture>.dmg?X-Amz-Expires=900&response-content-disposition=attachment%3B
######################################################################################################################################################################################################### 100%
==> Installing Cask caido
==> Moving App 'Caido.app' to '/Applications/Caido.app'
==> Linking Binary 'caido-cli' to '/opt/homebrew/bin/caido-cli'
🍺 caido was successfully installed!
```

:::

2. Open the `Applications` folder, launch Caido, and select `Open` when met with the security window.

3. [Continue to Setup.](/quickstart/setup.md)
