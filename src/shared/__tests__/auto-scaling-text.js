import React from 'react'
import {render} from '@testing-library/react' // some magic RTL function
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  render(<AutoScalingText />)
})
