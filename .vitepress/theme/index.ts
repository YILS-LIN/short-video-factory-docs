// https://vitepress.dev/guide/custom-theme
import { h, onMounted, onUnmounted, onUpdated } from 'vue'
import { inBrowser, type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import 'virtual:uno.css'
import './style.scss'

import BadgeDisplay from './components/BadgeDisplay.vue'
import { bindFancybox, destroyFancybox } from './utils/image-preview'

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
    if (inBrowser) {
      router.onBeforeRouteChange = () => {
        destroyFancybox() // 销毁图片查看器
      }
      router.onAfterRouteChange = () => {
        bindFancybox() // 绑定图片查看器
      }
    }
  },
  setup() {
    onMounted(() => {
      bindFancybox()
    })
    onUnmounted(() => {
      destroyFancybox()
    })
  },
} satisfies Theme
