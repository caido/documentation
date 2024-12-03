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
    text: "Configuration",
    items: [
      {
        text: "Changing the Listening Address/Port",
        link: "/guides/listening_address",
      },
      {
        text: "Installing the CA Certificate",
        link: "/guides/import_ca_certificate",
      },
      {
        text: "Configuring the Data Directory",
        link: "/guides/data_location",
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
