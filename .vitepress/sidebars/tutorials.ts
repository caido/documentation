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
    text: "Convert Workflows",
    items: [
      {
        text: "JWT Decode",
        link: "/tutorials/jwt_decode",
      },
    ],
  },
  {
    text: "Passive Workflows",
    items: [
      {
        text: "Add Header",
        link: "/tutorials/add_header",
      },
      {
        text: "Color Requests",
        link: "/tutorials/color_requests",
      },
    ],
  },
];
