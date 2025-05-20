import type { DefaultTheme } from "vitepress";

export const quickstartSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Quickstart",
    items: [
      {
        text: "Introduction",
        link: "/quickstart/",
      },
      {
        text: "Desktop Application Installation",
        items: [
          {
            text: "Windows",
            link: "/quickstart/beginner_guide/setup/windows",
          },
          {
            text: "Linux",
            link: "/quickstart/beginner_guide/setup/linux",
          },
          {
            text: "macOS",
            link: "/quickstart/beginner_guide/setup/mac",
          },
        ],
      },
      {
        text: "Setup",
        items: [
          {
            text: "Basic Configuration",
            link: "/quickstart/beginner_guide/setup/config",
          },
        ],
      },
      {
        text: "First Steps with Caido",
        items: [
          {
            text: "Creating Your First Project",
            link: "/quickstart/beginner_guide/first_steps_with_caido/project",
          },
          {
            text: "Capturing and Inspecting Traffic",
            link: "/quickstart/beginner_guide/first_steps_with_caido/traffic",
          },
          {
            text: "Forwarding and Modifying Requests Repeatedly",
            link: "/quickstart/beginner_guide/first_steps_with_caido/replay",
          },
          {
            text: "Automating Brute-Forcing/Fuzzing",
            link: "/quickstart/beginner_guide/first_steps_with_caido/automate",
          },
          {
            text: "Uploading Files for Use in Automate",
            link: "/quickstart/beginner_guide/first_steps_with_caido/file_upload",
          },
        ],
      },
      {
        text: "Support",
        items: [
          {
            text: "Common Errors and Solutions",
            link: "/quickstart/beginner_guide/getting_help/support",
          },
        ],
      },
    ],
  },
];
