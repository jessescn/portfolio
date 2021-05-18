import { Container } from "./styles";

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useContext } from "react";
import { ThemeContext } from 'styled-components'

export function Footer(){

    const { colors } = useContext(ThemeContext)

    return(
        <Container>
            <p>Find me on</p>
            <div>
                <a href="https://github.com/jessescn" rel="noopener" target="_blank"><FaGithub color={colors.primary} size="2rem"/></a>
                <a href="https://www.linkedin.com/in/jess%C3%A9-souza-15aa56190/" rel="noopener" target="_blank"><FaLinkedin color={colors.primary} size="2rem"/></a>
                <a href="https://twitter.com/itsjessescn" rel="noopener" target="_blank"><FaTwitter color={colors.primary} size="2rem"/></a>
            </div>
        </Container>
    )
}