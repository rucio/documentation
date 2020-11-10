/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
  title: 'Rucio Documentation', // Title for your website.
  url: 'https://rucio.github.io', // Your website URL
  baseUrl: '/documentation/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'documentation',
  organizationName: 'rucio',
  cname: "rucio.cern.ch",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'index', label: 'Docs'},
    {href: 'https://rucio.readthedocs.io/_/downloads/en/next/pdf/', label: 'Downloads'},
    {href: 'https://twiki.cern.ch/twiki/bin/view/AtlasComputing/AtlasDistributedComputing', label: 'Wiki'},
    {href: 'https://arxiv.org/abs/1902.09857', label: 'Scientific articles'},
  ],

  //Disabling header title

  disableHeaderTitle: true,

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/wide_logo2.png',
  footerIcon: 'img/wide_logo2.png',
  favicon: 'img/wide_logo2.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2C312E',
    secondaryColor: '#72C3E7',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} CERN`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

// Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

// On page navigation for the current documentation page.

  onPageNav: 'separate',

// No .html extensions for paths.

  cleanUrl: true,

// Collapsible Side Navigation Bar

  docsSideNavCollapsible: true,

// Social media handles in the footer

  socialMedia: {
    twitter: 'RucioData',
    github: 'rucio',
},

//Separating Sphinx CSS from the rest of the documentation

separateCss: "static/rucio/",

//Disabling the Tagline

disableTitleTagline: true,

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
