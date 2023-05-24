import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "影歌的杂货铺",
  description: "记录前端知识和生活分享",
  head:[['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '前端知识整理', link: '/FE-knowledge-base/index' },
      { text: '前端开发资源', link: '/FE-development-resources/index' },
      { text: '有趣的网站', link: '/funning-websites/index' },
      { text: '关于我', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/boreas42' }
    ]
  }
})
