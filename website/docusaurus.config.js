module.exports={
  "title": "Rucio Documentation",
  "url": "https://rucio.github.io",
  "baseUrl": "/documentation",
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
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
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
  "plugins": [
    [
      "docusaurus-plugin-remote-content",
      {
        name: "jupyterlab-extension",
        sourceBaseUrl: "https://raw.githubusercontent.com/rucio/jupyterlab-extension/refs/heads/master/",
        outDir: "../docs/_jupyterlab-extension",
        documents: ["CONFIGURATION.md"],
        modifyContent: (filename, content) => {
          // Remove first-level headings from the fetched markdown files
          // Define a regex to match H1 lines
          const h1Regex = /^#\s+(.*)$/m;

          // Remove the H1 line from the content
          let cleanContent = content.replace(h1Regex, '');

          const remoteLinkBase = 'https://github.com/rucio/jupyterlab-extension/blob/master';
          
          // 3. Fix Relative Links
          // Match: [Link Text](URL)
          // We use a callback function to check the URL before replacing
          cleanContent = cleanContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
            
            // CASE A: Ignore absolute links (http/https), anchors (#), and emails (mailto)
            if (url.startsWith('http') || url.startsWith('#') || url.startsWith('mailto:')) {
              return match;
            }

            // CASE B: Handle specific relative prefixes like './'
            // This cleans up the path so you don't get "blob/master/./doc/file"
            let cleanPath = url;
            if (cleanPath.startsWith('./')) {
              cleanPath = cleanPath.substring(2);
            }
            
            // Construct the new absolute URL
            // Ensure there is no double slash if your base ends with /
            const separator = remoteLinkBase.endsWith('/') ? '' : '/';
            const newUrl = `${remoteLinkBase}${separator}${cleanPath}`;

            return `[${text}](${newUrl})`;
          });

          // Return the modified content
          return {
            filename,
            content: `${cleanContent}`
          };
        },
      },
    ],
  ],
  "themeConfig": {
    "navbar": {
      "title": "Rucio Documentation",
      "logo": {
        "src": "img/rucio_horizontaled_black.svg",
        "srcDark": "img/rucio_horizontaled_white.svg"
      },
      "items": [
        {
          "to": "pathname:///html/client_api/accountclient.html",
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
