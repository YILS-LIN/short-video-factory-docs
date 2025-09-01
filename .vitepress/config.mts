import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'AI Short Video Factory - 短视频工厂',
  description: '一键生成产品营销与泛内容短视频，AI批量自动剪辑，高颜值跨平台桌面端工具',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/icon.png' }],
  ],
  lastUpdated: true,
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

    editLink: {
      pattern: 'https://github.com/YILS-LIN/short-video-factory-docs/edit/main/:path',
    },

    footer: {
      copyright: 'Copyright © 2025-present YILS',
    },
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
          { text: '💖 请作者喝杯咖啡', link: '/donate/' },
          { text: '博客', link: 'https://yils.blog' },
        ],
        sidebar: {
          '/manual/': [
            {
              text: '目录',
              items: [{ text: '软件主界面', link: '/manual/' }],
            },
          ],
          '/donate/': [
            {
              text: '目录',
              items: [
                { text: '💖 请作者喝杯咖啡', link: '/donate/' },
                { text: '千古留名(捐赠者留言板)', link: '/donate/list' },
              ],
            },
          ],
        },

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
        returnToTopLabel: '返回顶部',
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        outline: {
          label: '本页大纲',
          level: 'deep',
        },
        editLink: {
          text: '为此页提供修改建议',
        },
        lastUpdatedText: '最后更新于',
        notFound: {
          linkLabel: '返回主页',
          linkText: '返回主页',
        },
      },
    },
    // en: {
    //   label: "English",
    //   lang: "en",
    // },
  },
})
