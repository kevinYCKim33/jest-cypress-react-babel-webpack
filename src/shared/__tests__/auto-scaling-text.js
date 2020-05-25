import React from 'react'
import {render} from '@testing-library/react' // some magic RTL function
import AutoScalingText from '../auto-scaling-text'

test('renders', () => {
  const {debug} = render(<AutoScalingText />)
  debug()
})

/*
// there should be a className but there isn't!
// why? because it's getting turn't to that style.mock.js file just returning {}
<body>
  <div>
    <div
      data-testid="total"
      style="transform: scale(1,1);"
    />
  </div>
</body> 
*/

// npm install --save dev identity-obj-proxy

// now we get autoScalingText along with jest.config.js
//   moduleNameMapper: {
// '\\.module\\.css$': 'identity-obj-proxy',
/*
<body>
  <div>
    <div
      class="autoScalingText"
      data-testid="total"
      style="transform: scale(1,1);"
    />
  </div>
</body>
*/
