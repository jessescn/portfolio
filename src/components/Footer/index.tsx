import { Container } from './styles'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { memo, useContext } from 'react'
import { ThemeContext } from 'styled-components'

const Footer = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <Container>
      <p>Find me on</p>
      <div>
        <a href="https://github.com/jessescn" rel="noopener noreferrer" target="_blank">
          <FaGithub color={colors.primary} size="2rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/jess%C3%A9-souza-15aa56190/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin color={colors.primary} size="2rem" />
        </a>
        <a
          href="https://twitter.com/itsjessescn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter color={colors.primary} size="2rem" />
        </a>
      </div>
    </Container>
  )
}

export default memo(Footer)
