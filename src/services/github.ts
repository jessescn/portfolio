import { formatDate } from "../utils/format"

const API_URL = "https://api.github.com"

type Repo = {
  user: string;
  repos: string[];
}

type Language = {
  id: string;
  value: number;
}

type Contributor = {
  username: string,
  avatar: string,
  link: string
}

export const getGithubRepos = async (repos: Repo[]) => {
  let projects = [];

  for(let elm of repos){
    const data = await getProjectsByUser(elm);

    const userProjects = await Promise.all(data.map(async repo => {
      const languages = await getProjectLanguages(repo.full_name)
      const contributors = await getProjectContributors(repo.full_name)
      const commits = await getProjectCommits(repo.full_name)

      return {
        id: repo.id,
        description: repo.description,
        name: repo.name,
        link: repo.html_url,
        contributors,
        languages,
        commits,
      }
    }))

    projects = [...projects, ...userProjects]
  }

  return projects
}


const getProjectsByUser = async (repo: Repo) => {
  
  try {
    const response = await fetch(`${API_URL}/users/${repo.user}/repos?per_page=100`, {
      headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    })

    const data = await response.json()

    return data.filter(project => repo.repos.includes(project.name))

  } catch(error) {
    console.log("Request project by user failure");
    return []
  }
}

const getProjectLanguages = async (repoFullName: string): Promise< Language[]> => {
  try {
    const response = await fetch(`${API_URL}/repos/${repoFullName}/languages`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    })
  
    const data = await response.json()
  
    return Object.keys(data).map((key) => { return { id: key, value: data[key] }})
  } catch (error) {
    console.log("Request project language failure");
    return []
  }
}

const getProjectContributors = async (repoFullName: string): Promise<Contributor[]> => {
  try {
    const response = await fetch(`${API_URL}/repos/${repoFullName}/contributors`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    })

    const data = await response.json()

    const contributors = data.map(elm => {            
        return {
            username: elm.login,
            avatar: elm.avatar_url,
            link: elm.url
        }
    })

    return contributors
  } catch (error) {
    console.log("Request projects contributors failure");
    return []
  }
}

export const getProjectCommits =  async (repoFullName: string) => {
  try {
    const response = await fetch(`${API_URL}/repos/${repoFullName}/commits`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    })

    const data = await response.json()
    
    const commits = data.map(commit => {
      return {
        date: formatDate(commit.commit.author.date)
      }
    })

    return commits
  } catch (error) {
    console.log("Request project commits failure");
    return []
  }
}