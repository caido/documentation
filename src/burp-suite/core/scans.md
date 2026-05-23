---
description: "Map Burp Suite Pro Scanner and scan operations to Caido."
---

# Scans

Burp Suite Pro Scanner, live tasks, and scan operations and their Caido equivalents.

### Scanner

Burp's automated vulnerability scanner for passive and active testing.

**Caido equivalent:** [Scanner](https://github.com/caido-community/scanner) plugin.

### Live tasks

Continuous background crawling and auditing of in-scope traffic as you browse.

**Caido equivalent:** [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows) for real-time analysis. For active scanning, run [Scanner](https://github.com/caido-community/scanner) against selected requests.

### Configuring scans

Adjust scan speed, insertion points, and audit checks for Burp Scanner.

**Caido equivalent:** Configure checks in the [Scanner plugin](https://github.com/caido-community/scanner#check-definition). Tune workflow behavior in [Workflows](/app/quickstart/workflows.md).

### Application logins

Provide credentials or recorded login sequences so Burp Scanner can test authenticated areas.

**Caido equivalent:** [Environment Variables](/app/quickstart/environment.md) for storing credentials. Record login flows manually in [Replay](/app/quickstart/replay.md) and replay authenticated requests through [Automate](/app/quickstart/automate.md).

### Resource pools

Limit concurrent scan threads to control resource usage during scans.

**Caido equivalent:** No direct equivalent. Throttle [Automate](/app/guides/automate_rate_limiting.md) campaigns manually or use workflow delays.

### Running scans

Launch full crawl-and-audit or targeted scans against web applications.

**Caido equivalent:** [Scanner](https://github.com/caido-community/scanner) plugin for active scanning. Combine with [Automate](/app/quickstart/automate.md) for targeted fuzzing campaigns.

### Scanning specific HTTP messages

Run an audit against selected requests rather than an entire site.

**Caido equivalent:** Send selected requests from [HTTP History](/app/quickstart/http_history.md) to [Scanner](https://github.com/caido-community/scanner) or [Automate](/app/quickstart/automate.md).

### Viewing scan results

Review discovered issues, audit items, and event logs from scans.

**Caido equivalent:** [Findings](/app/quickstart/findings.md) and the Scanner plugin results view.
