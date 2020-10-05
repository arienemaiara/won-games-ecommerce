import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesSliderMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesSliderMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesSliderMock,
      upcommingGames: gamesSliderMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesSliderMock,
      freeGames: gamesSliderMock,
      freeHighlight: highlightMock
    }
  }
}
