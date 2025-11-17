/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    function (context, options) {
      return {
        name: 'docusaurus-plugin-dotenv',
        configureWebpack(config, isServer) {
          const Dotenv = require('dotenv-webpack');
          return {
            ...config,
            plugins: [
              ...config.plugins,
              new Dotenv({
                path: './.env',
              }),
            ],
          };
        },
      };
    },
  ],
  title: 'DocDeez',
  tagline: 'Documentation for HelenKella Godmode',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://helenkella.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
      rel: 'stylesheet',
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'helzkelz', // Usually your GitHub org/user name.
  projectName: 'docdeez', // Usually your repo name.

  onBrokenLinks: 'warn',

  markdown: {
    format: 'md',
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'neunuc — nūc',
        logo: {
          alt: 'neunuc — nūc Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'godmode',
            position: 'left',
            label: 'Godmode',
          },
          {
            href: 'https://github.com/helzkelz/docdeez',
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
                label: 'Godmode',
                to: '/docs/godmode/godmode-overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/helzkelz/docdeez',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HelenKella.`,
      },

      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

export default config;
