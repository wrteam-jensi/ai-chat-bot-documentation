// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ai chat-bot Documentation",
  tagline: "Documentation for ai chat-bot",
  favicon: "img/favicon.ico",
  url: 'https://wrteam-jensi.github.io',
  baseUrl: '/ai-chat-bot-documentation',
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  organizationName: 'wrteam-jensi', // Updated to match your actual GitHub org
  projectName: 'ai-chat-bot-documentation', // Updated to match your actual repo name

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    require.resolve("@easyops-cn/docusaurus-search-local"),
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/ai-chat-bot.svg",
      navbar: {
        // title: "eDemand",
        logo: {
          alt: "ai chat-bot Logo",
          src: "img/ai-chat-bot-logo/Logo.svg",
          srcDark: "img/ai-chat-bot-logo/Logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "adminSidebar",
            position: "left",
            label: "Admin",
          },
          {
            to: "/docs/website-setup/web-intro",
            label: "Website",
            position: "left",
          },
       
          {
            type: "docSidebar",
            sidebarId: "featuresSidebar",
            position: "left",
            label: "Features",
          },
         
        
          {
            to: "/docs/faqs",
            label: "FAQs",
            position: "left",
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright ${new Date().getFullYear()} ai chat-bot.`,
      },
      colorMode: {
        defaultMode: "dark",
      },
      prism: {
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;