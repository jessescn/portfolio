import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Title } from "../../components/design/Title";
import { Content, Project, Container as PageContainer } from "../../styles/projects/styles";

import Head from 'next/head'
import { ProjectModal } from "../../components/ProjectModal";
import { formatProjectName } from "../../utils/format";

type Language = {
    id: string,
    value: number
}

type Contributor = {
    username: string,
    avatar: string,
    link: string,
  }

type Project =  {
    id: number,
    description: string,
    name: string,
    link: string,
    contributors: Contributor[],
    languages: Language[]
}

interface ProjectsProps {
    projects: Project[],
    setShowMenu: (show: boolean) => void
}

export default function Projects({ projects, setShowMenu }: ProjectsProps){

    const [modalProject, setModalProject] =  useState({ id: 0, description: "", name: "", link: "", languages: [], contributors: [] });
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
                                <span key={language.id}>{`${language.id} ${i !== project.languages.length - 1 ? '-' : ''} `}</span>
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

    const validRepos = ["sos-money", "ignews", "custom-notion-template", "portfolio", "moveit", "dj-marques", "go-go"]
    let projects = []

    try {
        const response = await fetch('https://api.github.com/users/jessescn/repos?per_page=100', {
            headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`
            }
        })
        
        let data = await response.json()
    
        if(data.length){
            projects = await Promise.all(data.map(async repo => {
                const jsonResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/languages`, {
                    headers: {
                        Authorization: `token ${process.env.GITHUB_TOKEN}`
                    }
                })

                let data = await jsonResponse.json();
                const languages = Object.keys(data).map((key) => { return { id: key, value: data[key] }})

                const response = await fetch(`https://api.github.com/repos/${repo.full_name}/contributors`, {
                    headers: {
                        Authorization: `token ${process.env.GITHUB_TOKEN}`
                    }
                })

                data = await response.json()

                const contributors = data.map(elm => {            
                    return {
                        username: elm.login,
                        avatar: elm.avatar_url,
                        link: elm.url
                    }
                })
                                
                return {
                    id: repo.id,
                    description: repo.description,
                    name: repo.name,
                    link: repo.html_url,
                    contributors: contributors,
                    languages,
                }
            }))

            projects = projects.filter(elm => validRepos.includes(elm.name))
        }

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
