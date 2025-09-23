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
        text: "Download Issues",
        link: "/troubleshooting/download",
      },
      {
        text: "Installation Issues",
        link: "/troubleshooting/installation",
      },
      {
        text: "Startup Issues",
        link: "/troubleshooting/startup",
      },
      {
        text: "Login Issues",
        link: "/troubleshooting/authentication",
      },
      {
        text: "In-app Issues",
        link: "/troubleshooting/in_app",
      },
    ],
  },
  {
    text: "Reporting a Bug",
    items: [
      {
        text: "Enabling Debug Mode",
        link: "/troubleshooting/debugging",
      },
      {
        text: "Submitting a Report",
        link: "/troubleshooting/report_bug",
      },
    ],
  },
];
