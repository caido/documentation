import type { DefaultTheme } from "vitepress";

export const troubleshootingSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Troubleshooting",
    items: [
      {
        text: "Introduction",
        link: "/app/troubleshooting/",
      },
      {
        text: "Download Issues",
        link: "/app/troubleshooting/download",
      },
      {
        text: "Installation Issues",
        link: "/app/troubleshooting/installation",
      },
      {
        text: "Startup Issues",
        link: "/app/troubleshooting/startup",
      },
      {
        text: "Login Issues",
        link: "/app/troubleshooting/authentication",
      },
      {
        text: "In-app Issues",
        link: "/app/troubleshooting/in_app",
      },
    ],
  },
  {
    text: "Reporting a Bug",
    items: [
      {
        text: "Enabling Debug Mode",
        link: "/app/troubleshooting/debugging",
      },
      {
        text: "Submitting a Report",
        link: "/app/troubleshooting/report_bug",
      },
    ],
  },
];
