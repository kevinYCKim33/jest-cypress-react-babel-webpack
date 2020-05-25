import {getFormattedValue} from '../utils' // jest does not support import statements out of the gate

test('formats the value', () => {
  expect(getFormattedValue('1234.0')).toBe('1,234.0')
})
