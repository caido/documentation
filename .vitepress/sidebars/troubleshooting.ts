import type { DefaultTheme } from "vitepress";

export const troubleshootingSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Troubleshooting",
    items: [
      {
        text: "Introduction",
        link: "/troubleshooting/",
      },
      {
        text: "Download & Installation",
        link: "/troubleshooting/download_installation",
      },
      {
        text: "Startup",
        link: "/troubleshooting/startup",
      },
      {
        text: "Authentication",
        link: "/troubleshooting/authentication",
      },
      {
        text: "Runtime",
        link: "/troubleshooting/runtime",
      },
    ],
  },
  {
    text: "Reporting a Bug",
    items: [
      {
        text: "Submitting a Report",
        link: "/troubleshooting/report_bug",
      },
    ],
  },
];
