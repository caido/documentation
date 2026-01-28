import type { DefaultTheme } from "vitepress";

export const dashboardSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Dashboard",
    items: [
      {
        text: "Introduction",
        link: "/dashboard/",
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
];
