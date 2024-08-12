import { FC } from "react";

import { RepositoriesList } from "./RepositoriesList";
import { RepositoriesListProps } from "./type";

export const RepositoriesListWithTitle: FC<RepositoriesListProps> = (props) => {
  return (
    <section className="grid gap-4">
      <h2 className="text-slate-600 font-bold text-2xl">Список репозиториев</h2>
      <RepositoriesList {...props} />
    </section>
  );
};

export default RepositoriesListWithTitle;
