import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "@/api/constant";
import { getRepository } from "@/api/lib/getRepository";

export const useGetRepositoryQuery = (fullName: string) => {
  return useQuery({
    queryKey: [queryKeys.repository, fullName],
    queryFn: () => getRepository(fullName),
  });
};
