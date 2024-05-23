import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Caido",
  titleTemplate: "Documentation",
  description: "Official Caido Documentation",

  srcDir: 'src',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ["script", { "data-api": "/stats/event", src: "/stats/script.js", "defer":"", "data-domain":"docs.caido.io" }]
  ],
  ignoreDeadLinks: "localhostLinks",

  themeConfig: {
    logo: '/logo.png',

    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/beginner_guide/welcome_to_caido/onboarding' },
      { text: 'Reference', link: '/reference/configuration/data_location' },
    ],

    sidebar: {
        '/getting_started/': [{
            text: "Getting Started",
            items: [{
                    text: 'Welcome to Caido',
                    items: [{
                        text: 'Introduction to Caido',
                        link: '/beginner_guide/welcome_to_caido/onboarding'
                    }]
                },
                {
                    text: 'Setup',
                    items: [{
                            text: 'Downloading and Installing',
                            link: '/beginner_guide/setup/install'
                        },
                        {
                            text: 'Basic Configuration',
                            link: '/beginner_guide/setup/config'
                        },
                        {
                            text: 'Uploading Files for Use in Automate',
                            link: '/beginner_guide/setup/file_upload'
                        }
                    ]
                },
                {
                    text: 'First Steps with Caido',
                    items: [{
                            text: 'Creating Your First Project',
                            link: '/beginner_guide/first_steps_with_caido/project'
                        },
                        {
                            text: 'Capturing and Inspecting Traffic',
                            link: '/beginner_guide/first_steps_with_caido/traffic'
                        },
                        {
                            text: 'Forwarding and Modifying Requests Repeatedly',
                            link: '/beginner_guide/first_steps_with_caido/replay'
                        },
                        {
                            text: 'Automating Brute-Forcing/Fuzzing',
                            link: '/beginner_guide/first_steps_with_caido/automate'
                        }
                    ]
                },
                {
                    text: 'Support',
                    items: [{
                        text: 'Common Errors and Solutions',
                        link: '/beginner_guide/getting_help/support'
                    }]
                }
            ]
        }],
        '/reference/': [{
                text: 'Concepts',
                items: [{
                        text: 'Instances',
                        link: '/concepts/instances'
                    },
                    {
                        text: 'HTTPQL',
                        link: '/concepts/httpql'
                    },
                    {
                        text: 'Workflows',
                        link: '/concepts/workflows',
                        items: [{
                            text: 'Nodes',
                            link: '/concepts/nodes'
                        }]
                    },
                    {
                        text: 'Tabs',
                        link: '/concepts/tabs'
                    },
                    {
                        text: 'Layout',
                        link: '/concepts/layout'
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
            }],
        '/': [{
                text: 'Introduction',
                link: '/introduction'
            },
            {
                text: 'Documentation Directory',
                link: '/doc_directory'
            },
            {
                text: 'FAQ',
                link: '/faq'
            },
            {
                text: 'Common Errors',
                link: '/common_errors'
            },
            {
                text: 'Report a Bug',
                link: '/report_bug'
            },
            {
                text: 'User Guide',
                items: [{
                        text: 'Installation',
                        link: '/user_guide/installation'
                    },
                    {
                        text: 'Running on a VPS',
                        link: '/user_guide/vps'
                    },
                    {
                        text: 'Running in Docker',
                        link: '/user_guide/docker'
                    }
                ]
            },
                        {
                text: 'Show Case',
                items: [{
                        text: 'Overviews',
                        link: '/show_case/overviews'
                    },
                    {
                        text: 'Interviews',
                        link: '/show_case/interviews'
                    },
                    {
                        text: 'Tutorials',
                        link: '/show_case/tutorials'
                    }
                ]
            },
            ,
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
            {
                text: 'Community Contributions',
                link: '/contributions/documentation'
            }
        ]
    },

    socialLinks: [
      { icon: 'discord', link: 'https://links.caido.io/discord' },
      { icon: 'twitter', link: 'https://twitter.com/caidoio' },
      { icon: 'github', link: 'https://github.com/caido/caido' },
    ]
  }
})
