import 'match-media.mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighlight: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render home components', () => {
    renderWithTheme(<Home {...props} />)

    //menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    //footer
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()

    //logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    //sections
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1)

    // card game
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5)

    // highlight
    expect(screen.getAllByText(/read dead is back/i)).toHaveLength(3)
  })
})
