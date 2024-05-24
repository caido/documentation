import { DefaultTheme } from "vitepress";

export const referenceSidebar: DefaultTheme.Sidebar = [
  { text: "Introduction", items: [
    { text: 'Directory', link: '/reference/' },
  ]},
  {
    text: "Debugging",
    items: [
      { text: 'Common Errors', link: '/reference/debugging/errors' },
    ]
  },
{
                text: 'Configuration',
                items: [{
                        text: 'Listening Address/Port',
                        link: '/configuration/listening_address'
                    },
                    {
                        text: 'CA Certificate',
                        link: '/configuration/import_ca_certificate'
                    },
                    {
                        text: 'Data Location',
                        link: '/configuration/data_location'
                    }
                ]
            },


        {
        text: 'Features',
        items: [{
                text: 'Overview',
                items: [{
                        text: 'Sitemap',
                        link: '/features/overview/sitemap'
                    },
                    {
                        text: 'Scope',
                        link: '/features/overview/scope'
                    },
                    {
                        text: 'Filters',
                        link: '/features/overview/filters'
                    }
                ]
            },
            {
                text: 'Proxy',
                items: [{
                        text: 'Intercept',
                        link: '/features/proxy/intercept'
                    },
                    {
                        text: 'HTTP History',
                        link: '/features/proxy/http_history'
                    },
                    {
                        text: 'WS History',
                        link: '/features/proxy/ws_history'
                    },
                    {
                        text: 'Match & Replace',
                        link: '/features/proxy/match_replace'
                    }
                ]
            },
                        {
                text: 'Testing',
                items: [{
                        text: 'Replay',
                        link: '/features/testing/replay'
                    },
                    {
                        text: 'Automate',
                        link: '/features/testing/automate'
                    },
                    {
                        text: 'Assistant',
                        link: '/features/testing/assistant'
                    },
                    {
                        text: 'Workflows',
                        link: '/features/testing/workflows',
                        items: [{
                                text: 'Passive',
                                link: '/features/testing/workflows/passive'
                            },
                            {
                                text: 'Convert',
                                link: '/features/testing/workflows/convert'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Logging',
                items: [{
                        text: 'Search',
                        link: '/features/logging/search'
                    },
                    {
                        text: 'Exports',
                        link: '/features/logging/exports'
                    }
                ]
            },
            {
                text: 'Workspace',
                items: [{
                        text: 'Files',
                        link: '/features/workspace/files'
                    },
                    {
                        text: 'Projects',
                        link: '/features/workspace/projects'
                    },
                    {
                        text: 'Backups',
                        link: '/features/workspace/backups'
                    }
                ]
            }
        ]
    },
{
                text: 'Plugins',
                items: [{
                        text: 'Custom CSS',
                        link: '/plugins/custom_css'
                    },
                    {
                        text: '(WIP) Custom JS',
                        link: '/plugins/custom_js'
                    },
                    {
                        text: '(WIP) Custom Workflow Nodes',
                        link: '/plugins/custom_workflow_nodes'
                    }
                ]
            },

]
