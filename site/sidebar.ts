import type { Sidebar } from 'vocs'

export const sidebar = {
  '/docs/': [
    {
      text: 'Introduction',
      items: [
        { text: 'Why appToss', link: '/docs/introduction' },
        { text: 'Getting Started', link: '/docs/getting-started' },
        { text: 'FAQ', link: '/docs/faq' },
        { text: 'Roadmap', link: '/docs/roadmap' },
      ],
    },
    {
      text: 'Protocol Concepts',
      items: [],
    },
    {
      text: 'appToss DAO',
      items: [],
    },
    {
      text: 'Guides',
      items: [],
    },
    {
      text: 'SDK',
      items: [],
    },
    {
      text: 'Smart Contracts',
      items: [],
    },
    {
      text: 'Glossary',
      items: [
        { text: 'Terms', link: '/docs/glossary' },
      ],
    },
  ],
} as const satisfies Sidebar