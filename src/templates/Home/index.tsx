import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Heading from 'components/Heading'
import Footer from 'components/Footer'

import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Most Popular
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Upcoming
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="white">
        Free games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </S.Wrapper>
)

export default Home
