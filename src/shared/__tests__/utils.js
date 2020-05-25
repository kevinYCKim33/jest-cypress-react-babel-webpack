import {getFormattedValue} from '../utils' // jest does not support import statements out of the gate

test('formats the value', () => {
  expect(getFormattedValue('1234.0')).toBe('1,234.0')
})

// this window is actually simulated by JS DOM
// but utils here can actually run in node
// there's a slight performance hit here
// npm t -- --env=node << running this will actually break window NOT defined error since it skips out on jsdom
// see jest.config.js to see how to explicitly define testEnvironment
// console.log(window)
