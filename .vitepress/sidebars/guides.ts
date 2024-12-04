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
        text: "Proxying Local Traffic",
        link: "/guides/user_guide/proxy_local",
      },
    ],
  },
  {
    text: "Configuration",
    items: [
      {
        text: "Changing the Listening Address/Port",
        link: "/guides/listening_address",
      },
      {
        text: "Installing the CA Certificate",
        link: "/guides/import_ca_certificate",
      },
      {
        text: "Configuring the Data Directory",
        link: "/guides/data_location",
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
    text: "Contributions",
    items: [
      {
        text: "Documentation",
        link: "/guides/contributions/documentation",
      },
    ],
  },
];
