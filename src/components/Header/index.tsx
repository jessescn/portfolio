import { useContext } from "react"
import { ActiveLink } from "../ActiveLink"
import { Container, Content } from "./styles"

import SwitchButton from 'react-switch'

import { ThemeContext } from 'styled-components'

interface HeaderProps {
    toggleTheme: () => void,
    showMenu: boolean,
    setShowMenu: (value: boolean) => void
}

export function Header({ toggleTheme, showMenu, setShowMenu }: HeaderProps){

    const { title, colors } = useContext(ThemeContext)

    function handleToggleMenu(){
        setShowMenu(!showMenu)
    }

    return(
        <Container>
            <Content className={showMenu ? "on" : "out"}>
                <SwitchButton
                    data-testid="switch-btn"
                    className="themeButton"
                    onChange={toggleTheme}
                    checked={title === "dark"}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    width={50}
                    handleDiameter={25}
                    offHandleColor={colors.secundary}
                    onColor={colors.secundary}
                />   
                <nav>
                    <ActiveLink activeClassName="active" href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/resume">
                        <a>Resume</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/projects">
                        <a>Projects</a>
                    </ActiveLink>
                    {/* <ActiveLink activeClassName="active" href="/posts">
                        <a>Posts</a>
                    </ActiveLink> */}
                </nav>
                <div data-testid="mobile-menu" className={`menu ${showMenu ? "close" : ""}`} onClick={handleToggleMenu}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
            </Content>
        </Container>
    )
}