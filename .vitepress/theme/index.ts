// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'virtual:uno.css'
import './style.scss'

import BadgeDisplay from './components/BadgeDisplay.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-info-after': () => h(BadgeDisplay),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme
