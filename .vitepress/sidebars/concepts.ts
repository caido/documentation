import {
    DefaultTheme
} from "vitepress";

export const conceptsSidebar: DefaultTheme.SidebarItem[] = [{
        text: "Introduction",
        items: [{
            text: 'Directory',
            link: '/concepts/'
        }]
    },
    {
        text: 'Essentials',
        items: [{
                text: 'CLI vs Desktop',
                link: '/concepts/essentials/cli_vs_desktop'
            },
            {
                text: 'Instances',
                link: '/concepts/essentials/instances'
            },
            {
                text: 'HTTPQL',
                link: '/concepts/essentials/httpql'
            },
            {
                text: 'Workflows',
                link: '/concepts/essentials/workflows',
                items: [{
                    text: 'Nodes',
                    link: '/concepts/essentials/workflows/nodes/nodes'
                },
                {
                    text: 'JavaScript in Caido',
                    link: '/concepts/essentials/workflows/js_in_caido'
            }]
            },
            {
                text: 'Tabs',
                link: '/concepts/essentials/tabs'
            },
            {
                text: 'Layout',
                link: '/concepts/essentials/layout'
            }
        ]
    },
    {
        text: 'Plugins',
        items: [{
                text: 'Plugin Basics',
                link: '/concepts/plugins/plugin_basics.md',
                items: [{
                    text: 'Tooling',
                    link: '/concepts/plugins/plugin_tooling.md'
                }]
            },
            {
                text: 'Frontend',
                link: '/concepts/plugins/frontend.md',
                items: [{
                    text: 'Frontend Plugin SDK',
                    link: '/concepts/plugins/frontend_sdk.md'
                }]
            },
            {
                text: 'Backend',
                link: '/concepts/plugins/backend.md',
                items: [{
                    text: 'Backend Plugin SDK',
                    link: '/concepts/plugins/backend_sdk.md'
                }]
            }
        ]
    },
    {
        text: 'Internals',
        items: [{
                text: 'Files',
                link: '/concepts/internals/files'
            },
            {
                text: 'Cloud',
                link: '/concepts/internals/cloud'
            },
            {
                text: 'Authentication',
                link: '/concepts/internals/authentication'
            }
        ]
    },
]
