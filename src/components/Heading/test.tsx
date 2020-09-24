import { screen } from '@testing-library/react'
import 'jest-styled-components'

import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a heading with a line on the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  // it('should render a heading with a line at the bottom', () => {
  //   renderWithTheme(<Heading lineLeft>Won Games</Heading>)
  //   expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
  //     'border-bottom',
  //     '0.5rem solid #F231A5',
  //     {
  //       modifier: '::after'
  //     }
  //   )
  // })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
  })
})
