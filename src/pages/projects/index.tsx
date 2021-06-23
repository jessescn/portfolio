import { GetStaticProps } from "next";
import { useEffect } from "react";
import { PageContainer } from "../../components/design/PageContainer";
import { Title } from "../../components/design/Title";
import { Content, Project } from "../../styles/projects/styles";

import Head from 'next/head'

type Project =  {
    id: number,
    description: string,
    name: string,
    link: string,
    languages: string[]
}

interface ProjectsProps {
    projects: Project[],
    setShowMenu: (show: boolean) => void
}

export default function Projects({ projects, setShowMenu }: ProjectsProps){

    useEffect(()=> {
        setShowMenu(false)
    },[])
    
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
                    <Project key={project.id} href={project.link} target="_blank">
                        <h1>{project.name}</h1>
                        <strong>{project.description}</strong>
                        <div>
                            <p>Tecnologias</p>
                            <span>{project.languages}</span>
                        </div>
                    </Project>
                ))}
            </Content>
            }
        </PageContainer>
    )   
}

export const getStaticProps: GetStaticProps = async() => {

    const validRepos = ["sos-money", "ignews", "custom-notion-template", "portfolio", "moveit"]
    let projects = []

    try {
        const response = await fetch('https://api.github.com/users/jessescn/repos?per_page=100', {
            headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`
            }
        })
        
        const data = await response.json()
    
        if(data.length){
            projects = data.map(repo => {
                return {
                    id: repo.id,
                    description: repo.description,
                    name: repo.name,
                    link: repo.html_url,
                    languages: repo.language
                }
            }).filter(elm => validRepos.includes(elm.name))
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
