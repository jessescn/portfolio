import { useState } from "react"
import { ActiveLink } from "../ActiveLink"
import { Container, Content } from "./styles"

interface HeaderProps {
    toggleTheme(): void
}

export function Header({ toggleTheme }: HeaderProps){

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    function handleToggleMenu(){
        setShowMobileMenu(!showMobileMenu)
    }

    return(
        <Container>
            <Content className={showMobileMenu ? "on" : ""}>        
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
                    <ActiveLink activeClassName="active" href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <div className={`menu ${showMobileMenu ? "close" : ""}`} onClick={handleToggleMenu}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
            </Content>
        </Container>
    )
}