import { defineConfig } from 'dumi';
const repo = 'airkit-ui';
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
    'airkit-ui': require.resolve('./.dumi/airkit-ui.js'),
  },
  themeConfig: {
    name: 'airkit-ui',
    logo: logo,
    rtl: true,
    socialLinks: {
      github: 'https://github.com/Shnnli/airkit-ui',
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
      "<p> Copyright © 2023 | Made with ❤ by <a href='https://github.com/Shnnli/airkit-ui'>Shnnli<a><p>",
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
