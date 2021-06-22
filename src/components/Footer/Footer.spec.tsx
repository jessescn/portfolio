import { screen, render } from '@testing-library/react'
import { Footer } from '.'

import lightTheme from '../../styles/themes/light'
import { ThemeProvider } from 'styled-components'

describe("Footer component", () => {
  it("should renders correctly", () => {
    
    render(<ThemeProvider theme={lightTheme}>
      <Footer/>
    </ThemeProvider>)

    expect(screen.getByText("Find me on")).toBeInTheDocument()
  })  
})