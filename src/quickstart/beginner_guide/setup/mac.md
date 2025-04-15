# Installing Caido on macOS

## Disk Image (.dmg)

A `.dmg` file is a macOS disk image used to distribute applications. It's the most common and user-friendly way to install apps on Mac.

1. To download the Caido desktop application on your macOS device, visit [caido.io/download](https://caido.io/download) or check out the latest release on [Github](https://github.com/caido/caido/releases/latest).

::: tip
Caido provides a desktop application for both Intel-based (x86_64) and Apple silicon (M1/M2/M3, AArch64) architectures. [Learn which download is suitable for your device.](https://support.apple.com/en-us/116943)
:::

<img alt="macOS dashboard download." src="/_images/macos_dashboard_download.png" center/>

2. Once the download is complete, open the installation package and click, hold, and drag the Caido icon into the `Applications` folder.

<img alt="macOS Caido download." src="/_images/macos_download.png" width=690px center/>

---

<img alt="macOS Caido download." src="/_images/macos_download_applications.png" width=690px center/>

3. Next, open the `Applications` folder, launch Caido, and select `Open` when met with the security window.

4. With Caido launched, click the `Start` button and sign in with your credentials or create an account.

5. Once authenticated, name and allow access to your Caido [Instance](/concepts/essentials/instances.md).

::: info
The Instance requires access to your account username, email address, and subscription. By default, `Enable the AI assistant feature` (_[for Individual & Team subscriptions](https://caido.io/pricing)_) and `Stay logged-in for an extended period` will be selected. You can deselect these checkboxes if you do not want these features enabled.
:::

6. Once authorized, return to Caido and navigate through the brief tutorial on creating a new [Project](/guides/projects.md) and how to download and import [Caido's CA Certificate](/guides/import_ca_certificate.md) to your browser.

::: info
[Learn about why you need to import Caido's CA Certificate.](/concepts/essentials/https_traffic.md)
:::

## CLI

```
curl https://api.github.com/repos/caido/caido/releases/latest
```

```
wget https://caido.download/releases/vX.XX.X/caido-cli-vX.XX.X-mac-aarch64.zip
```

```
wget https://caido.download/releases/vX.XX.X/caido-cli-vX.XX.X-mac-x86_64.zip
```

```
unzip caido-cli-vX.XX.X-mac-aarch64.zip
```

```
unzip caido-cli-vX.XX.X-mac-x86_64.zip
```

```
./caido-cli --help
```

## Homebrew (Unofficial)

Homebrew is a popular package manager that simplifies the installation and management of software. It allows users to easily install, update, and manage software packages from the command line.

::: danger
 Using an unofficial Homebrew tap to install Caido may expose you to potential security risks. The installation is managed by third-party maintainers, not the official Caido team, which means it may not be as regularly updated or audited. For maximum security and control, consider installing Caido directly from the official website or GitHub releases.
:::

```
brew install --cask caido
```

```
caido-cli --help
```

::: info

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

::: tip
If running caido-cli doesn't work as expected, make sure `/opt/homebrew/bin/` is included in your `$PATH`. You can check your path with:

```
echo $PATH
```

If `/opt/homebrew/bin/` isn't included, you can add it like this (if using zsh, which is the default shell on newer macOS versions):

```
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

:::

## What's next?

[Learn how to change the default settings and explore other basic configuration options.](/quickstart/beginner_guide/setup/config.md)
