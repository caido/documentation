import type { DefaultTheme } from "vitepress";

export const tutorialsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Tutorials",
    items: [
      {
        text: "Introduction",
        link: "/tutorials/",
      },
    ],
  },
  {
    text: "Example Workflows",
    items: [
      {
        text: "JWT Decode",
        link: "/tutorials/workflows/jwt_decode",
      },
      {
        text: "Add Header & Resend Request",
        link: "/tutorials/workflows/add_header",
      },
    ],
  },
];
