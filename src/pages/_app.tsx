/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(dark)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) {
      setTheme(JSON.parse(currentTheme))
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme.title === 'light' ? dark : light
    setTheme(newTheme)
    localStorage.setItem('theme', JSON.stringify(newTheme))
  }

  return (
    <ThemeProvider theme={theme}>
      <Header
        toggleTheme={toggleTheme}
        showMenu={showMobileMenu}
        setShowMenu={setShowMobileMenu}
      />
      <GlobalStyles showMenu={showMobileMenu} />
      <Component setShowMenu={setShowMobileMenu} {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
