import { gql, useQuery } from '@apollo/client'
import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesSliderMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'

const GET_GAMES = gql`
query getGames {
  games {
    name
  }
}
`

export default function Index(props: HomeTemplateProps) {
  const { data, loading, error } = useQuery(GET_GAMES)

  if (loading) return <p>Loading...</p>

  if (error) return <p>{error}</p>

  if (props.data) return <p>{JSON.stringify(props.data, null, 2)}</p>

  return <Home {...props} />
}

export async function getServerSideProps() {

  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({
    query: GET_GAMES
  })

  return {
    props: {
      data: data,
      initialApolloState: apolloClient.cache.extract(),
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
