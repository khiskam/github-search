import { Repository } from "@/model/Repository";
import { RepositoryOwner } from "@/model/RepositoryOwner";

export type RepositoryProfileProps = {
  owner: RepositoryOwner;
};

export type RepositoryDataProps = {
  repo: Omit<Repository, "owner">;
};
