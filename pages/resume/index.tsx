import { getPrismicClient } from "../../services/prismic"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import { Experiences } from "../../styles/resume/styles"

import { GetStaticProps } from "next"
import { useEffect } from "react"
import { Title } from "../../components/design/Title"
import { PageContainer } from "../../components/design/PageContainer"

type Job = {
    slug: string,
    role: string,
    at: string,
    startDate: string,
    endDate: string | null,
    summary: string,
    experiences: string[]
}

interface ResumeProps {
    jobs: Job[],
    setShowMenu: (show: boolean) => void
}

export default function Resume({ jobs, setShowMenu }: ResumeProps){

    useEffect(()=> {
        setShowMenu(false)
    },[])

    return(
        <PageContainer>
            <Title fontSize={2.2}>
                Until Now
            </Title>
            <Experiences>
                {   jobs.map(job =>
                        (
                        <div key={job.slug}>
                            <h2>{job.role}</h2>
                            <span><i>at {job.at}</i></span> 
                            <p>{job.summary}</p>
                            <ul>
                            {job.experiences.map(xp => (
                                <li key={xp}>{xp}</li>
                            ))}
                            </ul>
                        </div> 
                        )
                    )
                }
            </Experiences>
        </PageContainer>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()
    const response = await prismic.query(Prismic.Predicates.at('document.type', 'jobs'),
                { orderings: '[my.jobs.end]', pageSize: 20})

    const jobs = response.results.map(job => {
        return {
            slug: job.uid,
            role: RichText.asText(job.data.role),
            at: RichText.asText(job.data.at),
            startDate: new Date(job.data.start).toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric'
            }),
            endDate: job.data.end ? new Date(job.data.end).toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric'
            }) : null,
            summary: RichText.asText(job.data.summary),
            experiences: job.data.experiences.map(exp => exp.text)
        }})
    
    return {
        props:{
            jobs
        },
        revalidate: 60 // 1 minute 
    }
}