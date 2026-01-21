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
    text: "Guides",
    items: [
      {
        text: "Creating a team",
        link: "/dashboard/guides/create-team",
      },
      {
        text: "Setting up payment",
        link: "/dashboard/guides/setup-payment",
      },
      {
        text: "Assigning licenses",
        link: "/dashboard/guides/assign-licenses",
      },
    ],
  },
];
