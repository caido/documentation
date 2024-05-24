import { defineConfig } from 'vitepress'

import { quickstartSidebar, referenceSidebar, guidesSidebar, conceptsSidebar } from './sidebars'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Caido",
  titleTemplate: "Documentation",
  description: "Official Caido Documentation",

  srcDir: 'src',
  appearance: "force-dark",

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ["script", { "data-api": "/stats/event", src: "/stats/script.js", "defer":"", "data-domain":"docs.caido.io" }]
  ],
  ignoreDeadLinks: "localhostLinks",

  themeConfig: {
    logo: {
      src: '/logo.png',
      "no-shadow": true,
    },

    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Quickstart', link: '/quickstart/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Concepts', link: '/concepts/' },
      { text: 'FAQ', link: '/faq' },
      { text: "Report a bug", link: "/report_bug" }
    ],

    sidebar: {
        '/quickstart/': quickstartSidebar,
        '/reference/': referenceSidebar,
        '/guides/': guidesSidebar,
        '/concepts/': conceptsSidebar,
    },

    socialLinks: [
      { icon: 'discord', link: 'https://links.caido.io/discord' },
      { icon: 'twitter', link: 'https://twitter.com/caidoio' },
      { icon: 'github', link: 'https://github.com/caido/caido' },
    ]
  }
})
