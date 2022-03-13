import { Contributor } from './contributor'

export type Language = {
  id: string
  value: number
}

export type RemoteLanguages = {
  [language: string]: number
}

export type Commit = {
  date: string
}

export type RemoteCommit = {
  commit: {
    author: {
      date: string
    }
  }
}

export type Project = {
  id: number
  description: string
  name: string
  link: string
  contributors: Contributor[]
  languages: Language[]
  commits: Commit[]
}

export type RemoteProject = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
}
