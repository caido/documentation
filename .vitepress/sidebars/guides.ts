import type { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Guides",
    items: [
      {
        text: "Installation",
        link: "/guides/",
      },
      {
        text: "Importing Caido's CA Certificate",
        link: "/guides/ca_certificate_importing",
      },
      {
        text: "Using a Preconfigured Browser",
        link: "/guides/preconfigured_browser",
      },
      {
        text: "Guest Mode",
        link: "/guides/guest_mode",
      },
    ],
  },
  {
    text: "Configuration",
    items: [
      {
        text: "CA Certificate Management",
        link: "/guides/ca_certificate_managing",
      },
      {
        text: "Domain Allowlist",
        link: "/guides/domain_allowlist",
      },
      {
        text: "Proxying Local Traffic",
        link: "/guides/proxy_local",
      },
      {
        text: "Changing the Listening Address/Port",
        link: "/guides/listening_address",
      },
      {
        text: "Listening on Multiple Ports",
        link: "/guides/listening_ports",
      },
      {
        text: "Upstream to Another Proxy",
        link: "/guides/upstream",
      },
      {
        text: "Enabling Invisible Proxying",
        link: "/guides/invisible_proxying",
      },
      {
        text: "DNS Rewrites",
        link: "/guides/dns_rewrites",
      },
      {
        text: "Changing the Data Storage Location",
        link: "/guides/data_location",
      },
    ],
  },
  {
    text: "Deployments",
    items: [
      {
        text: "Running on a VPS",
        link: "/guides/vps",
      },
      {
        text: "Running in Docker",
        link: "/guides/docker",
      },
      {
        text: "Parrot Security",
        link: "/guides/parrot_os",
      },
      {
        text: "Athena OS",
        link: "/guides/athena_os",
      },
    ],
  },
  {
    text: "General Usage",
    items: [
      {
        text: "Navigating Caido",
        link: "/guides/navigation",
      },
      {
        text: "Customizing the User Interface",
        link: "/guides/ui",
      },
      {
        text: "Managing Elements",
        link: "/guides/elements",
      },
      {
        text: "Sorting Traffic Table Rows",
        link: "/guides/sorting",
      },
      {
        text: "Changing Request & Response View Modes",
        link: "/guides/request_response_modes",
      },
      {
        text: "Previewing Responses",
        link: "/guides/preview_responses",
      },
      {
        text: "Creating Shortcuts",
        link: "/guides/shortcuts",
      },
    ],
  },
  {
    text: "Sitemap",
    items: [
      {
        text: "Viewing a Sitemap",
        link: "/guides/sitemap_viewing",
      },
      {
        text: "Deleting a Sitemap",
        link: "/guides/sitemap_deleting",
      },
    ],
  },
  {
    text: "Scopes",
    items: [
      {
        text: "Defining a Scope",
        link: "/guides/scopes_defining",
      },
      {
        text: "Applying a Scope",
        link: "/guides/scopes_applying",
      },
      {
        text: "Managing Scopes",
        link: "/guides/scopes_managing",
      },
    ],
  },
  {
    text: "Filters",
    items: [
      {
        text: "Defining a Filter",
        link: "/guides/filters_defining",
      },
      {
        text: "Applying a Filter",
        link: "/guides/filters_applying",
      },
    ],
  },
  {
    text: "Intercept",
    items: [
      {
        text: "Intercepting Traffic",
        link: "/guides/intercept_traffic",
      },
    ],
  },
  {
    text: "HTTP History",
    items: [
      {
        text: "Filtering Traffic Table Rows",
        link: "/guides/http_history_filtering",
      },
      {
        text: "Viewing Modifications",
        link: "/guides/http_history_modifications",
      },
    ],
  },
  {
    text: "Match & Replace",
    items: [
      {
        text: "Adding a Header",
        link: "/guides/match_replace_header",
      },
      {
        text: "Using Capturing Groups",
        link: "/guides/match_replace_capturing",
      },
      {
        text: "Encoding Body Data",
        link: "/guides/match_replace_encoding",
      },
      {
        text: "Testing Rules",
        link: "/guides/match_replace_testing",
      },
    ],
  },
  {
    text: "Replay",
    items: [
      {
        text: "Sending Requests to Replay",
        link: "/guides/replay_requests",
      },
      {
        text: "Resending Requests",
        link: "/guides/replay_resending",
      },
      {
        text: "Using Workflows in Replay",
        link: "/guides/replay_workflows",
      },
      {
        text: "Using Environment Variables in Replay",
        link: "/guides/replay_environment_variables",
      },
    ],
  },
  {
    text: "Automate",
    items: [
      {
        text: "Sending Requests to Automate",
        link: "/guides/automate_requests",
      },
      {
        text: "Sending Payloads from a Wordlist",
        link: "/guides/automate_wordlists",
      },
      {
        text: "Sending Numerical Payloads",
        link: "/guides/automate_numerical",
      },
      {
        text: "Repeating Requests with No Payload",
        link: "/guides/automate_null",
      },
      {
        text: "Sending Multiple Payloads",
        link: "/guides/automate_multiple",
      },
      {
        text: "Preprocessing Payloads",
        link: "/guides/automate_preprocessors",
      },
      {
        text: "Avoiding Rate-Limiting Protections",
        link: "/guides/automate_rate_limiting",
      },
    ],
  },
  {
    text: "Workflows",
    items: [
      {
        text: "Creating Workflows",
        link: "/guides/workflows_creating",
      },
      {
        text: "Creating Findings",
        link: "/guides/workflows_findings",
      },
      {
        text: "Passing Data Between Nodes",
        link: "/guides/workflows_references",
      },
    ],
  },
  {
    text: "Assistant",
    items: [
      {
        text: "Generating CSRF PoCs",
        link: "/guides/assistant_csrf",
      },
      {
        text: "Prompting the Assistant to Explain Requests",
        link: "/guides/assistant_explain",
      },
      {
        text: "Changing the LLM Model",
        link: "/guides/assistant_model",
      },
    ],
  },
  {
    text: "Environment",
    items: [
      {
        text: "Creating Environment Variables",
        link: "/guides/environment_variables",
      },
    ],
  },
  {
    text: "Search",
    items: [
      {
        text: "Filtering Traffic Table Rows",
        link: "/guides/search_filtering",
      },
      {
        text: "Viewing Modifications",
        link: "/guides/search_modifications",
      },
    ],
  },
  {
    text: "Exports",
    items: [
      {
        text: "Exporting Request Data",
        link: "/guides/exports_requests",
      },
    ],
  },
  {
    text: "Files",
    items: [
      {
        text: "Uploading Files",
        link: "/guides/files_uploading",
      },
    ],
  },
  {
    text: "Plugins",
    items: [
      {
        text: "Installing Plugins",
        link: "/guides/plugins_installing",
      },
    ],
  },
  {
    text: "Workspace",
    items: [
      {
        text: "Saving Projects",
        link: "/guides/projects_backups",
      },
      {
        text: "Recovering Read-Only Projects",
        link: "/guides/projects_recovering",
      },
    ],
  },
  {
    text: "Advanced",
    items: [
      {
        text: "Deleting Data",
        link: "/guides/data_deleting",
      },
    ],
  },
  {
    text: "Community",
    items: [
      {
        text: "Contributing to the Documentation",
        link: "/guides/documentation",
      },
      {
        text: "Joining Caido's Discord Server",
        link: "/guides/discord",
      },
    ],
  },
];
