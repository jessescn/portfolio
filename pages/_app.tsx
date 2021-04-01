import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

import usePersistedState from '../utils/usePersistedState'

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = usePersistedState('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
