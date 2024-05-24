import {
    DefaultTheme
} from "vitepress";

export const guidesSidebar: DefaultTheme.Sidebar = [{
    text: 'User Guide',
    items: [{
            text: 'Installation',
            link: '/guides/installation'
        },
        {
            text: 'Running on a VPS',
            link: '/guides/vps'
        },
        {
            text: 'Running in Docker',
            link: '/guides/docker'
        }
    ]
},
  { text: "Developer Guide", items: [{
    text: "Documentation",
    link: "/guides/developer_guide/documentation"
  }
  ]}
]
