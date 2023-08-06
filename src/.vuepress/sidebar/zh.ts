import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "快速上手",
      icon: "",
      prefix: "demo/",
      link: "demo/",
      children: [
        {
          text: "快速了解Yunzai机器人",
          icon: "",
          link: "About-Yunzai.md",
        },
      ]
    },
    {
      text: "文档",
      icon: "",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
