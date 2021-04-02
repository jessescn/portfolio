import { GetStaticProps } from "next";

import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import { Container, Experiences } from "./styles";

type Job = {
    slug: string;
    role: string,
    at: string,
    startDate: string,
    endDate: string | null,
    summary: string,
    experiences: string[]
}

interface ResumeProps {
    jobs: Job[]
}

export default function Resume({ jobs }: ResumeProps){
    return(
        <Container>
            <h1>
                Until Now
            </h1>
            <Experiences>
              {jobs.map(job =>
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
              )}
            </Experiences>
        </Container>
    )
}

export const getStaticProps: GetStaticProps = async() => {
    const prismic = getPrismicClient()
    const response = await prismic.query(
        Prismic.Predicates.at('document.type', 'jobs'),
        { orderings: '[my.jobs.end desc]', pageSize: 100}
    ,
    )

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
        }
    })

    return {
        props: {
            jobs
        },
        revalidate: 60 * 60 * 24 // 24 horas
    }
    
}
