#!/usr/bin/node

// Script to inject code examples into a OpenApi spec file
// Base taken from https://github.com/Redocly/redoc/issues/15

const openAPISnippet = require('openapi-snippet');
const yaml = require('js-yaml');
const fs = require('fs');

const targets = ['shell_curl', 'python_requests', 'node_fetch'];

const addRequestSamples = (swaggerJson) => {
  const swagger = JSON.parse(JSON.stringify(swaggerJson));

  for (const singlePath in swagger.paths) {
    Object.keys(swagger.paths[singlePath])
      .forEach((method) => {
        try {
          const snippets = openAPISnippet.getEndpointSnippets(
            swagger,
            singlePath,
            method,
            targets,
          );

          if (swagger.paths[singlePath][method]['x-codeSamples'] == null) {
            swagger.paths[singlePath][method]['x-codeSamples'] = [];
          }

          snippets.snippets.forEach((snippet) => {
              swagger.paths[singlePath][method]['x-codeSamples'].push({
              lang: snippet.title.split(' ')[0],
              source: decodeURIComponent(snippet.content),
            });
          });
        } catch (error) {
          console.log(error);
        }
      });
  }

  return swagger;
};

const args = process.argv.slice(2);
const openApi = yaml.load(fs.readFileSync(args[0], 'utf8'));

console.log(yaml.dump(addRequestSamples(openApi)));
