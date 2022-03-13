import * as router from 'next/router'
import { ActiveLink } from '.'
import { render, screen } from '../../jest'

const useRouterMocked = jest.spyOn(router, 'useRouter')

describe('ActiveLink component', () => {
  it('should renders correctly', () => {
    useRouterMocked.mockReturnValueOnce({
      asPath: '/'
    } as any)

    render(
      <ActiveLink activeClassName="active" href="/">
        <a>Home</a>
      </ActiveLink>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('should have active class when asPath equals to href', () => {
    useRouterMocked.mockReturnValueOnce({
      asPath: '/'
    } as any)

    render(
      <ActiveLink activeClassName="active" href="/">
        <a>Home</a>
      </ActiveLink>
    )

    expect(screen.getByText('Home')).toHaveClass('active')
  })

  it('should not have active class when asPath different to href', () => {
    useRouterMocked.mockReturnValueOnce({
      asPath: '/fakePath'
    } as any)

    render(
      <ActiveLink activeClassName="active" href="/">
        <a>Home</a>
      </ActiveLink>
    )

    expect(screen.getByText('Home')).not.toHaveClass('active')
  })
})
