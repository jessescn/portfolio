import { Wrapper, Modal, Title, Subtitle } from "./styles"

import { AiOutlineClose, AiOutlineLink } from 'react-icons/ai';

import ProjectPie from "../Graphs/ProjectPie"

type Language = {
  id: string,
  value: number
}

type Project = {
  id: number,
  description: string,
  name: string,
  link: string,
  languages: Language[]
}

interface ProjectModalProps {
  project: Project,
  isModalOpen: boolean,
  closeModal: () => void
}

export function ProjectModal({ project, isModalOpen, closeModal }: ProjectModalProps) {

  const { name, description, link, languages } = project;

  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <Wrapper className={isModalOpen ? "in" : "out" }>
      <div className="modal-background" onClick={closeModal}>
        <Modal className="modal" onClick={handleModalClick}>
          <Title href={link} target="_blank">{ name } <AiOutlineLink size="1.5rem" /></Title>
          <p>{ description }</p>
          <Subtitle>Technologies</Subtitle>
          <div className="technologies">
              { languages.map((language, idx) => (
                <span key={language.id}>{`${language.id} ${idx !== languages.length - 1 ? '-' : ''} `}</span>
              ))}
          </div>
          <Subtitle>Metrics</Subtitle>
          <div className="overview">
            <ProjectPie data={languages} />
            {/* <ProjectPie data={languages} /> */}
          </div>
          <AiOutlineClose size="1.5rem" className="closeButton" onClick={closeModal} />
        </Modal>
      </div>
    </Wrapper>
  )
}
