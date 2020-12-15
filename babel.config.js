module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/slidertest/'
    : '/',
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
