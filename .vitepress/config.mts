import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'AI Short Video Factory - 短视频工厂',
  description: '一键生成产品营销与泛内容短视频，AI批量自动剪辑，高颜值跨平台桌面端工具',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/icon.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/icon.png',

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/YILS-LIN/short-video-factory',
      },
    ],
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        siteTitle: 'AI Short Video Factory',
        nav: [
          { text: '首页', link: '/' },
          { text: '软件介绍', link: '/introduction' },
          { text: '使用手册', link: '/manual/' },
          { text: '💖 请作者喝杯咖啡', link: '/donate' },
        ],
        sidebar: [
          // {
          //   text: "Examples",
          //   items: [
          //     { text: "Markdown Examples", link: "/markdown-examples" },
          //     { text: "Runtime API Examples", link: "/api-examples" },
          //   ],
          // },
        ],

        search: {
          options: {
            translations: {
              button: {
                buttonText: '全文搜索',
                buttonAriaLabel: '搜索',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                displayDetails: '查看详细信息',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色主题',
        darkModeSwitchTitle: '切换到暗色主题',
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        outline: {
          label: '本页大纲',
          level: 'deep',
        },
      },
    },
    // en: {
    //   label: "English",
    //   lang: "en",
    // },
  },
})
