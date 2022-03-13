import { render, screen, userEvent } from '../../../jest'
import { Commit, Language } from '../../../models/project'
import { ProjectMockBuilder } from '../../../models/_mocks_/project-mock'
import { formatProjectName } from '../../../utils/format'

import ProjectModal from '../index'

describe('ProjectModal component', () => {
  const languages: Language[] = [
    {
      id: 'node',
      value: 100
    },
    {
      id: 'javascript',
      value: 100
    }
  ]

  const commits: Commit[] = [
    {
      date: 'date 1'
    }
  ]

  const project = new ProjectMockBuilder()
    .withId(1)
    .withName('project test')
    .withDescription('description test')
    .withLanguages(languages)
    .withCommits(commits)
    .build()

  it('should render correctly', () => {
    render(<ProjectModal project={project} isOpen={true} onClose={jest.fn()} />)

    expect(screen.getByText(formatProjectName(project.name))).toBeTruthy()
    expect(screen.getByText(project.description)).toBeTruthy()
    expect(screen.getByText('Technologies')).toBeTruthy()
    expect(screen.getByText('node, javascript')).toBeTruthy()
    expect(screen.getByText('Commits')).toBeTruthy()
  })

  it('should close modal when click on modal-background', () => {
    const onCloseSpy = jest.fn()
    render(
      <ProjectModal project={project} isOpen={true} onClose={onCloseSpy} />
    )

    const backgroundContainer = screen.getByTestId('modal-background-container')
    userEvent.click(backgroundContainer)

    expect(onCloseSpy).toHaveBeenCalled()
  })

  it('should close modal when click on close button', () => {
    const onCloseSpy = jest.fn()
    render(
      <ProjectModal project={project} isOpen={true} onClose={onCloseSpy} />
    )

    const closeButton = screen.getByTestId('modal-close-button')
    userEvent.click(closeButton)

    expect(onCloseSpy).toHaveBeenCalled()
  })
})
