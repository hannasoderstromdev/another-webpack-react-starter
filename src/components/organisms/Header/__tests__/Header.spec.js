import React from 'react'
import { render } from '@testing-library/react'

import Header from '..'

describe('Components/Molecules/Header', () => {
  it('renders', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('logo').tagName).toBe('IMG')
  })
})
