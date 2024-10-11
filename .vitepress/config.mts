import { defineConfig } from "vitepress";

export default defineConfig({
  title: "midwayjs-wechat",
  description: "一个关于midwayjs的微信API库",
  lang: "zh-cmn-Hans",
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/renjiali" }],
    nav: [
      { text: "微信登录", link: "/" },
      { text: "微信支付", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "介绍",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
  },
});
