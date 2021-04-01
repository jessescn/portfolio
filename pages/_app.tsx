import { useState } from 'react'

import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState(dark)

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <GlobalStyles />
        <Component {...pageProps} />
        <Footer />
    </ThemeProvider>
  )
}

export default MyApp
