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
  "version": "0.40.0",
  "links": [
    {
      "display": "Linux x86_64",
      "platform": "linux-x86_64",
      "kind": "cli",
      "link": "https://caido.download/releases/v0.40.0/caido-cli-v0.40.0-linux-x86_64.tar.gz"
    },
    {
      "display": "macOS Desktop x86_64",
      "platform": "mac-x86_64",
      "kind": "desktop",
      "link": "https://caido.download/releases/v0.40.0/caido-desktop-v0.40.0-mac-x86_64.dmg"
    },
    {
      "display": "Windows Desktop x86_64",
      "platform": "win-x86_64",
      "kind": "desktop",
      "link": "https://caido.download/releases/v0.40.0/caido-desktop-v0.40.0-win-x86_64.exe"
    }
    // ... Other links
  ],
  "released_at": "2024-08-06T12:07:31.818473Z"
}
```

- `display`: What you should display to an end-user.
- `platform`: We support three OS (`linux`, `mac`, `win`) and two architectures (`x86_64` and `aarch64`). The format is `[OS]-[ARCH]`.
- `kind`: It will be either `desktop` or `cli`. See our [documention on the difference](/concepts/essentials/cli_vs_desktop.md).
- `link`: Download link.

::: warning
The download links **will redirect** to a signed URL, make sure your download client follows redirects.
:::
