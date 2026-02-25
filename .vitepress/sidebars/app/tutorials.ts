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
    text: "Automation",
    items: [
      {
        text: "Orchestrating Caido Headless",
        link: "/app/tutorials/headless_orchestration",
      },
      {
        text: "Using Caido in GitHub Actions",
        link: "/app/tutorials/github_action",
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
            text: "Introduction",
            link: "/app/tutorials/android_introduction",
          },
          {
            text: "Virtual Device",
            items: [
              {
                text: "Setup & Configuration",
                link: "/app/tutorials/android_virtual_device"
              },
              {
                text: "Proxying Mobile Chrome Browser Traffic",
                link: "/app/tutorials/android_browser_virtual",
              },
              {
                text: "Adding Caido's CA Certificate to the System Partition",
                link: "/app/tutorials/android_add_certificate",
              },
            ]
          },
          {
            text: "Physical Device",
            items: [
              {
                text: "Setup & Configuration",
                link: "/app/tutorials/android_physical_device"
              },
              {
                text: "Proxying Mobile Chrome Browser Traffic",
                link: "/app/tutorials/android_browser_physical",
              },
            ]
          },
          {
            text: "Modifying an Android Application: Virtual & Physical Devices",
            link: "/app/tutorials/modifying_apk",
          },
          {
            text: "Troubleshooting",
            link: "/app/tutorials/android_troubleshooting",
          }
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
        text: "Drop",
        link: "/app/tutorials/drop",
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
