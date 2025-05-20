# Installing Caido on Linux

::: tip TIPS
Caido provides a desktop application for both x86_64 and AArch64 architectures. To discover which download is suitable for your device, run the following terminal command:

```
uname -m
```

- If you are using [Parrot OS](/guides/distributions/parrot_os.md) or [Athena OS](/guides/distributions/athena_os.md), Caido already comes preinstalled.
:::

## Deb (.deb)

1. To download the Caido desktop application for Debian-based Linux distributions, visit [caido.io/download](https://caido.io/download) or check out the latest releases page on [Github](https://github.com/caido/caido/releases/latest).

<img alt="Linux dashboard download." src="/_images/linux_dashboard_download.png" center/>

2. Once the installation package has been downloaded, navigate to its directory, and install Caido with:

<img alt="Linux .deb Caido download." src="/_images/linux_download.png" width=690px center/>

```
sudo dpkg -i caido-desktop-vX.XX.X-linux-aarch64.deb
```

::: info

The output should resemble:

```
Selecting previously unselected package caido.
(Reading database ... 131850 files and directories currently installed.)
Preparing to unpack caido-desktop=v0.47.1-linux-aarch64.deb ...
Unpacking caido (0.47.1) ...
Setting up caido (0.47.1) ...
update-alternatives is /usr/bin/update-alternatives
update-alternatives: using /opt/Caido/caido to provide /usr/bin/caido (caido) in auto mode
Processing triggers for hicolor-icon-theme (0.17-2) ...
Processing triggers for gnome-menus (3.36.0-1.1) ...
Processing triggers for mailcap (3.70+nmul) ...
Processing triggers for desktop-file-utils (0.26-1) ...
```

:::

3. After installation, you can launch Caido with:

```
caido
```

4. [Continue to the setup instructions.](#shared-steps)

## AppImage

1. To download the Caido desktop application for any Linux distribution, visit the latest releases page on [Github](https://github.com/caido/caido/releases/latest), and download the AppImage package appropriate for your architecture.

2. Once the installation package has been downloaded, navigate to its directory, and make the it executable with:

<img alt="Linux AppImage Caido download." src="/_images/linux_appimage_download.png" width=690px center/>

```
chmod +x caido-desktop-vX.XX.X-linux-<architecture>.AppImage
```

3. After installation, you can launch Caido with:

```
./caido-desktop-vX.XX.X-linux-<architecture>.AppImage
```

::: tip
Consider renaming the package for convenience:

```
mv caido-desktop-vX.XX.X-linux-<architecture>.AppImage <name>
```

:::

4. [Continue to the setup instructions.](#shared-steps)

::: warning TROUBLESHOOTING
If Caido is not launching and you are getting a FATAL error message, view the [Troubleshooting](/guides/troubleshooting.md) page for possible fixes.
:::

## AUR (Arch User Repository)

::: danger
 Using an unofficial repository to install Caido may expose you to potential security risks. The installation is managed by third-party maintainers, not the official Caido team, which means it may not be as regularly updated or audited.
:::

1. To download the Caido desktop application for Arch Linux and Arch-based distributions, first ensure you have the required dependencies installed:

```
sudo pacman -S --needed git base-devel fuse2
```

2. Next, clone the package from the AUR:

```
git clone https://aur.archlinux.org/caido-desktop.git
```

<img alt="Linux AppImage Caido download." src="/_images/arch_clone.png" width=690px center/>

3. Once downloaded, enter the directory with:

```
cd caido-desktop
```

4. Check and install for missing dependencies, build, and install the package with:

```
makepkg -si
```

5. Ensure the package is executable:

```
chmod +x caido-desktop-vX.XX.X-linux-<architecture>.AppImage
```

6. After installation, you can launch Caido with:

```
./caido-desktop-vX.XX.X-linux-<architecture>.AppImage
```

::: tip
Consider renaming the package for convenience:

```
mv caido-desktop-vX.XX.X-linux-<architecture>.AppImage <name>
```

:::

7. [Continue to the setup instructions.](#shared-steps)

::: warning TROUBLESHOOTING
If Caido is not launching and you are getting a FATAL error message, view the [Troubleshooting](/guides/troubleshooting.md) page for possible fixes.
:::

## Shared Steps

After Caido has been installed and launched:

1. Click the `Start` button and log in with your credentials or create an account.

3. Once authenticated, name and allow access to your Caido [Instance](/concepts/essentials/instances.md).

::: info
The Instance requires access to your account username, email address, and subscription. By default, `Enable the AI assistant feature` (_[for Individual & Team subscriptions](https://caido.io/pricing)_) and `Stay logged-in for an extended period` will be selected. You can deselect these checkboxes if you do not want these features enabled.
:::

4. Once authorized, return to Caido and navigate through the brief tutorial on creating a new [Project](/guides/projects.md) and how to download and import [Caido's CA Certificate](/guides/import_ca_certificate.md) to your browser.

::: info
[Learn about why you need to import Caido's CA Certificate.](/concepts/essentials/https_traffic.md)
:::

## What's next?

[Learn how to change the default settings and explore other basic configuration options.](/quickstart/beginner_guide/setup/config.md)
