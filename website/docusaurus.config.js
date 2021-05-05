module.exports={
  "title": "Rucio Documentation",
  "url": "https://rucio.github.io",
  "baseUrl": "/documentation/",
  "editUrl": "https://github.com/rucio/documentation/docs/",
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
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "routeBasePath": "/",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {},
        "theme": {
          "customCss": "../src/css/customTheme.css"
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
          "to": "rucio_client_api",
          "label": "Client API",
          "position": "left"
        },
        {
          "to": "rucio_rest_api",
          "label": "REST API",
          "position": "left"
        }
      ]
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 CERN",
      "logo": {
        "src": "img/rucio_horizontaled_black.svg",
        "srcDark": "img/rucio_horizontaled_white.svg"
      }
    },
    "algolia": {
      "apiKey": "04e5d623b96121df11ac440e51fc8956",
      "indexName": "rucio-cern",
      "algoliaOptions": {},
      "placeholder": "Ask me something"
    }
  }
}
