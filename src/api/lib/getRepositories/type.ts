import { Repository } from "@/model/Repository";

export type RepositoryResponse = {
  total_count: number;
  items: Repository[];
};
