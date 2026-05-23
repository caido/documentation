import type { DefaultTheme } from "vitepress";

export const coreSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Core",
    items: [
      { text: "Overview", link: "/burp-suite/core/overview" },
      { text: "Browser & Setup", link: "/burp-suite/core/browser-and-setup" },
      {
        text: "Project & Configuration",
        link: "/burp-suite/core/project-and-configuration",
      },
      { text: "Target & Scope", link: "/burp-suite/core/target-and-scope" },
      { text: "Tools", link: "/burp-suite/core/tools" },
      { text: "AI", link: "/burp-suite/core/ai" },
      { text: "Scans", link: "/burp-suite/core/scans" },
      { text: "Reporting", link: "/burp-suite/core/reporting" },
    ],
  },
];
