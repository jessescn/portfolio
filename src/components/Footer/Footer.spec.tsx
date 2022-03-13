import Footer from '.'
import { render, screen } from '../../jest'

describe('Footer component', () => {
  it('should renders correctly', () => {
    render(<Footer />)

    expect(screen.getByText('Find me on')).toBeInTheDocument()
  })
})
