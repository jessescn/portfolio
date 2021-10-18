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

export const getGithubRepos = async (repos: Repo[], token: string) => {
  let projects = [];

  for(let elm of repos){
    const data = await getProjectsByUser(elm, token);

    const userProjects = await Promise.all(data.map(async repo => {
      const languages = await getProjectLanguages(repo.full_name, token);
      const contributors = await getProjectContributors(repo.full_name, token);

      return {
        id: repo.id,
        description: repo.description,
        name: repo.name,
        link: repo.html_url,
        contributors,
        languages,
      }
    }))

    projects = [...projects, ...userProjects]
  }

  return projects
}


const getProjectsByUser = async (repo: Repo, token) => {
  try {
    const response = await fetch(`${API_URL}/users/${repo.user}/repos?per_page=100`, {
      headers: {
          Authorization: `token ${token}`
      }
    })

    const data = await response.json()

    return data.filter(project => repo.repos.includes(project.name))

  } catch(error) {
    console.log("Request project by user failure");
    return []
  }
}

const getProjectLanguages = async (repoName: string, token: string): Promise< Language[]> => {
  try {
    const response = await fetch(`${API_URL}/repos/${repoName}/languages`, {
      headers: {
          Authorization: `token ${token}`
      }
    })
  
    const data = await response.json()
  
    return Object.keys(data).map((key) => { return { id: key, value: data[key] }})
  } catch (error) {
    console.log("Request project language failure");
    return []
  }
}

const getProjectContributors = async (repoName: string, token: string): Promise<Contributor[]> => {
  try {
    const response = await fetch(`${API_URL}/repos/${repoName}/contributors`, {
      headers: {
          Authorization: `token ${token}`
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