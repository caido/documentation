---
description: "Find detailed reference information on Caido download links API and file formats for automated download systems and third-party integrations."
---

# Download

The download links of Caido are hosted under the domain `caido.download`.

::: warning NOTE
You may encounter outdated Google Cloud bucket links. These are deprecated and should not be used.
:::

## Latest

To obtain the latest release links, use `GET https://caido.download/releases/latest`.

The API will return JSON data resembling:

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

| Field | Description |
|-------|-------------|
| `display` | The display name. |
| `platform` | (Deprecated) Operating system (`linux`/`mac`/`win`) + `-` + architecture (`x86_64`/`aarch64`). |
| `kind` | Either `desktop` or `cli` ([CLI vs Desktop](/app/concepts/cli_vs_desktop.md)). |
| `link` | The download link. |
| `os` | The operating system of the binary (`linux`/`macos`/`windows`). |
| `arch` | The architecture of the binary (`x86_64`/`aarch64`). |
| `format` | The archive/binary format (`zip`/`tar.gz`/`deb`/`AppImage`/`dmg`/`exe`). |
| `hash` | The Base64-encoded SHA512 hash of the file (may be `null` for older releases). |

::: info
If you prefer a file-based hash, we also build `[link].sha256` and `[link].sha512` files for each binary.
These are hex encoded and will produce the same output as `shasum -a 256` and `shasum -a 512`.
:::

::: warning
The download links **will redirect** to a signed URL, ensure your download client follows redirects.
:::
