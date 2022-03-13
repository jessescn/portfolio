import { AiOutlineClose, AiOutlineLink } from "react-icons/ai";
import { Project } from "../../models/Project";
import { formatProjectName } from "../../utils/format";
import Contributors from "../Contributors";
import { Subtitle } from "../design/Subtitle";
import ProjectCalendar from "../Graphs/ProjectCalendar";
import { Modal, Title, Wrapper } from "./styles";

interface ProjectModalProps {
  project: Project;
  isModalOpen: boolean;
  closeModal: () => void;
}

export function ProjectModal({
  project,
  isModalOpen,
  closeModal,
}: ProjectModalProps) {
  const handleModalClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return !project.id ? null : (
    <Wrapper className={isModalOpen ? "modal-open" : "modal-close"}>
      <div className="modal-background" onClick={closeModal}>
        <Modal className="modal" onClick={handleModalClick}>
          <div className="title">
            <Title href={project.link} target="_blank">
              {formatProjectName(project.name)} <AiOutlineLink size="1.5rem" />{" "}
              <div />
            </Title>
            <p>{project.description}</p>
          </div>
          <div className="info">
            {project.languages.length > 0 && (
              <div className="technologies">
                <Subtitle>Technologies</Subtitle>
                <div className="technologies">
                  {project.languages.map((language, idx) => (
                    <span key={language.id}>{`${language.id} ${
                      idx !== project.languages.length - 1 ? "," : ""
                    } `}</span>
                  ))}
                </div>
              </div>
            )}
            <Contributors contributors={project.contributors} />
          </div>
          {project.languages.length > 0 && (
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
            onClick={closeModal}
          />
        </Modal>
      </div>
    </Wrapper>
  );
}
