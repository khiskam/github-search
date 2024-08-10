import { useInfiniteQuery } from "@tanstack/react-query";

import { pagination, queryKeys } from "@/api/constant";
import { getRepositories } from "@/api/lib/getRepositories";

import { getNextPageParam } from "./helper";

export const useGetRepositoriesQuery = (q: string) => {
  return useInfiniteQuery({
    initialPageParam: pagination.initialPageParam,
    queryKey: [queryKeys.repository, q],
    queryFn: ({ pageParam }) => getRepositories(q, pageParam),
    enabled: !!q,
    getNextPageParam,
  });
};
