import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { Title } from '../../components/design/Title'
import {
  Content,
  Project as ProjectStyle,
  Container as PageContainer
} from '../../styles/projects/styles'

import Head from 'next/head'
import ProjectModal from '../../components/ProjectModal'
import { formatProjectName } from '../../utils/format'
import { getGithubRepos } from '../../services/github'
import { Project } from '../../models/project'

interface ProjectsProps {
  projects: Project[]
  setShowMenu: (show: boolean) => void
}

export default function Projects({ projects, setShowMenu }: ProjectsProps) {
  const [modalProject, setModalProject] = useState({} as Project)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setShowMenu(false)
  }, [])

  const handleOpenModal = project => {
    setModalProject(project)
    setIsModalOpen(true)
  }

  return (
    <PageContainer>
      <Head>
        <title>Projects | Jessé Souza</title>
      </Head>
      <Title fontSize={2.2}>What i've been doing</Title>
      {!projects.length ? (
        <h2>No projects found</h2>
      ) : (
        <Content>
          {projects.map(project => (
            <ProjectStyle
              key={project.id}
              onClick={() => handleOpenModal(project)}
            >
              <h1>{formatProjectName(project.name)}</h1>
              <strong>{project.description}</strong>
              <div>
                <p>Technologies</p>
                {project.languages.map((language, i) => (
                  <span key={language.id}>{`${language.id} ${
                    i !== project.languages.length - 1 ? ',' : ''
                  } `}</span>
                ))}
              </div>
            </ProjectStyle>
          ))}
        </Content>
      )}
      <ProjectModal
        onClose={() => {
          setIsModalOpen(false)
        }}
        isOpen={isModalOpen}
        project={modalProject}
      />
    </PageContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const requestRepos = [
    {
      user: 'jessescn',
      repos: [
        'sos-money',
        'ignews',
        'custom-notion-template',
        'portfolio',
        'moveit',
        'dj-marques',
        'go-go'
      ]
    },
    {
      user: 'OpenDevUFCG',
      repos: ['opendevufcg.org']
    }
  ]
  const projects: Project[] = await getGithubRepos(requestRepos)

  return {
    props: {
      projects
    },
    revalidate: 60 * 60
  }
}
