import { render, screen } from '../../../../jest'
import { JobMockBuilder } from '../../../../models/_mocks_/job-mock'
import ResumeItem from '../index'

describe('ResumeItem component', () => {
  const job = new JobMockBuilder()
    .withRole('developer')
    .withAt('lab')
    .withStartDate('01/01/2021')
    .withEndDate('02/01/2021')
    .withSummary('summary')
    .withExperiences(['experience 1', 'experience 2'])
    .build()

  it('should render correctly', () => {
    render(<ResumeItem job={job} />)

    expect(screen.getByText(job.role)).toBeTruthy()
    expect(screen.getByText(`at ${job.at}`)).toBeTruthy()
    expect(screen.getByText(`${job.startDate} - ${job.endDate}`)).toBeTruthy()
    expect(screen.getByText(job.summary)).toBeTruthy()
    expect(screen.getByText(job.experiences[0])).toBeTruthy()
    expect(screen.getByText(job.experiences[1])).toBeTruthy()
  })

  it("should show 'Present' when endDate is not defined", () => {
    render(<ResumeItem job={{ ...job, endDate: null }} />)

    expect(screen.getByText(`${job.startDate} - Present`)).toBeTruthy()
  })
})
