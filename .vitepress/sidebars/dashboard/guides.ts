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
    text: "Users",
    items: [
      {
        text: "Applying for Education Plan",
        link: "/dashboard/guides/education_plan",
      },
      {
        text: "Creating a Personal Access Token",
        link: "/dashboard/guides/create_pat",
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
        text: "Creating a Registration Key",
        link: "/dashboard/guides/create_registration_key",
      },
    ],
  },
  {
    text: "Billing",
    items: [
      {
        text: "Obtaining Receipts",
        link: "/dashboard/guides/receipts",
      },
    ],
  },
];
