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
        text: "Running on a VPS",
        link: "/guides/user_guide/vps",
      },
      {
        text: "Running in Docker",
        link: "/guides/user_guide/docker",
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
        text: "CA Certificate",
        items: [
          {
            text: "Installing the CA Certificate",
            link: "/guides/import_ca_certificate",
          },
          {
            text: "CA Certificate Management",
            link: "/guides/tls",
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
    text: "Features",
    items: [
      {
        text: "Overview",
        items: [
          {
            text: "Sitemap",
            link: "/guides/sitemap",
          },
          {
            text: "Sorting",
            link: "/guides/sorting",
          },
          {
            text: "Scope",
            link: "/guides/scope",
          },
          {
            text: "Filters",
            link: "/guides/filters",
          },
        ],
      },
      {
        text: "Proxy",
        items: [
          {
            text: "Intercept",
            link: "/guides/intercept",
          },
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
            text: "Replay",
            link: "/guides/replay",
          },
          {
            text: "Using Environment Variables in Replay",
            link: "/guides/replay_environment_variables",
          },
          {
            text: "Automate",
            link: "/guides/automate",
          },
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
          {
            text: "Exports",
            link: "/guides/exports",
          },
        ],
      },
      {
        text: "Workspace",
        items: [
          {
            text: "Files",
            link: "/guides/files",
          },
          {
            text: "Plugins",
            link: "/guides/plugins",
          },
          {
            text: "Projects",
            link: "/guides/projects",
          },
          {
            text: "Backups",
            link: "/guides/backups",
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
