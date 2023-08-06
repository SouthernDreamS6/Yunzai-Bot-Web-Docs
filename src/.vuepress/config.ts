//  从 vuepress 导入 defineUserConfig 并包裹配置对象
import { defineUserConfig } from "vuepress";
// 在这里引入了主题
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  // 此处放置配置
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Yunzai-Bot-Web-Docs",
      description: "云崽机器人在线文档，根据QQ群622381845中机器人编写。",
    },
    "/en/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
  },

  theme,
  plugins: [
    //  搜索插件searchProPlugin
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
