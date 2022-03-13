import { memo, MouseEvent } from 'react'
import { AiOutlineClose, AiOutlineLink } from 'react-icons/ai'
import { Project } from '../../models/project'
import { formatProjectName } from '../../utils/format'
import Contributors from '../Contributors'
import { Subtitle } from '../design/Subtitle'
import ProjectCalendar from '../Graphs/ProjectCalendar'
import { Modal, Title, Wrapper } from './styles'

interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const handleModalClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  return !project.id ? null : (
    <Wrapper className={isOpen ? 'modal-open' : 'modal-close'}>
      <div
        data-testid="modal-background-container"
        className="modal-background"
        onClick={onClose}
      >
        <Modal className="modal" onClick={handleModalClick}>
          <div className="title">
            <Title href={project.link} target="_blank">
              {formatProjectName(project.name)} <AiOutlineLink size="1.5rem" />{' '}
              <div />
            </Title>
            <p>{project.description}</p>
          </div>
          <div className="info">
            {project.languages.length > 0 && (
              <div className="technologies">
                <Subtitle>Technologies</Subtitle>
                <div className="technologies">
                  <span>
                    {project.languages.map(lang => lang.id).join(', ')}
                  </span>
                </div>
              </div>
            )}
            <Contributors contributors={project.contributors} />
          </div>
          {project.commits.length > 0 && (
            <>
              <Subtitle>Commits</Subtitle>
              <div className="overview">
                <ProjectCalendar commits={project.commits} />
              </div>
            </>
          )}
          <AiOutlineClose
            size="1.5rem"
            className="closeButton"
            data-testid="modal-close-button"
            onClick={onClose}
          />
        </Modal>
      </div>
    </Wrapper>
  )
}

export default memo(ProjectModal)
