import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Container, Content } from "./styles";

type Project =  {
    id: number,
    description: string,
    name: string,
    link: string,
    languages: string[]
}

interface ProjectsProps {
    projects: Project[]
}

export default function Projects({ projects }: ProjectsProps){
    
    return(
        <Container>
            <h1>
                What i've been doing
                <div></div>
            </h1>
            <Content>
                {projects.map(project => (
                    <a key={project.id} href={project.link} target="_blank">
                        <h1>{project.name}</h1>
                        <strong>{project.description}</strong>
                        <div>
                            <p>Tecnologias</p>
                            <span>{project.languages}</span>
                        </div>
                    </a>
                ))}
            </Content>
        </Container>
    )   
}

export const getStaticProps: GetStaticProps = async() => {

    const validRepos = ["dt-money", "ignews", "all-i-know-about-GAS"]

    const response = await fetch('https://api.github.com/users/jessescn/repos')
    const data = await response.json()

    const projects = data.map(repo => {
        return {
            id: repo.id,
            description: repo.description,
            name: repo.name,
            link: repo.html_url,
            languages: repo.language
        }
    }).filter(elm => validRepos.includes(elm.name))

    return {
        props: {
            projects
        }
    }
    
}