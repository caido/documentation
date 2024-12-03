import type { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Guides",
    items: [
      {
        text: "Installation",
        link: "/guides/",
      },
      {
        text: "Running on a VPS",
        link: "/guides/user_guide/vps",
      },
      {
        text: "Running in Docker",
        link: "/guides/user_guide/docker",
      },
      {
        text: "Proxying Local Traffic",
        link: "/guides/user_guide/proxy_local",
      },
    ],
  },
  {
    text: "Contributions",
    items: [
      {
        text: "Documentation",
        link: "/guides/contributions/documentation",
      },
    ],
  },
];
