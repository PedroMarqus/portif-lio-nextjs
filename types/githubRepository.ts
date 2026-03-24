export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;    
  homepage: string | null; 
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string; 
  };
}


export type GitHubRepositoryList = GitHubRepository[];