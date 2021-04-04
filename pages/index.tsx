import { Container, Hero } from "../styles/home/styles";

export default function Home() {
  return (
    <Container>
        <Hero>
          <h1>
            Hi There!
            <span></span>
          </h1>
          <span>I'm Jessé and i'm a fullstack <br/> Developer</span>
          <p>but i do like other things like games, animes and RPG.</p>
        </Hero>
        <img src="/assets/homeImage.svg" alt="boy codding"/>
    </Container>
  )
}
