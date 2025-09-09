# Download & Installation

## "This site can't be reached."

When attempting to download Caido, if you encounter a "This site can't be reached" error due to a request time out, your IP address may be blocked by the storage provider's firewall.

If this is the case, try using a VPN or changing your DNS provider and refreshing the page.

## "The SUID sandbox helper binary was found, but is not configured correctly."

If you're using Linux and have installed Caido using the [AppImage](/quickstart/linux#appimage) installation method, you may encounter an error, accompanied by a message similar to the following:

```
[142547:0410/141348.635410:FATAL:setuid_sandbox_host.cc(163)] The SUID sandbox helper binary was found, but is not configured correctly. Rather than run without sandboxing I'm aborting now. You need to make sure that /tmp/.mount_caido-PMiQot/chrome-sandbox is owned by root and has mode 4755.
```

This error happens due to [AppArmor](https://apparmor.net/), the Linux application security system. Each time Caido is launched, it loads itself in the `tmp` folder as a virtual file system before execution. This means there is no hook to add an AppArmor profile, which defines exactly what a certain program is allowed and not allowed to do in the context of the operating system.

There are three ways to work around this issue (_listed in order, beginning with the most secure to the least secure methods_):

::: info
For the following commands throughout each of the three methods, be sure to replace `/path/to/caido-desktop-vX.XX.X-linux-<architecture>.AppImage` with the path, versioning, and architecture to the AppImage file that is appropriate to you. If you renamed the file, account for that as well.
:::

### Create an AppArmor Profile for Caido (Preferred Method):

1. Create a new profile file in the AppArmor profile directory with:

```
sudo nano /etc/apparmor.d/appimage.caido
```

2. The file's content should be:

```
abi <abi/4.0>,
include <tunables/global>

profile appimage.caido /path/to/caido-desktop-vX.XX.X-linux-<architecture>.AppImage  flags=(unconfined) {
userns,

include if exists <local/appimage.caido>
}
```

3. Read and load the profile with:

```
apparmor_parser -r /etc/apparmor.d/appimage.caido
```

### Run Caido without a Sandbox

To disable the AppArmor sandbox security restrictions, use the `--no-sandbox` argument when launching Caido:

```
/path/to/caido-desktop-vX.XX.X-linux-<architecture>.AppImage --no-sandbox
```

If you would like to apply this to every launch:

1. Create a file with the `.desktop` extension located in either:

- `~/.local/share/applications/` for the current user account.
- `/usr/share/applications/` for all user accounts.

2. The file's content should be:

```
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

3. Refresh the desktop application icon cache with:

```
sudo update-icon-caches /usr/share/icons/*
```

::: tip TIPS

- Ensure to replace `/path/to/caido-icon.png` with the actual path and filename of the image you want to use for Caido's desktop application icon.

- You can use the Caido logo as the image by downloading it from [https://github.com/caido/caido/blob/main/brand/png/logo.png](https://github.com/caido/caido/blob/main/brand/png/logo.png).
:::

### Disable AppArmor (Not Recommended)

To disable AppArmor globally, run the following command:

```
sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0
```
