// any modules that end in css, have it resolve with style-mock.js
module.exports = {
  testEnvironment: 'jest-environment-jsdom', // 'jest-environment-node' will break console.log(window)
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
}
