import { defineConfig } from "vitepress";

export default defineConfig({
  title: "midwayjs-wechat",
  description: "一个关于midwayjs的微信API库",
  lang: "zh-cmn-Hans",
  srcDir: "views",
  lastUpdated: true,
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/renjiali" }],
    nav: [
      { text: "指南", link: "/guide" },
      { text: "更新日志", link: "/releases" },
    ],
    sidebar: [
      {
        text: "指南",
        items: [
          { text: "为什么使用这个插件？", link: "/guide/why" },
          { text: "开始", link: "/guide/" },
          { text: "配置", link: "/guide/config" },
        ],
      },
    ],
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "medium",
        timeStyle: "medium",
      },
    },
    footer: {
      copyright: 'Copyright © 2024-present <a href="https://github.com/renjiali">RenJiaLi</a>',
    },
    search: {
      provider: "local",
    },
  },
});
