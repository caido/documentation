import type { DefaultTheme } from "vitepress";

export const coreSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Core",
    items: [
      { text: "Overview", link: "/burp-suite/core/overview" },
      { text: "Tools", link: "/burp-suite/core/tools" },
      { text: "Target & Scope", link: "/burp-suite/core/target-and-scope" },
      { text: "Scans", link: "/burp-suite/core/scans" },
      { text: "Reporting", link: "/burp-suite/core/reporting" },
      {
        text: "Project & Configuration",
        link: "/burp-suite/core/project-and-configuration",
      },
      { text: "Browser & Setup", link: "/burp-suite/core/browser-and-setup" },
      { text: "AI", link: "/burp-suite/core/ai" },
    ],
  },
];
