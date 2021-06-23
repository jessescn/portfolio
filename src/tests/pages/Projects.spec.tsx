import { render, screen } from '@testing-library/react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import Projects, { getStaticProps } from '../../pages/projects'

import dark from '../../styles/themes/dark'
import fetch from 'jest-fetch-mock'

type Project =  {
  id: number,
  description: string,
  name: string,
  link: string,
  languages: string[]
}

const fakeProjects: Project[] = [
  {
    id: 1,
    description: "testing fake project",
    name: "Jest React Guide",
    link: "fake-link",
    languages: ["javascript", "node", "python"]
  }
]

beforeEach(() => {
  fetch.resetMocks()
})

interface RenderProps {
  theme?: DefaultTheme,
  setShowMenu?: () => void,
  projects?: Project[] 
}

const renderPage = ({theme=dark, setShowMenu=jest.fn(), projects=fakeProjects}: RenderProps) => {
  render(
    <ThemeProvider theme={theme}>
      <Projects projects={projects} setShowMenu={setShowMenu}/>
    </ThemeProvider>
  )
}

describe("Projects Page", () => {
  it("should render correctly", () => {

    renderPage({})

    expect(screen.getByText("What i've been doing")).toBeInTheDocument()
  })

  it("should render project card", () => {

    renderPage({})

    expect(screen.getByText("Jest React Guide")).toBeInTheDocument()
  })

  it("should render error message when github fetch fails", () => {

    renderPage({ projects: []})

    expect(screen.getByText("No projects found")).toBeInTheDocument()
  })

  it("should loads initial data", async () => {

    fetch.mockResponseOnce(JSON.stringify([{
      id: 1,
      description: "testing fake project",
      name: "sos-money",
      html_url: "fake-link",
      language: ["javascript", "node", "python"]
     }]))

    const response = await getStaticProps({})

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          projects: [{
            id: 1,
            description: "testing fake project",
            name: "sos-money",
            link: "fake-link",
            languages: ["javascript", "node", "python"]
          }]
        }
      })
    )
  })

  it("returns empty array if fetch fails", async () => {

    fetch.mockReject(new Error("Github API failure"))

    const response = await getStaticProps({})

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          projects: []
        }
      })
    )
  })
})