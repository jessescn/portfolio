import { memo } from 'react'
import { Job } from '../../../models/job'
import { Experience } from './styles'

type Props = {
  job: Job
}

const ResumeItem = ({ job }: Props) => {
  const { role, at, startDate, endDate, summary, experiences } = job

  return (
    <Experience>
      <h2>{role}</h2>
      <span>at {at}</span>
      <time>
        {startDate} - {endDate ?? 'Present'}
      </time>
      <p>{summary}</p>
      <ul>
        {experiences.map(xp => (
          <li key={xp}>{xp}</li>
        ))}
      </ul>
    </Experience>
  )
}

export default memo(ResumeItem)
