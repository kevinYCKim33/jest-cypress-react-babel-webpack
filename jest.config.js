// priority! any module that starts with module.css use idenity-obj-proxy

// else if! any modules that end in css, have it resolve with style-mock.js

// order matters on these moduleNameMapper!
module.exports = {
  testEnvironment: 'jest-environment-jsdom', // 'jest-environment-node' will break console.log(window)
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  snapshotSerializers: ['jest-emotion'],
}
