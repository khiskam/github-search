import { Repository } from "@/model/Repository";

import { axiosClient } from "../axiosClient";

export const getRepository = async (fullName: string) => {
  const response = await axiosClient.get<Repository>(`/repos/${fullName}`);

  return response.data;
};
