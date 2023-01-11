// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Project Vecni',
  tagline: 'Dokumentacija Servera',
  url: 'https://project-vecni.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/vecnilogo.png',
  organizationName: 'project-vecni', // Usually your GitHub org/user name.
  projectName: 'project-vecni.github.io', // Usually your repo name.

  //   plugins: ['@docusaurus/'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/project-vecni/project-vecni.github.io/tree/main/',
          showLastUpdateTime: true,
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
        disableSwitch: true,
      },
      navbar: {
        title: 'Project Vecni',
        logo: {
          alt: 'Logo',
          src: '/img/vecnilogo.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            href: 'https://discord.gg/HQQ3N7hGZg',
            label: 'Discord',
            position: 'left',
          },
          {
            // Still have to add the actual search :(
            type: 'search',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua'],
      },
      algolia: {
        appId: '8XXXVNJ7UW',
        apiKey: '3680aeb79049744c6629dd0abd2f5dfe',
        indexName: 'overextended',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
