import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import dark from '../../styles/themes/dark'
import Home from '../../pages/index'

describe("Home Page", () => {
  it("should render correctly", () => {

    render(
      <ThemeProvider theme={dark}>
        <Home setShowMenu={jest.fn()} />
      </ThemeProvider>
    )

    expect(screen.getByText("Hi There!")).toBeInTheDocument()
  })
})