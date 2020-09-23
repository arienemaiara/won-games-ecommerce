import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should render logo without text', () => {
    renderWithTheme(<Menu />)

    const renderedLogo = screen.getByLabelText(/won games/i)
    expect(renderedLogo).toBeInTheDocument()
    expect(renderedLogo.parentElement).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
