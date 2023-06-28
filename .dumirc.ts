import { defineConfig } from 'dumi';
const repo = 'fast-ui';
const logo =
  process.env.NODE_ENV === 'production' ? `/${repo}/logo.png` : '/logo.png';
export default defineConfig({
  favicons: [logo],
  outputPath: 'docs-dist',
  hash: false,
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'components' }],
    // codeBlockMode: 'passive',
  },
  alias: {
    'fast-ui': require.resolve('./.dumi/fastui.js'),
  },
  themeConfig: {
    name: 'fast-ui',
    logo: logo,
    rtl: true,
    socialLinks: {
      github: 'https://github.com/Shnnli/fast-ui',
      // weibo: 'https://xxxx',
      // twitter: 'https://xxxx',
      // gitlab: 'https://xxxx',
      // facebook: 'https://xxxx',
      // zhihu: 'https://xxxx',
      // yuque: 'https://xxxx',
      // linkedin: 'https://xxxx',
    },
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
      ],
    },
    footer:
      "<p> Copyright © 2023 | Made with ❤ by <a href='https://github.com/Shnnli/fast-ui'>Shnnli<a><p>",
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
