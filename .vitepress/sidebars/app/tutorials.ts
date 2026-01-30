import type { DefaultTheme } from "vitepress";

export const tutorialsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Tutorials",
    items: [
      {
        text: "Introduction",
        link: "/app/tutorials/",
      },
    ],
  },
  {
    text: "Configuration",
    items: [
      {
        text: "Invisible Proxying",
        link: "/app/tutorials/invisible_proxy",
      },
      {
        text: "Exposing an Instance to the Internet",
        link: "/app/tutorials/instance_internet",
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
            link: "/app/tutorials/android_configuration",
          },
          {
            text: "Adding Caido's CA Certificate to the System-Store",
            link: "/app/tutorials/add_certificate",
          },
          {
            text: "Modifying an Android Application",
            link: "/app/tutorials/modifying_apk",
          },
        ],
      },
      {
        text: "iOS",
        items: [
          {
            text: "iOS Setup and Configuration",
            link: "/app/tutorials/ios_configuration",
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
        link: "/app/tutorials/autorize",
      },
      {
        text: "Scanner",
        link: "/app/tutorials/scanner",
      },
      {
        text: "Shift",
        link: "/app/tutorials/shift",
        items: [
          {
            text: "Using LiteLLM with Shift",
            link: "/app/tutorials/litellm",
          },
        ],
      },
    ],
  },
  {
    text: "Match & Replace",
    items: [
      {
        text: "Enable Feature Flags",
        link: "/app/tutorials/feature_flags",
      },
    ],
  },
  {
    text: "Workflows",
    items: [
      {
        text: "Send a Notification to Discord",
        link: "/app/tutorials/discord_notification",
      },
      {
        text: "Add a Header",
        link: "/app/tutorials/add_header",
      },
      {
        text: "Color Request Rows",
        link: "/app/tutorials/color_requests",
      },
      {
        text: "Refresh Authentication",
        link: "/app/tutorials/refresh_authentication",
      },
      {
        text: "Decode a JWT",
        link: "/app/tutorials/decode_jwt",
      },
      {
        text: "MD5 Hash",
        link: "/app/tutorials/md5_hash",
      },
      {
        text: "Resign AWS Requests",
        link: "/app/tutorials/aws_signature",
      },
    ],
  },
];
