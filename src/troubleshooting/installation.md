# Installation Issues

## "The SUID sandbox helper binary was found, but is not configured correctly."

```text
[142547:0410/141348.635410:FATAL:setuid_sandbox_host.cc(163)] The SUID sandbox helper binary was found, but is not configured correctly. Rather than run without sandboxing I'm aborting now. You need to make sure that /tmp/.mount_caido-PMiQot/chrome-sandbox is owned by root and has mode 4755.
```

This error may occur due to [AppArmor](https://apparmor.net/), the Linux application security system. Each time Caido is launched, it loads in the `tmp` directory as a virtual file system before execution. Due to this, there is no hook to add an AppArmor profile, which defines the permissions granted in the context of the operating system.

### Resolutions

If you encounter this error message after installing the [AppImage](/quickstart/linux#appimage) Caido package, either:

::: warning NOTE
Ensure to replace `/path/to/caido-desktop-vX.XX.X-linux-<architecture>.AppImage` with the correct path, versioning, and architecture of the AppImage package.
:::

#### Create an AppArmor Profile for Caido (Preferred Method):

To create an AppArmor profile for Caido, create a `appimage.caido` file with the following content in the `/etc/apparmor.d/` directory.

```bash
sudo nano /etc/apparmor.d/appimage.caido
```

```text
abi <abi/4.0>,
include <tunables/global>

profile appimage.caido /path/to/caido-desktop-vX.XX.X-linux-<architecture>.AppImage  flags=(unconfined) {
userns,

include if exists <local/appimage.caido>
}
```

Once the file is written, save it, and then read/load the profile.

```bash
apparmor_parser -r /etc/apparmor.d/appimage.caido
```

#### Run Caido without a Sandbox

To disable the AppArmor sandbox security restrictions, launch Caido with the `--no-sandbox` argument.

```bash
/path/to/caido-desktop-vX.XX.X-linux-<architecture>.AppImage --no-sandbox
```

To apply this to every launch, create a `.desktop` extension file with the following content in either the `~/.local/share/applications/` directory (_for the current user account_) or the `/usr/share/applications/` directory (_for all user accounts_).

::: warning NOTE
Ensure to replace `/path/to/caido-icon.png` with the correct path and file name of the image you want to use for Caido's desktop application icon.
:::

```ini
[Desktop Entry]
Version=1.0
Name=Caido
Comment=Caido - A platform for secure vulnerability management
Exec=/path/to/caido-desktop-vX.XX.X-linux-<architecture>.AppImage --no-sandbox
Icon=/path/to/caido-icon.png
Terminal=false
Type=Application
Categories=Security;Utility;Networking;
StartupNotify=true
```

Once the file is written, save it, and then refresh the desktop application icon cache.

```bash
sudo update-icon-caches /usr/share/icons/*
```

::: tip TIPS
Caido's default desktop application icon is available at [https://github.com/caido/caido/blob/main/brand/png/logo.png](https://github.com/caido/caido/blob/main/brand/png/logo.png).
:::

#### Disable AppArmor (Not Recommended)

To disable AppArmor globally, use the `sysctl` utility to allow unprivileged users to create user namespaces.

```bash
sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0
```
