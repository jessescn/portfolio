import { render, screen } from '@testing-library/react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import dark from '../../styles/themes/dark'
import Resume, { getStaticProps } from '../../pages/resume'

import { getPrismicClient } from '../../services/prismic'
import { mocked } from 'ts-jest/utils'

type Job = {
  slug: string,
  role: string,
  at: string,
  startDate: string,
  endDate: string | null,
  summary: string,
  experiences: string[]
}

const fakeJobs: Job[] = [
  {
    slug: "fake-slug", 
    role: "developer",
    at: "Company",
    startDate: "fake-start-date",
    endDate: "fake-end-date",
    summary: "a little about the job",
    experiences: []
  }
]

interface RenderProps {
  theme?: DefaultTheme,
  setShowMenu?: () => void,
  jobs?: Job[]
}

const renderPage = ({ theme=dark, setShowMenu=jest.fn(), jobs=fakeJobs}: RenderProps) => {
  render(
    <ThemeProvider theme={theme}>
      <Resume jobs={jobs} setShowMenu={setShowMenu} />
    </ThemeProvider>
  )
}

jest.mock("../../services/prismic")

describe("Resume Page", () => {
  it("should render component correctly", () => {
    renderPage({})

    expect(screen.getByText("Until Now")).toBeInTheDocument()
  })

  it("should render job", () => {
    renderPage({})

    expect(screen.getByText("fake-start-date - fake-end-date")).toBeInTheDocument()
  })

  it("should render error message if no jobs received", () => {
    renderPage({ jobs: []})

    expect(screen.getByText("Something go wrong")).toBeInTheDocument()
  })

  it("should loads initial data", async () => {

    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
          results: [
            {
              uid: "fake-slug",
              data: {
                role: [{ type: "heading", text: "developer"}],
                at: [{ type: "heading", text: "Company"}],
                start: "2018-10-01",
                end: null,
                summary: [{ type: "paragraph", text: "a little about the job"}],
                experiences: [
                  { text: "fake-experience", type: "paragraph" }
                ]
              }
            }
          ]
        })
    } as any)

    const response = await getStaticProps({})

    expect(getPrismicClientMocked).toBeCalledTimes(1)
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          jobs: [{
            slug: "fake-slug", 
            role: "developer",
            at: "Company",
            startDate: "Sep 2018",
            endDate: null,
            summary: "a little about the job",
            experiences: ["fake-experience"]
          }]
        }
      })
    )
  })

  it("should return empty array if prismic request fail", async () => {
    
    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      query: () => { throw new Error("Prismic API error") }
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          jobs: []
        }
      })
    )
  })
})