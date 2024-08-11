import { FC } from "react";
import List from "react-infinite-scroll-component";

import { useGetRepositoriesQuery } from "@/api/hook/useGetRepositoriesQuery";

import Alert from "../Alert";
import Loader from "../Loader";
import RepositoryCard from "../RepositoryCard";
import { getList } from "./helper";
import { RepositoriesListProps } from "./type";

const RepositoriesList: FC<RepositoriesListProps> = ({ q }) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useGetRepositoriesQuery(q);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Alert message="Произошла ошибка. Попробуйте позже..." />;
  }

  if (q === "") {
    return <Alert message="Введите поисковый запрос" />;
  }

  if (!data) {
    return <Alert message={`По запросу "${q}" ничего не найдено`} />;
  }

  const listData = getList(data);

  if (listData.length === 0) {
    return <Alert message={`По запросу "${q}" ничего не найдено`} />;
  }

  return (
    <List
      dataLength={listData.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Alert icon={<Loader />} />}
      endMessage={<Alert message="Вы дошли до конца списка" />}
      className="p-2"
    >
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {listData.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
    </List>
  );
};

export const RepositoriesListWithTitle: FC<RepositoriesListProps> = (props) => {
  return (
    <div className="grid gap-4">
      <h2 className="text-slate-700 font-bold text-2xl">Список репозиториев</h2>
      <RepositoriesList {...props} />
    </div>
  );
};

export default RepositoriesListWithTitle;
