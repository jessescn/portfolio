import { render, screen } from '../../../jest'
import { ContributorMockBuilder } from '../../../models/_mocks_/contributor-mock'

import Contributors from '../index'

describe('Comtributors component', () => {
  const data = [
    new ContributorMockBuilder().withUsername('contributor 1').build(),
    new ContributorMockBuilder().withUsername('contributor 2').build()
  ]

  it('should render correctly', () => {
    render(<Contributors contributors={data} />)

    expect(screen.getByText('Contributors')).toBeTruthy()
  })
})
