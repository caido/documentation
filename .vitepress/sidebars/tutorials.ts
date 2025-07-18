import type { DefaultTheme } from "vitepress";

export const tutorialsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Tutorials",
    items: [
      {
        text: "Introduction",
        link: "/tutorials/",
      },
    ],
  },
  {
    text: "Configuration",
    items: [
      {
        text: "Invisible Proxying",
        link: "/tutorials/invisible_proxy",
      },
    ],
  },
  {
    text: "Convert Workflows",
    items: [
      {
        text: "JWT Decode",
        link: "/tutorials/jwt_decode",
      },
      {
        text: "MD5 Hash",
        link: "/tutorials/md5_hash",
      },
      {
        text: "AWS Signature",
        link: "/tutorials/aws_signature",
      },
    ],
  },
  {
    text: "Proxying Mobile Traffic",
    items: [
      {
        text: "Android",
        items: [
          {
            text: "Android Setup and Configuration",
            link: "/tutorials/android_configuration",
          },
          {
            text: "Adding Caido's CA Certificate to the System-Store",
            link: "/tutorials/add_certificate",
          },
          {
            text: "Modifying an Android Application",
            link: "/tutorials/modifying_apk",
          },
        ],
      },
      {
        text: "iOS",
        items: [
          {
            text: "iOS Setup and Configuration",
            link: "/tutorials/ios_configuration",
          },
        ],
      },
    ],
  },
  {
    text: "Active Workflows",
    items: [
      {
        text: "Sending a Notification to Discord",
        link: "/tutorials/discord_notification",
      },
    ],
  },
  {
    text: "Passive Workflows",
    items: [
      {
        text: "Adding a Header",
        link: "/tutorials/add_header",
      },
      {
        text: "Coloring Requests",
        link: "/tutorials/color_requests",
      },
      {
        text: "Refreshing Authentication",
        link: "/tutorials/refresh_authentication",
      },
    ],
  },
];
