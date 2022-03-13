import { Commit, Language, Project } from '../project'

export class ProjectMockBuilder {
  private id = 0
  private description = ''
  private name = ''
  private link = ''
  private contributors = []
  private languages = []
  private commits = []

  withId(value: number) {
    this.id = value
    return this
  }

  withName(value: string) {
    this.name = value
    return this
  }

  withDescription(value: string) {
    this.description = value
    return this
  }

  withLanguages(value: Language[]) {
    this.languages = value
    return this
  }

  withCommits(value: Commit[]) {
    this.commits = value
    return this
  }

  build(): Project {
    return {
      commits: this.commits,
      contributors: this.contributors,
      description: this.description,
      id: this.id,
      languages: this.languages,
      link: this.link,
      name: this.name
    }
  }
}
