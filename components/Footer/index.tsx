import { Container } from "./styles";

export function Footer(){
    return(
        <Container>
            <p>Find me on</p>
            <div>
                <img src="/assets/github.svg" alt="github link"/>
                <img src="/assets/linkedin.svg" alt="linkedin link"/>
                <img src="/assets/twitter.svg" alt="twitter link"/>
            </div>
        </Container>
    )
}