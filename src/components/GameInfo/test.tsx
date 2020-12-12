import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Game title',
  description: 'Game description',
  price: '210,00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(container.firstChild).toMatchSnapshot()

    expect(
      screen.getByRole('heading', { name: /Game title/i })
    ).toBeInTheDocument()

    expect(screen.getByText('Game description')).toBeInTheDocument()
    expect(screen.getByText('$210,00')).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: 'Add to cart' })
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Wishlist' })).toBeInTheDocument()
  })
})
