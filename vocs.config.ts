import { defineConfig } from 'vocs'

export default defineConfig({
  iconUrl: {
    light: '/aptos-icon-light.svg',
    dark: '/aptos-icon-dark.svg',
  },
  logoUrl: {
    light: '/aptos-logo-light.svg',
    dark: '/aptos-logo-dark.svg',
  },
  ogImageUrl: 'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  rootDir: 'site',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
  ],
  title: 'Aptos DX',
  topNav: [
    { text: 'Blog', link: '/blog' },
  ],
})
