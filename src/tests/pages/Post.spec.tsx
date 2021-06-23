import { render, screen } from '@testing-library/react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { mocked } from 'ts-jest/utils'
import  Posts, { getStaticProps } from '../../pages/posts'
import { getPrismicClient } from '../../services/prismic'

import dark from '../../styles/themes/dark'

type Post = {
  slug: string,
  title: string,
  excerpt: string,
  updatedAt: string,
}

const fakePosts: Post[] = [
  {
    slug: "fake-slug",
    title: "Github Basic Tutorial",
    excerpt: "Tutorial excerpt",
    updatedAt: "2018-01-01",
  }
]

interface RenderProps {
  theme?: DefaultTheme,
  setShowMenu?: () => void,
  posts?: Post[] 
}

const renderPage = ({theme=dark, setShowMenu=jest.fn(), posts=[]}: RenderProps) => {
  render(
    <ThemeProvider theme={theme}>
      <Posts posts={posts} setShowMenu={setShowMenu}/>
    </ThemeProvider>
  )
}

jest.mock("../../services/prismic")

describe("Posts Page", () => {
  it("should render correctly", () => {

    renderPage({})

    expect(screen.getByText("What i've been writing")).toBeInTheDocument()
  })

  it("should render post", () => {

    renderPage({posts:fakePosts})

    expect(screen.getByText("Github Basic Tutorial")).toBeInTheDocument()
  })

  it("should render error message when github fetch fails", () => {

    renderPage({ posts: []})

    expect(screen.getByText("No posts for now")).toBeInTheDocument()
  })

  it("should loads initial data", async () => {

    const getPrismicClientMocked = mocked(getPrismicClient)

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
          results: [
            {
              uid: "fake-slug",
              last_publication_date: "2018-01-01",
              data: {
                title: [{ type: "heading", text: "Post title"}],
                content: [ {type: "paragraph", text: "post content"}]
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
          posts: [{
            slug: "fake-slug", 
            title: "Post title",
            excerpt: "post content",
            updatedAt: "2017 M12 31",
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
          posts: []
        }
      })
    )
  })
})