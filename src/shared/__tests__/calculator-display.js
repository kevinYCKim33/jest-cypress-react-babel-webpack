import React from 'react'
import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display'

test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  //   console.log(container.innerHTML) // container is a dom node
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      color: white;
      background: #1c191c;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div>
      <div
        class="emotion-0"
        id="calculator-display"
      >
        <div
          class="autoScalingText"
          data-testid="total"
          style="transform: scale(1,1);"
        >
          0
        </div>
      </div>
    </div>
  `)
})
// oohhh gets nicely formatted by jest
// this works because I have prettier installed
// class="css-lq9ahq-calculator-display--CalculatorDisplay"
// ^ ^ completely useless emotion generated css val...
// need npm install --save-dev jest-emotion
// see snapshotSerializers in jest.config.js
