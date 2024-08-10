import { pagination } from "@/api/constant";

import { axiosClient } from "../axiosClient";
import { RepositoryResponse } from "./type";

export const getRepositories = async (q: string, page: number) => {
  const response = await axiosClient.get<RepositoryResponse>(
    "/search/repositories",
    {
      params: { q, page, per_page: pagination.limit },
    }
  );

  return response.data;
};
