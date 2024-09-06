import { defineConfig } from 'vocs'
import { sidebar } from './site/sidebar'

export default defineConfig({
  iconUrl: '/aptos-coin-3D.svg',
  logoUrl: '/aptos-coin-3D.svg',
  ogImageUrl: 'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  rootDir: 'site',
  sidebar,
  title: 'appToss',
  topNav: [
    { text: 'Docs', link: '/docs/getting-started', match: '/docs' },
    { text: 'Launch MVP', link: 'https://mvp.apptoss.dev' },
  ],
})
