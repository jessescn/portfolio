import { Container } from "./styles";

export function Footer(){
    return(
        <Container>
            <p>Find me on</p>
            <div>
                <a href="https://github.com/jessescn" target="_blank"><img src="/assets/github.svg" alt="github link"/></a>
                <a href="https://www.linkedin.com/in/jess%C3%A9-souza-15aa56190/" target="_blank"><img src="/assets/linkedin.svg" alt="linkedin link"/></a>
                <a href="https://twitter.com/itsjessescn" target="_blank"><img src="/assets/twitter.svg" alt="twitter link"/></a>
            </div>
        </Container>
    )
}