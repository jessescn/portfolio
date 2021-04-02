import { getPrismicClient } from "../../services/prismic"
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import { Container, Experiences } from "./styles"
import { useEffect, useState } from "react"

import ReactLoading from 'react-loading'

export default function Resume(){

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const prismic = getPrismicClient()
        prismic.query(Prismic.Predicates.at('document.type', 'jobs'),
                    { orderings: '[my.jobs.end desc]', pageSize: 20}
        )
        .then(resp => {            
            const jobsResult = resp.results.map(job => {
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

            setJobs(jobsResult)
            setLoading(false)
        })
    }, [])

    return(
        <Container>
            <h1>
                Until Now
            </h1>
            <Experiences>
                {
                    loading && ( <ReactLoading className="loading" type="spin" color="#C83E4D" height={60} width={37} />)
                }
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