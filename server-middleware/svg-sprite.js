const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = function (req, res, next) {
  if (req.url.startsWith('/icons-') && req.url.endsWith('.svg')) {
    const spritePath = resolve(__dirname, '../dist/_nuxt', req.url);
    try {
      const sprite = readFileSync(spritePath, 'utf8');
      res.setHeader('Content-Type', 'image/svg+xml');
      res.end(sprite);
    } catch (err) {
      res.statusCode = 404;
      res.end('Not Found');
    }
  } else {
    next();
  }
};
