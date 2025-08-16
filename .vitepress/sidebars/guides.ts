import type { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Guides",
    items: [
      {
        text: "Introduction",
        link: "/guides/",
      },
      {
        text: "Installation",
        link: "/guides/installation",
      },
      {
        text: "Environments",
        items: [
          {
            text: "Running on a VPS",
            link: "/guides/vps",
          },
          {
            text: "Running in Docker",
            link: "/guides/docker",
          },
        ],
      },
      {
        text: "Troubleshooting",
        link: "/guides/troubleshooting",
      },
      {
        text: "Distributions",
        link: "/guides/distributions",
        items: [
          {
            text: "Parrot Security",
            link: "/guides/distributions/parrot_os",
          },
          {
            text: "Athena OS",
            link: "/guides/distributions/athena_os",
          },
        ],
      },
    ],
  },
  {
    text: "Configuration",
    items: [
      {
        text: "CA Certificate",
        items: [
          {
            text: "Importing Caido's CA Certificate",
            link: "/guides/import_ca_certificate",
          },
          {
            text: "CA Certificate Management",
            link: "/guides/tls",
          },
        ],
      },
      {
        text: "Network",
        items: [
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
        ],
      },
      {
        text: "Other",
        items: [
          {
            text: "Creating Shortcuts",
            link: "/guides/shortcuts",
          },
          {
            text: "Configuring the Data Directory",
            link: "/guides/data_location",
          },
          {
            text: "Debugging",
            link: "/guides/debugging",
          },
          {
            text: "Deleting Data",
            link: "/guides/deleting_data",
          },
          {
            text: "Guest Mode",
            link: "/guides/guest_mode",
          },
        ],
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
        text: "Changing Request & Response View Modes",
        link: "/guides/request_response_modes",
      },
      {
        text: "Customizing the User Interface",
        link: "/guides/ui",
      },
      {
        text: "Customizing Tables",
        link: "/guides/tables",
      },
      {
        text: "Managing Elements",
        link: "/guides/elements",
      },
      {
        text: "Previewing Responses",
        link: "/guides/preview_responses",
      },
    ],
  },
  {
    text: "Sitemap",
    items: [
      {
        text: "Viewing a Sitemap",
        link: "/guides/sitemap_view",
      },
      {
        text: "Deleting a Sitemap",
        link: "/guides/sitemap_delete",
      },
    ],
  },
  {
    text: "Scopes",
    items: [
      {
        text: "Defining a Scope",
        link: "/guides/scopes_define",
      },
      {
        text: "Applying a Scope",
        link: "/guides/scopes_apply",
      },
      {
        text: "Managing Scopes",
        link: "/guides/scopes_manage",
      },
    ],
  },
  {
    text: "Filters",
    items: [
      {
        text: "Defining a Filter",
        link: "/guides/filters_define",
      },
      {
        text: "Applying a Filter",
        link: "/guides/filters_apply",
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
    text: "Replay",
    items: [
      {
        text: "Sending Requests to Replay",
        link: "/guides/replay_requests",
      },
      {
        text: "Resending Requests",
        link: "/guides/replay_resend",
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
        link: "/guides/automate_rate",
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
        link: "/guides/files_upload",
      },
    ],
  },
  {
    text: "Projects",
    items: [
      {
        text: "Saving Projects",
        link: "/guides/projects_backups",
      },
    ],
  },
  {
    text: "Features",
    items: [
      {
        text: "Proxy",
        items: [
          {
            text: "HTTP History",
            link: "/guides/http_history",
          },
          {
            text: "WS History",
            link: "/guides/ws_history",
          },
          {
            text: "Match & Replace",
            link: "/guides/match_replace",
          },
        ],
      },
      {
        text: "Testing",
        items: [
          {
            text: "Workflows",
            link: "/guides/workflows",
          },
          {
            text: "Assistant",
            link: "/guides/assistant",
          },
        ],
      },
      {
        text: "Logging",
        items: [
          {
            text: "Search",
            link: "/guides/search",
          },
          {
            text: "Findings",
            link: "/guides/findings",
          },
        ],
      },
      {
        text: "Workspace",
        items: [
          {
            text: "Plugins",
            link: "/guides/plugins",
          },
          {
            text: "Projects",
            link: "/guides/projects",
          },
        ],
      },
    ],
  },
  {
    text: "Community",
    items: [
      {
        text: "Contributing to the Documentation",
        link: "/guides/contributions/documentation",
      },
      {
        text: "Joining Caido's Discord Server",
        link: "/guides/discord",
      },
    ],
  },
];
