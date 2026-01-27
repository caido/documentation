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
    text: "Team Accounts",
    items: [
      {
        text: "Creating a Team",
        link: "/dashboard/guides/create_team",
      },
      {
        text: "Licensing",
        link: "/dashboard/guides/licensing",
      },
    ],
  },
];
