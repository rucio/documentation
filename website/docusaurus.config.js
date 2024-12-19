module.exports={
  "title": "Rucio Documentation",
  "url": "https://rucio.github.io",
  "baseUrl": "/documentation/",
  "organizationName": "rucio",
  "projectName": "documentation",
  "scripts": [
    "https://buttons.github.io/buttons.js",
  ],
  "stylesheets": [
    "/documentation/css/custom.css",
    "https://fonts.googleapis.com/css?family=Inter:400,500,700&display=swap",
    "https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap",
    "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
  ],
  "favicon": "img/android-chrome-512x512.png",
  "customFields": {
    "disableHeaderTitle": true,
    "users": [],
    "separateCss": "static/rucio/",
    "disableTitleTagline": true,
    "preconnect": [
      "https://fonts.gstatic.com"
    ]
  },
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "throw",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "routeBasePath": "/",
          "sidebarPath": "../website/sidebars.json",
          'editUrl': 'https://github.com/rucio/documentation/tree/main/docs',
        },
        "blog": {},
        "theme": {
          "customCss": [require.resolve('./src/css/customTheme.css')]
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Rucio Documentation",
      "logo": {
        "src": "img/rucio_horizontaled_black.svg",
        "srcDark": "img/rucio_horizontaled_white.svg"
      },
      "items": [
        {
          "to": "pathname:///html/site/accountclient.html",
          "label": "Python Client API",
          "position": "left"
        },
        {
          "to": "bin/rucio",
          "label": "Command Line Client",
          "position": "left"
        }, 
        {
          "to": "pathname:///html/rest_api_doc.html",
          "label": "REST API",
          "position": "left"
        }, 
      ]
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2023 CERN",
      "logo": {
        "src": "img/rucio_horizontaled_black.svg",
        "srcDark": "img/rucio_horizontaled_white.svg"
      }
    },
    "algolia": {
      "apiKey": "43793c746780cfec79feebd0f9745923",
      "appId": "NDP6TP9QYQ",
      "indexName": "rucio-cern",
      "placeholder": "Ask me something"
    }
  }
}
