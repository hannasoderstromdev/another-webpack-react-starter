import React from 'react'
import { render } from '@testing-library/react'

import Spinner from '..'

describe('<Spinner />', () => {
  it('renders', () => {
    const { getByTestId } = render(<Spinner />)
    expect(getByTestId('spinner').tagName).toBe('DIV')
  })
})
