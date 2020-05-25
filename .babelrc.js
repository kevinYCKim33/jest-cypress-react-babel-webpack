// jest picks up babelrc automatically
const isProd = String(process.env.NODE_ENV) === 'production'
// if testing, allow ES6 import, otherwise don't and get tree shaking benefits
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}], // something that gives me tree shaking?? if i comment out this to false...we'll get es6 import, but want to have cake and eat it too
    '@babel/preset-react',
    [
      '@emotion/babel-preset-css-prop',
      {
        hoist: isProd,
        sourceMap: !isProd,
        autoLabel: !isProd,
        labelFormat: '[filename]--[local]',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}
