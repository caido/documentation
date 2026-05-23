---
description: "Map Burp Suite Pro Scanner and scan operations to Caido."
---

# Scans

Burp Suite Pro Scanner, live tasks, and scan operations and their Caido equivalents.

## Available

### Scanner

Burp includes an automated vulnerability scanner for passive and active testing.

Caido offers the community **Scanner** plugin for automated vulnerability scanning in Caido. Active and passive scanning is provided by this plugin and can be extended with custom checks.

#### Resources

- [Scanner](https://github.com/caido-community/scanner) (GitHub)
- [Scanner Tutorial](/app/tutorials/scanner.md)

### Configuring scans

Burp lets you adjust scan speed, insertion points, and audit checks for Scanner.

Caido lets you configure scan behavior through the **Scanner** plugin's custom check definitions and native **Workflows**. Check selection is plugin- and workflow-specific rather than a unified scan configuration UI.

#### Resources

- [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) (GitHub)
- [Workflows](/app/quickstart/workflows.md)

### Running scans

Burp launches full crawl-and-audit or targeted scans against web applications.

Caido supports running active scans with the **Scanner** plugin and targeted fuzzing with native **Automate**. Combine both for coverage similar to Burp's integrated scanner.

#### Resources

- [Scanner](https://github.com/caido-community/scanner) (GitHub)
- [Automate](/app/quickstart/automate.md)
- [Scanner Tutorial](/app/tutorials/scanner.md)

### Scanning specific HTTP messages

Burp runs an audit against selected requests rather than an entire site.

Caido lets you send selected requests from **HTTP History** to the **Scanner** plugin or **Automate**. This matches Burp's "scan selected items" workflow using Caido's context menu and traffic views.

#### Resources

- [HTTP History](/app/quickstart/http_history.md)
- [Scanner](https://github.com/caido-community/scanner) (GitHub)
- [Automate](/app/quickstart/automate.md)

### Viewing scan results

Burp lets you review discovered issues, audit items, and event logs from scans.

Caido lets you review results in native **Findings** and the **Scanner** plugin's results view. Caido centralizes tracked issues in Findings rather than Burp's separate scan issue tabs.

#### Resources

- [Findings](/app/quickstart/findings.md)
- [Scanner](https://github.com/caido-community/scanner) (GitHub)

## Indirectly Available

### Live tasks

Burp runs continuous background crawling and auditing of in-scope traffic as you browse.

Caido offers native **Passive Workflows** for real-time traffic analysis as you browse. For active auditing, Caido supports running the **Scanner** plugin against selected requests. Caido does not have a single "live tasks" panel like Burp; background analysis is workflow-driven.

#### Resources

- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)
- [Workflows](/app/quickstart/workflows.md)
- [Scanner](https://github.com/caido-community/scanner) (GitHub)

### Application logins

Burp lets you provide credentials or recorded login sequences so Scanner can test authenticated areas.

Caido lets you store credentials in native **Environment Variables**, record login flows manually in **Replay**, and use the **NTLM Authentication** plugin for NTLM-protected applications. Caido does not support Burp-style recorded login sequences or a login configuration library.

#### Resources

- [Environment Variables](/app/quickstart/environment.md)
- [Replay](/app/quickstart/replay.md)
- [Automate](/app/quickstart/automate.md)
- [Refresh Authentication Tutorial](/app/tutorials/refresh_authentication.md)
- [NTLM Authentication](https://github.com/caido-community/ntlm) (GitHub)

## Not Available

### Resource pools

Burp limits concurrent scan threads to control resource usage during scans.

Caido has no resource pool for throttling scan concurrency. Throttle **Automate** campaigns manually or add delays in workflows to control request rate.

#### Resources

- [Avoiding Rate-Limiting Protections](/app/guides/automate_rate_limiting.md)
- [Workflows](/app/quickstart/workflows.md)
