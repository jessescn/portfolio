import { screen, render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import lightTheme from '../../styles/themes/light'
import { Header } from '.'

jest.mock("next/router", () => {
  return {
    useRouter(){
      return {
        asPath: "/"
      }
    }
  }
})

describe("Header component", () => {
  it("should renders correctly", () => {
    
    render(<ThemeProvider theme={lightTheme}>
            <Header toggleTheme={jest.fn()} setShowMenu={jest.fn()} showMenu={false}/>
          </ThemeProvider>
    )

    expect(screen.getByText("Home")).toBeInTheDocument()
  })

  it("should toggle theme when user click on switch", () => {
    const toggleThemeMocked = jest.fn()

    render(<ThemeProvider theme={lightTheme}>
            <Header toggleTheme={toggleThemeMocked} setShowMenu={jest.fn()} showMenu={false}/>
          </ThemeProvider>
    ) 

    const switchBtn = screen.getByTestId("switch-btn")

    fireEvent.click(switchBtn)
  
    expect(toggleThemeMocked).toHaveBeenCalled()
  })

  it("should open sidebar when user click on menu", () => {
    const toggleMenuMocked = jest.fn()

    render(<ThemeProvider theme={lightTheme}>
            <Header toggleTheme={jest.fn()} setShowMenu={toggleMenuMocked} showMenu={true}/>
          </ThemeProvider>
    ) 

    const mobileMenu = screen.getByTestId("mobile-menu")

    fireEvent.click(mobileMenu)
  
    expect(toggleMenuMocked).toHaveBeenCalled()
  })
})