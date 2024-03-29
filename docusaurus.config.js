// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const hightlightWords = require('./src/remark/rehype-highlight-word');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pagoda Indexer Docs',
  tagline: 'A warm place for indexer builders',
  url: 'https://near-indexers.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'near', // Usually your GitHub org/user name.
  projectName: 'indexers-docs', // Usually your repo name.
  trailingSlash: false,
  scripts: [
    "/js/mixpanel.js",
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/near/indexers-docs/tree/main/',
          remarkPlugins: [hightlightWords],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/near/indexers-docs/tree/main/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/monokai-sublime.css'),
          ],
        },
      }),
    ],
  ],

  plugins: [
    [
      'content-docs',
      {
        id: 'tutorials',
        path: 'tutorials',
        routeBasePath: 'tutorials',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexPages: true,
        docsRouteBasePath: ['/'],
        docsDir: ["docs", "tutorials"],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'Pagoda Indexer Docs',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/tutorials/intro',
            position: 'left',
            label: 'Tutorials',
            activeBaseRegex: `/tutorials/`,
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/near/indexers-docs/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Tutorials',
                to: '/tutorials/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/nearprotocol',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/near/indexers-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pagoda, Inc. Built with Docusaurus.<br /> <a href="https://www.flaticon.com/free-stickers/summer" title="summer stickers">Summer stickers created by Stickers - Flaticon</a>`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust'],
      },
      announcementBar: {
        id: 'lake_framework_announcement',
        content:
          'We have released <a target="_blank" rel="noopener noreferrer" href="https://gov.near.org/t/announcement-near-lake-framework-brand-new-word-in-indexer-building-approach/17668">NEAR Lake Framework</a> - a brand new word in indexer building approach</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
    }),
};

module.exports = config;
