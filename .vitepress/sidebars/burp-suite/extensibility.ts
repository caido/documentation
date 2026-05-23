import type { DefaultTheme } from "vitepress";

export const extensibilitySidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Extensibility",
    items: [
      { text: "Overview", link: "/burp-suite/extensibility/overview" },
      { text: "Extensions", link: "/burp-suite/extensibility/extensions" },
      { text: "Bambdas", link: "/burp-suite/extensibility/bambdas" },
      {
        text: "Custom Scan Checks",
        link: "/burp-suite/extensibility/custom-scan-checks",
      },
    ],
  },
];
