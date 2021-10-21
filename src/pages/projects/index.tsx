import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Title } from "../../components/design/Title";
import { Content, Project, Container as PageContainer } from "../../styles/projects/styles";

import Head from 'next/head'
import { ProjectModal } from "../../components/ProjectModal";
import { formatProjectName } from "../../utils/format";
import { getGithubRepos } from "../../services/github";

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

type Project =  {
    id: number,
    description: string,
    name: string,
    link: string,
    contributors: Contributor[],
    languages: Language[],
    commits: Commit[]
}

interface ProjectsProps {
    projects: Project[],
    setShowMenu: (show: boolean) => void
}

export default function Projects({ projects, setShowMenu }: ProjectsProps){

    const [modalProject, setModalProject] =  useState({ id: 0, description: "", name: "", link: "", languages: [], contributors: [], commits: [] });
    const [isModalOpen, setIsModalOpen] = useState(false);
 
    useEffect(()=> {
        setShowMenu(false)
    },[])

    const handleOpenModal = (project) => {
        setModalProject(project)
        setIsModalOpen(true)
    }
    
    return(
        <PageContainer>
            <Head>
                <title>Projects | Jessé Souza</title>
            </Head>
            <Title fontSize={2.2}>
                What i've been doing
            </Title>
            {
            !projects.length ? (<h2>No projects found</h2>):
            <Content>
                {projects.map((project) => (
                    <Project key={project.id} onClick={() => handleOpenModal(project) }>
                        <h1>{formatProjectName(project.name)}</h1>
                        <strong>{project.description}</strong>
                        <div>
                            <p>Technologies</p>
                            { project.languages.map((language, i) => (
                                <span key={language.id}>{`${language.id} ${i !== project.languages.length - 1 ? ',' : ''} `}</span>
                            ))}
                        </div>
                    </Project>
                ))}
            </Content>
            }
            <ProjectModal closeModal={() => { setIsModalOpen(false) }} isModalOpen={isModalOpen} project={modalProject}/>
        </PageContainer>
    )   
}

export const getStaticProps: GetStaticProps = async() => {

    let projects = []

    try {
        const requestRepos = [
          {
            user: 'jessescn',
            repos: ["sos-money", "ignews", "custom-notion-template", "portfolio", "moveit", "dj-marques", "go-go"]
          },
          {
            user: 'OpenDevUFCG',
            repos: ["opendevufcg.org"]
          }
        ]

        projects = await getGithubRepos(requestRepos);
    } catch(e){
        console.log("Github API failure")
    }

    return {
        props: {
            projects
        },
        revalidate: 60 * 60
    }
}
