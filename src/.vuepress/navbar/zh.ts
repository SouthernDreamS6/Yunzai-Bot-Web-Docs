import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "立即加群！",
    icon: "book",
    link: "https://qm.qq.com/cgi-bin/qm/qr?k=bb3EshFima8HNooN5SuXHwDX6NUfrzT3&jump_from=webapi&authKey=Y4tY8Dgs6Lz88zGMPSqAp7aSkfUa8Vy1JFqT/Kry+/jpATMNt0xRcGD1/lZvmbTI",
  },
]);
