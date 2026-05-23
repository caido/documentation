---
description: "Map Burp Suite Pro Target and Scope features to Caido."
---

# Target & Scope

Burp Suite Pro target management, site map, and scope features and their Caido equivalents.

## Available

### Target

Burp's view of in-scope hosts, site structure, and discovered content.

In Caido, target management is split across native **Sitemap**, **Scopes**, and **Findings** rather than a single Target tab. Sitemap shows discovered structure, Scopes define what is in bounds, and Findings tracks notable items — together covering Burp Target's role.

#### Resources

- [Sitemap](/app/quickstart/sitemap.md)
- [Scopes](/app/quickstart/scopes.md)
- [Findings](/app/quickstart/findings.md)

### Site map

Tree view of discovered hosts, directories, and endpoints.

Caido's native **Sitemap** displays discovered hosts and endpoints in a tree view. It is populated from proxied traffic rather than Burp's dedicated crawler, though workflows can extend discovery.

#### Resources

- [Sitemap](/app/quickstart/sitemap.md)
- [Viewing the Sitemap](/app/guides/sitemap_viewing.md)

### Scope

Define which hosts and URLs are in scope for testing.

Caido's native **Scopes** define in-scope hosts and URL patterns. Scoped traffic can be highlighted and filtered across views, similar to Burp's scope configuration.

#### Resources

- [Scopes](/app/quickstart/scopes.md)
- [Defining Scopes](/app/guides/scopes_defining.md)
- [Applying Scopes](/app/guides/scopes_applying.md)

### Issue definitions

Customize how Burp Scanner reports and categorizes issue types.

Define custom finding types through the **Scanner** plugin's custom check definitions. Custom issue types are plugin-driven rather than a built-in editor.

#### Resources

- [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) (GitHub)

## Indirectly Available

### Crawl paths

Visualize how Burp's crawler reached specific endpoints.

Caido has no crawl-path visualization. Review discovered endpoints in **Sitemap** and use **Workflows** to implement custom crawling or discovery logic if needed.

#### Resources

- [Sitemap](/app/quickstart/sitemap.md)
- [Workflows](/app/quickstart/workflows.md)
