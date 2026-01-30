import type { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Guides",
    items: [
      {
        text: "Introduction",
        link: "/dashboard/guides/",
      },
    ],
  },
  {
    text: "Teams",
    items: [
      {
        text: "Creating a Team",
        link: "/dashboard/guides/create_team",
      },
      {
        text: "Managing Licenses",
        link: "/dashboard/guides/licensing",
      },
    ],
  },
  {
    text: "Workspaces",
    items: [
      {
        text: "Create registration keys",
        link: "/dashboard/guides/registration_keys",
      },
    ],
  },
];
