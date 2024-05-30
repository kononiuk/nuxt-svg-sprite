if (process.browser) {
  const sprite = require.context('!svg-sprite-loader!~/assets/svg', false, /\.svg$/);
  sprite.keys().forEach(sprite);
}
