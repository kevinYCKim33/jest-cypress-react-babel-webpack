// import * as jestDOM from '@testing-library/jest-dom' // adds a bunch of new assertions for us
// import * as jestDOM from '@testing-library/jest-dom/extend-expect' // adds a bunch of new assertions for us
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Calculator from '../calculator'
// expect.extend(jestDOM) // add superpower to the expect function

// ^ all that jest-dom logic is now done in jest.config.js under setupFilesAfterEnv

test('the clear button switches from AC to C when there is an entry', () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  // expect(clearButton.textContent).toBe('C') // slightly confusing error displaying with toBe
  expect(clearButton).toHaveTextContent('C') // .toHaveTextContent from jest-dom;

  fireEvent.click(clearButton)
  // expect(clearButton.textContent).toBe('AC')
  expect(clearButton).toHaveTextContent('BC') // .toHaveTextContent from jest-dom; error message slightly clearer
})
