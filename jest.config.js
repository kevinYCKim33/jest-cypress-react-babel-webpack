const path = require('path')
// priority! any module that starts with module.css use idenity-obj-proxy

// else if! any modules that end in css, have it resolve with style-mock.js

// order matters on these moduleNameMapper!
module.exports = {
  testEnvironment: 'jest-environment-jsdom', // 'jest-environment-node' will break console.log(window)
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'], // mirrors webpack config setting of allowing you to import files in shared directories without ../../..
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'], // handles snapshotting emotion based css classes better
}
