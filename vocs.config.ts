import { defineConfig } from 'vocs'
import { sidebar } from './site/sidebar'

export default defineConfig({
  iconUrl: '/aptos-coin-3D.svg',
  logoUrl: {
    light: '/appToss_WHT.svg',
    dark: '/appToss_BLK.svg',
  },
  ogImageUrl: 'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  rootDir: 'site',
  sidebar,
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/apptoss/marketplace',
    },
  ],
  title: 'appToss Skin Marketplace',
  topNav: [
    { text: 'Docs', link: '/docs/introduction', match: '/docs' },
    { text: 'Launch MVP', link: 'https://marketplace.apptoss.dev' },
  ],
})
