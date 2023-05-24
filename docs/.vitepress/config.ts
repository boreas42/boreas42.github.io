import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "影歌的杂货铺",
  description: "记录前端知识和生活分享",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "前端知识整理", link: "/FE-knowledge-base/JavaScript" },
      { text: "前端开发资源", link: "/FE-development-resources/blog-collect" },
      { text: "有趣的网站", link: "/funning-websites/index" },
      { text: "关于我", link: "/about" },
    ],

    sidebar: {
      "FE-knowledge-base": [
        {
          text: "前端知识整理",
          items: [
            { text: "JS", link: "/FE-knowledge-base/JavaScript" },
            { text: "css", link: "/FE-knowledge-base/CSS" },
          ],
        },
      ],
      "FE-development-resources": [
        {
          text: "前端开发资源",
          items: [
            {
              text: "前端开发者博客整理",
              link: "/FE-development-resources/blog-collect",
            },
            {
              text: "浏览器插件整理",
              link: "/FE-development-resources/browser-plug-in",
            },
            {
              text: "VSCode插件整理",
              link: "/FE-development-resources/vscode-plug-in",
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/boreas42" }],
  },
});
