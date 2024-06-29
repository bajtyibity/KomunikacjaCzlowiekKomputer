const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}/home` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7119';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/symptoms",
      "/diagnozas"
    ],
    target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
