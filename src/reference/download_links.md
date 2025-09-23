---
description: "Find detailed reference information on Caido download links API and file formats for automated download systems and third-party integrations."
---

# Download

The download links of Caido are hosted under the domain `caido.download`.

:::info
You might see older links linking to Google Cloud buckets directly, those are deprecated and should not be used.
:::

## Latest

To get the latest release links, you can query `GET https://caido.download/releases/latest`.
This API will return a JSON similar to:

```json
{
  "id": "01J4KSCQQFY1E9SWEEKJ1WMJWD",
  "version": "0.47.3",
  "links": [
    {
      "display": "Linux x86_64",
      "platform": "linux-x86_64",
      "kind": "cli",
      "link": "https://caido.download/releases/v0.47.3/caido-cli-v0.47.3-linux-x86_64.tar.gz",
      "os": "linux",
      "arch": "x86_64",
      "format": "tar.gz",
      "hash": "gu9MUK4jnHZSQUENeP+29JXz79kPaJO8QHZlagSxLdNJ1qaC3IRwTbcLeU+g2M10WGsdWlrwua6meL1gYQ3tYw=="
    },
    {
      "display": "macOS Desktop x86_64",
      "platform": "mac-x86_64",
      "kind": "desktop",
      "link": "https://caido.download/releases/v0.47.3/caido-desktop-v0.47.3-mac-x86_64.dmg",
      "os": "macos",
      "arch": "x86_64",
      "format": "dmg",
      "hash": "1Be/o7cHKaEGELuq24d0yonI9TRCwlWLfzviafYVXKT6RUZ4YBdfI2RNAqZJ6jz+ViLj02XgVciTATJHn2c7xA=="
    },
    {
      "display": "Windows Desktop x86_64",
      "platform": "win-x86_64",
      "kind": "desktop",
      "link": "https://caido.download/releases/v0.47.3/caido-desktop-v0.47.3-win-x86_64.exe",
      "os": "windows",
      "arch": "x86_64",
      "format": "exe",
      "hash": "p8Rr3wOe3Fbm7eETOogP0ulpifeDFAm+gVxDVItuK4B5wbAOgqqjwZEKoJArcDnAclvmVRtOAQlSXM7dg+amZA=="
    }
    // ... Other links
  ],
  "released_at": "2025-03-27T19:52:00.851138Z"
}
```

- `display`: What you should display to an end-user.
- `platform`: (Deprecated) We support three OS (`linux`, `mac`, `win`) and two architectures (`x86_64` and `aarch64`). The format is `[OS]-[ARCH]`.
- `kind`: Either `desktop` or `cli`. See our [documention on the difference](/concepts/essentials/cli_vs_desktop.md).
- `link`: The download link
- `os`: The operating system of the binary (`linux`, `macos`, `windows`)
- `arch`: The architecture of the binary (`x86_64`, `aarch64`)
- `format`: The archive/binary format (`zip`, `tar.gz`, `deb`, `AppImage`, `dmg`, `exe`)
- `hash`: The SHA512 hash of the file in base64 (might be null for older releases)

::: info
If you prefer a file-based hash, we also build `[link].sha256` and `[link].sha512` files for each binary.
Those are hex encoded and will be the same output as `shasum -a 256` and `shasum -a 512`.
:::

::: warning
The download links **will redirect** to a signed URL, make sure your download client follows redirects.
:::
