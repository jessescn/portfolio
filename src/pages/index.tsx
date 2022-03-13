import { useEffect } from 'react'
import { HomeContainer, Hero } from '../styles/home/styles'
import Head from 'next/head'

interface HomeProps {
  setShowMenu: (show: boolean) => void
}

export default function Home({ setShowMenu }: HomeProps) {
  useEffect(() => {
    setShowMenu(false)
  }, [])

  return (
    <HomeContainer>
      <Head>
        <title>Home | Jessé Souza</title>
      </Head>
      <Hero>
        <h1>
          Hi There!
          <span></span>
        </h1>
        <span>
          I'm Jessé and i'm a fullstack <br /> Developer
        </span>
        <p>but i do like other things like games, animes and RPG.</p>
      </Hero>
      <img src="/assets/homeImage.svg" alt="boy codding" />
    </HomeContainer>
  )
}
