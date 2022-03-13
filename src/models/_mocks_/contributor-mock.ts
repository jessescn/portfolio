import { Contributor } from '../contributor'

export class ContributorMockBuilder {
  private username = ''
  private avatar = ''
  private link = ''

  withUsername(value: string) {
    this.username = value
    return this
  }

  withAvatar(value: string) {
    this.avatar = value
    return this
  }

  withLink(value: string) {
    this.link = value
    return this
  }

  build(): Contributor {
    return {
      avatar: this.avatar,
      link: this.link,
      username: this.username
    }
  }
}
