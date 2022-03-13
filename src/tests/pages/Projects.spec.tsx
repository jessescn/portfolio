import { render, screen } from '../../jest'
import { Project } from '../../models/project'
import Projects from '../../pages/projects'

describe('Projects Page', () => {
  const data: Project[] = [
    {
      id: 1,
      description: 'testing fake project',
      name: 'Jest React Guide',
      link: 'fake-link',
      contributors: [],
      commits: [],
      languages: [
        { id: 'javascript', value: 100 },
        { id: 'node', value: 100 },
        { id: 'python', value: 100 }
      ]
    }
  ]

  const renderPage = (projects = data) => {
    render(<Projects projects={projects} setShowMenu={jest.fn()} />)
  }

  it('should render correctly', () => {
    renderPage()

    expect(screen.getByText("What i've been doing")).toBeInTheDocument()
  })

  it('should render project card', () => {
    renderPage()

    expect(screen.getByText('Jest React Guide')).toBeInTheDocument()
  })

  it('should render error message when github fetch fails', () => {
    renderPage([])

    expect(screen.getByText('No projects found')).toBeInTheDocument()
  })
})
