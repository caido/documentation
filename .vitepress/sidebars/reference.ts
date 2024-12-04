import type { DefaultTheme } from "vitepress";

export const referenceSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Introduction",
    items: [
      {
        text: "Directory",
        link: "/reference/",
      },
      {
        text: "Common Errors",
        link: "/reference/common_errors",
      },
    ],
  },
  
  {
    text: "Workflows",
    items: [
      {
        text: "Convert",
        items: [
          {
            text: "Coding Nodes",
            link: "/reference/workflows/convert/coding_nodes",
          },
        ],
      },
      {
        text: "SDK",
        link: "/reference/workflows/sdk",
      },
    ],
  },
];
