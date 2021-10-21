import { Wrapper, Modal, Title } from "./styles"

import { AiOutlineClose, AiOutlineLink } from 'react-icons/ai';

import { formatProjectName } from '../../utils/format'

import ProjectPie from "../Graphs/ProjectPie"
import Contributors from "../Contributors";
import { Subtitle } from "../design/Subtitle";
import Calendar from "../Graphs/ProjectCalendar";
import ProjectCalendar from "../Graphs/ProjectCalendar";

type Language = {
  id: string,
  value: number
}

type Contributor = {
  username: string,
  avatar: string,
  link: string,
}

type Commit = {
  date: string;
}

type Project = {
  id: number,
  description: string,
  name: string,
  link: string,
  contributors: Contributor[],
  languages: Language[],
  commits: Commit[],
}

interface ProjectModalProps {
  project: Project,
  isModalOpen: boolean,
  closeModal: () => void
}

export function ProjectModal({ project, isModalOpen, closeModal }: ProjectModalProps) {

  const { name, description, link, languages, contributors, commits } = project;

  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <Wrapper className={isModalOpen ? "modal-open" : "modal-close" }>
      <div className="modal-background" onClick={closeModal}>
        <Modal className="modal" onClick={handleModalClick}>
          <div className="title">
            <Title href={link} target="_blank">{ formatProjectName(name) } <AiOutlineLink size="1.5rem" /> <div /></Title>
            <p>{ description }</p>
          </div>
          <div className="info">
            { 
            languages.length > 0 && (
                <div className="technologies">
                  <Subtitle>Technologies</Subtitle>
                  <div className="technologies">
                      { languages.map((language, idx) => (
                        <span key={language.id}>{`${language.id} ${idx !== languages.length - 1 ? ',' : ''} `}</span>
                      ))}
                  </div>
                </div>
              )
            }
            <Contributors contributors={contributors} />
          </div>
          {
            languages.length > 0 && (
                <>
                  <Subtitle>Commits</Subtitle>
                  <div className="overview">
                    <ProjectCalendar commits={commits}/>
                  </div>
                </>
              )
            }
          <AiOutlineClose size="1.5rem" className="closeButton" onClick={closeModal} />
        </Modal>
      </div>
    </Wrapper>
  )
}
