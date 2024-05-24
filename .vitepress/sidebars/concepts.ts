import { DefaultTheme } from "vitepress";

export const conceptsSidebar: DefaultTheme.Sidebar = [
  { text: "Introduction", items: [
    { text: 'Directory', link: '/reference/' }
  ]},
{
        text: 'Essentials',
        items: [{
                text: 'Instances',
                link: '/reference/concepts/instances'
            },
            {
                text: 'HTTPQL',
                link: '/reference/concepts/httpql'
            },
            {
                text: 'Workflows',
                link: '/reference/concepts/workflows',
                items: [{
                    text: 'Nodes',
                    link: '/reference/concepts/nodes'
                }]
            },
            {
                text: 'Tabs',
                link: '/reference/concepts/tabs'
            },
            {
                text: 'Layout',
                link: '/reference/concepts/layout'
            }
        ]
    },
      {
        text: 'Internals',
        items: [{
                text: 'Files',
                link: '/internals/files'
            },
            {
                text: 'Cloud',
                link: '/internals/cloud'
            },
            {
                text: 'Authentication',
                link: '/internals/authentication'
            }
        ]
    },
  ]
