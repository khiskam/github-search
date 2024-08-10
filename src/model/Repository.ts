import { RepositoryOwner } from "./RepositoryOwner";

export type Repository = {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  private: boolean;

  owner: RepositoryOwner;
  language: string;
  archived: boolean;
  stargazers_count: number;
  forks_count: number;

  created_at: Date;
  updated_at: Date;
};
