import type { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Guides",
    items: [
      {
        text: "Installation",
        link: "/app/guides/",
      },
      {
        text: "Importing Caido's CA Certificate",
        link: "/app/guides/ca_certificate_importing",
      },
      {
        text: "Using the Caido Browser Extension",
        link: "/app/guides/caido_extension",
      },
      {
        text: "Using FoxyProxy",
        link: "/app/guides/foxyproxy.md",
      },
      {
        text: "Using ZeroOmega",
        link: "/app/guides/zeroomega.md",
      },
      {
        text: "Using a Preconfigured Browser",
        link: "/app/guides/preconfigured_browser",
      },
      {
        text: "Guest Mode",
        link: "/app/guides/guest_mode",
      },
    ],
  },
  {
    text: "Configuration",
    items: [
      {
        text: "CA Certificate Management",
        link: "/app/guides/ca_certificate_managing",
      },
      {
        text: "Changing the Data Storage Location",
        link: "/app/guides/data_location",
      },
    ],
  },
  {
    text: "Networking",
    items: [
      {
        text: "Changing the Listening Address/Port",
        link: "/app/guides/listening_address",
      },
      {
        text: "Proxying Local Traffic",
        link: "/app/guides/proxy_local",
      },
      {
        text: "Domain Allowlist",
        link: "/app/guides/domain_allowlist",
      },
      {
        text: "Proxying WSL Traffic",
        link: "/app/guides/wsl",
      },
      {
        text: "Enabling/Disabling Invisible Proxying",
        link: "/app/guides/invisible_proxying",
      },
      {
        text: "Upstream to Another Proxy",
        link: "/app/guides/upstream",
      },
      {
        text: "Listening on Multiple Ports",
        link: "/app/guides/listening_ports",
      },
      {
        text: "DNS Rewrites",
        link: "/app/guides/dns_rewrites",
      },
    ],
  },
  {
    text: "Deployments",
    items: [
      {
        text: "Running Multiple Instances",
        link: "/app/guides/multiple_instances",
      },
      {
        text: "Running on a VPS",
        link: "/app/guides/vps",
      },
      {
        text: "Running in Docker",
        link: "/app/guides/docker",
      },
      {
        text: "Kali Linux",
        link: "/app/guides/kali_linux",
      },
      {
        text: "Parrot Security",
        link: "/app/guides/parrot_os",
      },
      {
        text: "Athena OS",
        link: "/app/guides/athena_os",
      },
      {
        text: "Exegol",
        link: "/app/guides/exegol",
      },
    ],
  },
  {
    text: "General Usage",
    items: [
      {
        text: "Navigating Caido",
        link: "/app/guides/navigation",
      },
      {
        text: "Customizing the User Interface",
        link: "/app/guides/ui",
      },
      {
        text: "Managing Elements",
        link: "/app/guides/elements",
      },
      {
        text: "Sorting Traffic Table Rows",
        link: "/app/guides/sorting",
      },
      {
        text: "Changing Request & Response View Modes",
        link: "/app/guides/request_response_modes",
      },
      {
        text: "Previewing Responses",
        link: "/app/guides/preview_responses",
      },
      {
        text: "Creating Shortcuts",
        link: "/app/guides/shortcuts",
      },
    ],
  },
  {
    text: "Sitemap",
    items: [
      {
        text: "Viewing a Sitemap",
        link: "/app/guides/sitemap_viewing",
      },
      {
        text: "Deleting a Sitemap",
        link: "/app/guides/sitemap_deleting",
      },
    ],
  },
  {
    text: "Scopes",
    items: [
      {
        text: "Defining a Scope",
        link: "/app/guides/scopes_defining",
      },
      {
        text: "Applying a Scope",
        link: "/app/guides/scopes_applying",
      },
      {
        text: "Managing Scopes",
        link: "/app/guides/scopes_managing",
      },
    ],
  },
  {
    text: "Filters",
    items: [
      {
        text: "Writing HTTPQL Queries",
        link: "/app/guides/filters_httpql",
      },
      {
        text: "Defining a Filter",
        link: "/app/guides/filters_defining",
      },
      {
        text: "Applying a Filter",
        link: "/app/guides/filters_applying",
      },
    ],
  },
  {
    text: "Intercept",
    items: [
      {
        text: "Intercepting Traffic",
        link: "/app/guides/intercept_traffic",
      },
    ],
  },
  {
    text: "HTTP History",
    items: [
      {
        text: "Filtering Traffic Table Rows",
        link: "/app/guides/http_history_filtering",
      },
      {
        text: "Viewing Modifications",
        link: "/app/guides/http_history_modifications",
      },
    ],
  },
  {
    text: "Match & Replace",
    items: [
      {
        text: "Selecting a Traffic Source",
        link: "/app/guides/match_replace_sources",
      },
      {
        text: "Adding a Header",
        link: "/app/guides/match_replace_header",
      },
      {
        text: "Using Capturing Groups",
        link: "/app/guides/match_replace_capturing",
      },
      {
        text: "Encoding Body Data",
        link: "/app/guides/match_replace_encoding",
      },
      {
        text: "Testing Rules",
        link: "/app/guides/match_replace_testing",
      },
    ],
  },
  {
    text: "Replay",
    items: [
      {
        text: "Sending Requests to Replay",
        link: "/app/guides/replay_requests",
      },
      {
        text: "Resending Requests",
        link: "/app/guides/replay_resending",
      },
      {
        text: "Using Workflows in Replay",
        link: "/app/guides/replay_workflows",
      },
      {
        text: "Using Environment Variables in Replay",
        link: "/app/guides/replay_environment_variables",
      },
    ],
  },
  {
    text: "Automate",
    items: [
      {
        text: "Sending Requests to Automate",
        link: "/app/guides/automate_requests",
      },
      {
        text: "Sending Payloads from a Wordlist",
        link: "/app/guides/automate_wordlists",
      },
      {
        text: "Sending Numerical Payloads",
        link: "/app/guides/automate_numerical",
      },
      {
        text: "Repeating Requests with No Payload",
        link: "/app/guides/automate_null",
      },
      {
        text: "Sending Multiple Payloads",
        link: "/app/guides/automate_multiple",
      },
      {
        text: "Preprocessing Payloads",
        link: "/app/guides/automate_preprocessors",
      },
      {
        text: "Avoiding Rate-Limiting Protections",
        link: "/app/guides/automate_rate_limiting",
      },
    ],
  },
  {
    text: "Workflows",
    items: [
      {
        text: "Creating Workflows",
        link: "/app/guides/workflows_creating",
      },
      {
        text: "Creating Findings",
        link: "/app/guides/workflows_findings",
      },
      {
        text: "Passing Data Between Nodes",
        link: "/app/guides/workflows_references",
      },
      {
        text: "Using the JavaScript Node",
        link: "/app/guides/workflows_javascript",
      },
      {
        text: "Using the Shell Node",
        link: "/app/guides/workflows_shell",
      },
    ],
  },
  {
    text: "Assistant",
    items: [
      {
        text: "Generating CSRF PoCs",
        link: "/app/guides/assistant_csrf",
      },
      {
        text: "Prompting the Assistant to Explain Requests",
        link: "/app/guides/assistant_explain",
      },
      {
        text: "Changing the LLM Model",
        link: "/app/guides/assistant_model",
      },
    ],
  },
  {
    text: "Environment",
    items: [
      {
        text: "Creating Environment Variables",
        link: "/app/guides/environment_variables",
      },
    ],
  },
  {
    text: "Search",
    items: [
      {
        text: "Filtering Traffic Table Rows",
        link: "/app/guides/search_filtering",
      },
      {
        text: "Viewing Modifications",
        link: "/app/guides/search_modifications",
      },
    ],
  },
  {
    text: "Exports",
    items: [
      {
        text: "Exporting Request Data",
        link: "/app/guides/exports_requests",
      },
    ],
  },
  {
    text: "Files",
    items: [
      {
        text: "Uploading Files",
        link: "/app/guides/files_uploading",
      },
    ],
  },
  {
    text: "Plugins",
    items: [
      {
        text: "Installing Plugins",
        link: "/app/guides/plugins_installing",
      },
      {
        text: "Enabling/Disabling Plugins",
        link: "/app/guides/plugins_managing",
      },
    ],
  },
  {
    text: "Workspace",
    items: [
      {
        text: "Saving Projects",
        link: "/app/guides/projects_backups",
      },
      {
        text: "Recovering Read-Only Projects",
        link: "/app/guides/projects_recovering",
      },
    ],
  },
  {
    text: "Advanced",
    items: [
      {
        text: "Deleting Data",
        link: "/app/guides/data_deleting",
      },
      {
        text: "Viewing Logs",
        link: "/app/guides/logs_viewing",
      },
    ],
  },
  {
    text: "Community",
    items: [
      {
        text: "Contributing to the Documentation",
        link: "/app/guides/documentation",
      },
      {
        text: "Joining Caido's Discord Server",
        link: "/app/guides/discord",
      },
    ],
  },
];
