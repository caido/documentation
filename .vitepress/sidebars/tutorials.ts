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
            text: "Proxying iOS Traffic",
            link: "/tutorials/ios_device",
          },
        ],
      },
    ],
  },
  {
    text: "Active Workflows",
    items: [
      {
        text: "Sending a notification to Discord",
        link: "/tutorials/discord_notification",
      },
    ],
  },
  {
    text: "Passive Workflows",
    items: [
      {
        text: "Add Header",
        link: "/tutorials/add_header",
      },
      {
        text: "Color Requests",
        link: "/tutorials/color_requests",
      },
    ],
  },
];
