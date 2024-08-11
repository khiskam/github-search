import { InfiniteData } from "@tanstack/react-query";

import { RepositoryResponse } from "@/api/lib/getRepositories";
import { Repository } from "@/model/Repository";

export const getList = (data: InfiniteData<RepositoryResponse>) => {
  return data.pages.reduce(
    (acc: Repository[], prev: RepositoryResponse): Repository[] => [
      ...acc,
      ...prev.items,
    ],
    []
  );
};
