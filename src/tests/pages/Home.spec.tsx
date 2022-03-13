import Home from '../../pages/index'
import { render, screen } from '../../jest'

describe('Home Page', () => {
  it('should render correctly', () => {
    render(<Home setShowMenu={jest.fn()} />)

    expect(screen.getByText('Hi There!')).toBeInTheDocument()
  })
})
