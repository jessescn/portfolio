import Link from "next/link"
import { Container, Content } from "./styles"

interface HeaderProps {
    toggleTheme(): void
}

export function Header({ toggleTheme }: HeaderProps){

    return(
        <Container>
            <Content>            
                <nav>
                    <Link href="/">
                        <a className="active">Home</a>
                    </Link>
                    <Link href="/resume">
                        <a>Resume</a>
                    </Link>
                    <Link href="/projects">
                        <a>Projects</a>
                    </Link>
                    <Link href="/posts">
                        <a>Posts</a>
                    </Link>
                </nav>
            </Content>
        </Container>
    )
}