import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Yunzai-Bot-Web-Docs',
  description: '云崽机器人文档，根据Q群622381845中机器人编写',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
        // 嵌套 Group - 最大深度为 2
        {
          text: 'Group',
          children: [
            {
              text: 'SubGroup',
              children: ['/group/sub/foo.md', '/group/sub/bar.md'],
            },
          ],
        },
        // 控制元素何时被激活
        {
          text: 'Group 2',
          children: [
            {
              text: 'Always active',
              link: '/',
              // 该元素将一直处于激活状态
              activeMatch: '/',
            },
            {
              text: 'Active on /foo/',
              link: '/not-foo/',
              // 该元素在当前路由路径是 /foo/ 开头时激活
              // 支持正则表达式
              activeMatch: '^/foo/',
            },
          ],
        },
      ],
    }),
  
})