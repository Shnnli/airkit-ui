import { defineConfig } from 'dumi';
const repo = 'fast-ui';
const logo =
  process.env.NODE_ENV === 'production'
    ? `/${repo}/logo.png`
    : '/docs-dist/logo.png';

export default defineConfig({
  favicons: [logo],
  outputPath: 'docs-dist',
  title: 'fast-ui',
  themeConfig: {
    name: 'fast-ui',
    logo: logo,
    rtl: true,
    nav: {
      'zh-CN': [
        {
          title: '指南',
          link: '/guide',
        },
        {
          title: '组件',
          link: '/components/foo',
        },
        {
          title: 'GitHub',
          link: 'https://github.com/Shnnli/fast-ui',
        },
      ],
      'en-US': [
        {
          title: '指南',
          link: '/guide',
        },
        {
          title: '组件',
          link: '/components/foo',
        },
        {
          title: 'GitHub',
          link: 'https://github.com/Shnnli/fast-ui',
        },
      ],
    },
    footer:
      "<p> Copyright © 2023 | Made with ❤ by <a href='https://github.com/Shnnli/fast-ui'>Shnnli<a><p>",
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/docs-dist/',
  publicPath:
    process.env.NODE_ENV === 'production' ? `/${repo}/` : '/docs-dist/',
});
