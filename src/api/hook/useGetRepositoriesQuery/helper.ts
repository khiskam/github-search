import { pagination } from "@/api/constant";
import { RepositoryResponse } from "@/api/lib/getRepositories";

export const getNextPageParam = (
  lastPage: RepositoryResponse,
  allPages: RepositoryResponse[]
): undefined | number => {
  const totalCount = allPages.reduce(
    (acc: number, curr: RepositoryResponse): number => acc + curr.items.length,
    0
  );

  if (
    totalCount >= lastPage.total_count ||
    allPages.length === Math.floor(pagination.maxPagesCount / pagination.limit)
  ) {
    return undefined;
  }

  return allPages.length + 1;
};
