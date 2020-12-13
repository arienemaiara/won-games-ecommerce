import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different taeles',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-16T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Action']
}

describe('<GameDetails />', () => {
  it('should render headings', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: 'Developer' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Release Date' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Platforms' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Publisher' })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Rating' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Genres' })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByTitle('Linux')).toBeInTheDocument()
    expect(screen.getByTitle('Windows')).toBeInTheDocument()
    expect(screen.getByTitle('Mac')).toBeInTheDocument()
  })

  it('should render formatted date', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Nov 16, 2020')).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText('18+')).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Role-playing / Action')).toBeInTheDocument()
  })
})
