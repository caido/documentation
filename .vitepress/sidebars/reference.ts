import {
    DefaultTheme
} from "vitepress";

export const referenceSidebar: DefaultTheme.SidebarItem[] = [{
        text: "Introduction",
        items: [{
                text: 'Directory',
                link: '/reference/'
            },
            {
                text: 'Common Errors',
                link: '/reference/common_errors'
            },
        ]
    },
    {
        text: 'Configuration',
        items: [{
                text: 'Listening Address/Port',
                link: '/reference/configuration/listening_address'
            },
            {
                text: 'CA Certificate',
                link: '/reference/configuration/import_ca_certificate'
            },
            {
                text: 'Data Location',
                link: '/reference/configuration/data_location'
            }
        ]
    },


    {
        text: 'Features',
        items: [{
                text: 'Overview',
                items: [{
                        text: 'Sitemap',
                        link: '/reference/features/overview/sitemap'
                    },{
                        text: 'Sorting',
                        link: '/reference/features/overview/sorting'
                    },
                    {
                        text: 'Scope',
                        link: '/reference/features/overview/scope'
                    },
                    {
                        text: 'Filters',
                        link: '/reference/features/overview/filters'
                    }
                ]
            },
            {
                text: 'Proxy',
                items: [{
                        text: 'Intercept',
                        link: '/reference/features/proxy/intercept'
                    },
                    {
                        text: 'HTTP History',
                        link: '/reference/features/proxy/http_history'
                    },
                    {
                        text: 'WS History',
                        link: '/reference/features/proxy/ws_history'
                    },
                    {
                        text: 'Match & Replace',
                        link: '/reference/features/proxy/match_replace'
                    }
                ]
            },
            {
                text: 'Testing',
                items: [{
                        text: 'Replay',
                        link: '/reference/features/testing/replay'
                    },
                    {
                        text: 'Automate',
                        link: '/reference/features/testing/automate'
                    },
                    {
                        text: 'Assistant',
                        link: '/reference/features/testing/assistant'
                    },
                    {
                        text: 'Workflows',
                        link: '/reference/features/testing/workflows',
                        items: [{
                                text: 'Passive',
                                link: '/reference/features/testing/workflows/passive'
                            },
                            {
                                text: 'Convert',
                                link: '/reference/features/testing/workflows/convert'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Logging',
                items: [{
                        text: 'Search',
                        link: '/reference/features/logging/search'
                    },
                    {
                        text: 'Exports',
                        link: '/reference/features/logging/exports'
                    }
                ]
            },
            {
                text: 'Workspace',
                items: [{
                        text: 'Files',
                        link: '/reference/features/workspace/files'
                    },
                    {
                        text: 'Projects',
                        link: '/reference/features/workspace/projects'
                    },
                    {
                        text: 'Backups',
                        link: '/reference/features/workspace/backups'
                    }
                ]
            }
        ]
    },
    {
        text: 'Plugins',
        items: [{
                text: 'Custom CSS',
                link: '/reference/plugins/custom_css'
            },
            {
                text: '(WIP) Custom JS',
                link: '/reference/plugins/custom_js'
            },
            {
                text: '(WIP) Custom Workflow Nodes',
                link: '/reference/plugins/custom_workflow_nodes'
            }
        ]
    },

]
