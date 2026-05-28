---
description: "Map Burp Suite Pro Target and Scope features to Caido."
---

# Target & Scope

Burp Suite Pro target management, site map, and scope features and their Caido equivalents.

## Available

### Target

Burp provides a view of in-scope hosts, site structure, and discovered content.

Caido splits target management across native **Sitemap**, **Scopes**, and **Findings** rather than a single Target tab. Sitemap shows discovered structure, Scopes define what is in bounds, and Findings tracks notable items — together covering Burp Target's role.

#### Resources

- [Sitemap](/app/quickstart/sitemap.md)
- [Scopes](/app/quickstart/scopes.md)
- [Findings](/app/quickstart/findings.md)

### Site map

Burp displays a tree view of discovered hosts, directories, and endpoints.

Caido offers native **Sitemap** that displays discovered hosts and endpoints in a tree view. It is populated from proxied traffic; the **Crawler** community plugin can automate discovery to extend the sitemap beyond manual browsing.

#### Resources

- [Sitemap](/app/quickstart/sitemap.md)
- [Viewing the Sitemap](/app/guides/sitemap_viewing.md)
- [Crawler](https://github.com/caido-community/crawler) (GitHub)

### Scope

Burp lets you define which hosts and URLs are in scope for testing.

Caido offers native **Scopes** to define in-scope hosts. Scoped traffic can be highlighted and filtered across views, similar to Burp's scope configuration.

#### Resources

- [Scopes](/app/quickstart/scopes.md)
- [Defining Scopes](/app/guides/scopes_defining.md)
- [Applying Scopes](/app/guides/scopes_applying.md)

### Issue definitions

Burp lets you customize how Scanner reports and categorizes issue types.

Caido lets you define custom finding types through the **Scanner** plugin's custom check definitions. Custom issue types are plugin-driven rather than a built-in editor.

#### Resources

- [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) (GitHub)

## Indirectly Available

### Crawl paths

Burp visualizes how its crawler reached specific endpoints.

Caido has no crawl-path visualization like Burp's crawler tree. Caido lets you review discovered endpoints in **Sitemap**, run the **Crawler** plugin for automated discovery, or use **Workflows** for custom crawling logic.

#### Resources

- [Sitemap](/app/quickstart/sitemap.md)
- [Workflows](/app/quickstart/workflows.md)
- [Crawler](https://github.com/caido-community/crawler) (GitHub)
