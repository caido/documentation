import type { DefaultTheme } from "vitepress";

export const referenceSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Reference",
    items: [
      {
        text: "Introduction",
        link: "/reference/",
      },
      {
        text: "Common Errors",
        link: "/reference/common_errors",
      },
      {
        text: "HTTPQL",
        link: "/reference/httpql",
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
  {
    text: "Internals",
    items: [
      {
        text: "Files",
        link: "/reference/internal_files",
      },
    ],
  },
];
