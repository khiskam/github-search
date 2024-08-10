export const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;
export const GITHUB_ACCESS_TOKEN = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

export const pagination = {
  limit: 30,
  initialPageParam: 1,
  maxPagesCount: 1000,
};

export const queryKeys = {
  repositories: "repositories",
  repository: "repository",
} as const;
