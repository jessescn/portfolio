import { useEffect } from "react";
import { HomeContainer, Hero } from "../styles/home/styles";

interface HomeProps {
  setShowMenu: (show: boolean) => void
}

export default function Home({ setShowMenu }: HomeProps) {

  useEffect(()=> {
    setShowMenu(false)
  },[]) 

  return (
    <HomeContainer>
        <Hero>
          <h1>
            Hi There!
            <span></span>
          </h1>
          <span>I'm Jessé and i'm a fullstack <br/> Developer</span>
          <p>but i do like other things like games, animes and RPG.</p>
        </Hero>
        <img src="/assets/homeImage.svg" alt="boy codding"/>
    </HomeContainer>
  )
}
