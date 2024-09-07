import { DefaultTheme } from "vitepress";

export const conceptsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Introduction",
    items: [
      {
        text: "Directory",
        link: "/concepts/",
      },
    ],
  },
  {
    text: "Essentials",
    items: [
      {
        text: "CLI vs Desktop",
        link: "/concepts/essentials/cli_vs_desktop",
      },
      {
        text: "Instances",
        link: "/concepts/essentials/instances",
      },
      {
        text: "HTTPQL",
        link: "/concepts/essentials/httpql",
      },
      {
        text: "Workflows",
        link: "/concepts/essentials/workflows",
        items: [
          {
            text: "Nodes",
            link: "/concepts/essentials/workflows/nodes/nodes",
          },
          {
            text: "JavaScript in Caido",
            link: "/concepts/essentials/workflows/js_in_caido",
          },
        ],
      },
      {
        text: "Tabs",
        link: "/concepts/essentials/tabs",
      },
      {
        text: "Layout",
        link: "/concepts/essentials/layout",
      },
    ],
  },
  {
    text: "Plugins",
    items: [
      {
        text: "Basics",
        link: "/concepts/plugins/plugin_basics",
        items: [
          {
            text: "Frontend",
            link: "/concepts/plugins/frontend",
          },
          {
            text: "Backend",
            link: "/concepts/plugins/backend",
          },
        ],
      },
      {
        text: "Frontend SDK",
        link: "/concepts/plugins/frontend_sdk",
      },
      {
        text: "Backend SDK",
        link: "/concepts/plugins/backend_sdk",
      },
      {
        text: "Tooling",
        link: "/concepts/plugins/plugin_tooling",
      },
      {
        text: "Store",
        link: "/concepts/plugins/store",
        items: [
          {
            text: "Developer Policy",
            link: "/concepts/plugins/developer_policy",
          },
        ],
      },
    ],
  },
  {
    text: "Internals",
    items: [
      {
        text: "Files",
        link: "/concepts/internals/files",
      },
      {
        text: "GraphQL",
        link: "/concepts/internals/graphql",
      },
      {
        text: "Cloud",
        link: "/concepts/internals/cloud",
      },
      {
        text: "Authentication",
        link: "/concepts/internals/authentication",
      },
    ],
  },
];
