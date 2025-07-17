import type { Sidebar } from 'vocs'

export const sidebar = {
  '/docs/': [
    {
      text: 'Protocol Concepts',
      items: [
        { text: 'Bearium Protocol in 5 Minutes', link: '/docs/introduction' },
        { text: 'FAQ', link: '/docs/faq' },
      ],
    },
    {
      text: 'Move Modules',
      items: [
        { text: 'Overview', link: '/docs/modules' },
      ],
    },
    {
      text: 'Glossary',
      items: [
        { text: 'Terms', link: '/docs/glossary' },
      ],
    },
  ],
} as const satisfies Sidebar