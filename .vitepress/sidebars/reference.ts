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
        text: "Convert Nodes",
        link: "/reference/workflow_convert_nodes",
      },
      {
        text: "SDK",
        link: "https://developer.caido.io/reference/sdks/workflow/",
      },
    ],
  },
];
