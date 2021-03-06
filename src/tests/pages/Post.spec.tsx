import { render, screen } from '../../jest'
import { Post } from '../../models/post'
import { PostMockBuilder } from '../../models/_mocks_/post-mock'
import Posts, { getStaticProps } from '../../pages/posts'
import * as prismic from '../../services/prismic'

describe('Posts Page', () => {
  const data: Post[] = [
    {
      slug: 'fake-slug',
      title: 'Github Basic Tutorial',
      excerpt: 'Tutorial excerpt',
      updatedAt: '2018-01-01'
    }
  ]
  const getPrismicClientMocked = jest.spyOn(prismic, 'getPrismicClient')

  const renderPage = (posts: Post[] = []) => {
    render(<Posts posts={posts} setShowMenu={jest.fn()} />)
  }

  it('should render correctly', () => {
    renderPage()

    expect(screen.getByText("What i've been writing")).toBeInTheDocument()
  })

  it('should render post', () => {
    renderPage(data)

    expect(screen.getByText('Github Basic Tutorial')).toBeInTheDocument()
  })

  it('should render error message when github fetch fails', () => {
    renderPage([])

    expect(screen.getByText('No posts for now')).toBeInTheDocument()
  })

  it('should loads initial data', async () => {
    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'fake-slug',
            last_publication_date: '2018-01-01',
            data: {
              title: [{ type: 'heading', text: 'Post title' }],
              content: [{ type: 'paragraph', text: 'post content' }]
            }
          }
        ]
      })
    } as any)

    const response = await getStaticProps({})
    const expectedValue = new PostMockBuilder()
      .withTitle('Post title')
      .withSlug('fake-slug')
      .withExcerpt('post content')
      .withUpdatedAt('31 de dezembro de 2017')
      .build()

    expect(getPrismicClientMocked).toBeCalledTimes(1)
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [expectedValue]
        }
      })
    )
  })

  it('should return empty array if prismic request fail', async () => {
    getPrismicClientMocked.mockReturnValueOnce({
      query: () => {
        throw new Error('Prismic API error')
      }
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
