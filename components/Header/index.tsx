import { ActiveLink } from "../ActiveLink"
import { Container, Content } from "./styles"

interface HeaderProps {
    toggleTheme(): void
}

export function Header({ toggleTheme }: HeaderProps){

    return(
        <Container>
            <Content>            
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
            </Content>
        </Container>
    )
}