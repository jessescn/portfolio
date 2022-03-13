import { Job } from '../job'

export class JobMockBuilder {
  private slug = ''
  private role = ''
  private at = ''
  private startDate = ''
  private endDate = null
  private summary = ''
  private experiences = []

  withRole(value: string) {
    this.role = value
    return this
  }

  withAt(value: string) {
    this.at = value
    return this
  }

  withStartDate(value: string) {
    this.startDate = value
    return this
  }

  withEndDate(value: string) {
    this.endDate = value
    return this
  }

  withSummary(value: string) {
    this.summary = value
    return this
  }

  withExperiences(value: string[]) {
    this.experiences = value
    return this
  }

  build(): Job {
    return {
      at: this.at,
      endDate: this.endDate,
      experiences: this.experiences,
      role: this.role,
      slug: this.slug,
      startDate: this.startDate,
      summary: this.summary
    }
  }
}
