export type Language = {
  id: string;
  value: number;
};

export type Contributor = {
  username: string;
  avatar: string;
  link: string;
};

type Commit = {
  date: string;
};

export type Project = {
  id: number;
  description: string;
  name: string;
  link: string;
  contributors: Contributor[];
  languages: Language[];
  commits: Commit[];
};
