import {
  Language,
  Project,
  RemoteCommit,
  RemoteLanguages,
  RemoteProject
} from '../models/project'
import { formatDate } from '../utils/format'
import axios from 'axios'
import { RemoteContributor } from '../models/contributor'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

type Account = {
  user: string
  repos: string[]
}

export const getGithubRepos = async (accounts: Account[]) => {
  let projects: Project[] = []

  try {
    for (const acc of accounts) {
      const repos = await getReposByUser(acc)

      const userProjects: Project[] = await Promise.all(
        repos.map(async repo => {
          const repoLangs = await getRepoLanguages(repo.full_name)
          const repoContributors = await getRepoContributors(repo.full_name)
          const repoCommits = await getRepoCommits(repo.full_name)

          const languages: Language[] = Object.keys(repoLangs).map(lang => ({
            id: lang,
            value: repoLangs[lang]
          }))

          const contributors = repoContributors.map(elm => {
            return {
              username: elm.login,
              avatar: elm.avatar_url,
              link: elm.url
            }
          })

          const commits = repoCommits.map(commit => {
            return {
              date: formatDate(commit.commit.author.date)
            }
          })

          return {
            id: repo.id,
            description: repo.description,
            name: repo.name,
            link: repo.html_url,
            contributors,
            languages,
            commits
          }
        })
      )

      projects = [...projects, ...userProjects]
    }
  } catch (error) {
    console.log('Github API failure')
  }

  return projects
}

const getReposByUser = async (acc: Account): Promise<RemoteProject[]> => {
  try {
    const { data } = await api.get<RemoteProject[]>(
      `/users/${acc.user}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }
    )

    return data.filter(project => acc.repos.includes(project.name))
  } catch (error) {
    console.log('Request project by user failure')
    return []
  }
}

const getRepoLanguages = async (
  repoFullName: string
): Promise<RemoteLanguages> => {
  try {
    const response = await api.get<RemoteLanguages>(
      `/repos/${repoFullName}/languages`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }
    )

    return response.data
  } catch (error) {
    console.log('Request project language failure')
    return {}
  }
}

const getRepoContributors = async (
  repoFullName: string
): Promise<RemoteContributor[]> => {
  try {
    const response = await api.get<RemoteContributor[]>(
      `/repos/${repoFullName}/contributors`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }
    )

    return response.data
  } catch (error) {
    console.log('Request projects contributors failure')
    return []
  }
}

export const getRepoCommits = async (
  repoFullName: string
): Promise<RemoteCommit[]> => {
  try {
    const response = await api.get<RemoteCommit[]>(
      `/repos/${repoFullName}/commits`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }
    )

    return response.data
  } catch (error) {
    console.log('Request project commits failure')
    return []
  }
}
