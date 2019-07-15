import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from '..'

describe('Components/Molecules/Navigation', () => {
  it('renders', () => {
    const { getByText, getAllByTestId } = render(
      <Router>
        <Navigation />
      </Router>,
    )
    expect(getByText('Home')).toBeDefined()
    expect(getByText('Private')).toBeDefined()
    expect(getByText('Settings')).toBeDefined()
    expect(getAllByTestId('icon')).toBeDefined()
  })
})
