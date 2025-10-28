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
    text: "Plugins",
    items: [
      {
        text: "Autorize",
        link: "/tutorials/autorize",
      },
      {
        text: "Scanner",
        link: "/tutorials/scanner",
      },
      {
        text: "Shift",
        link: "/tutorials/shift",
      },
    ],
  },
  {
    text: "Workflows",
    items: [
      {
        text: "Send a Notification to Discord",
        link: "/tutorials/discord_notification",
      },
      {
        text: "Add a Header",
        link: "/tutorials/add_header",
      },
      {
        text: "Color Request Rows",
        link: "/tutorials/color_requests",
      },
      {
        text: "Refresh Authentication",
        link: "/tutorials/refresh_authentication",
      },
      {
        text: "Decode a JWT",
        link: "/tutorials/decode_jwt",
      },
      {
        text: "MD5 Hash",
        link: "/tutorials/md5_hash",
      },
      {
        text: "Resign AWS Requests",
        link: "/tutorials/aws_signature",
      },
    ],
  },
];
