import List from "react-infinite-scroll-component";

import { useGetRepositoriesQuery } from "@/api/hook/useGetRepositoriesQuery";
import { RepositoryResponse } from "@/api/lib/getRepositories";
import { Repository } from "@/model/Repository";
import Loader from "@/ui/Loader";

const RepositoriesList = () => {
  const { data, fetchNextPage, hasNextPage, isError } =
    useGetRepositoriesQuery("123");

  console.log(hasNextPage);

  if (isError) {
    return <p>Сервис пока не доступен</p>;
  }

  if (!data) {
    return <p>пока нет данных</p>;
  }

  const listData = data.pages.reduce(
    (acc: Repository[], prev: RepositoryResponse): Repository[] => [
      ...acc,
      ...prev.items,
    ],
    []
  );

  if (listData.length === 0) {
    return <p></p>;
  }

  return (
    <List
      dataLength={listData.length}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Loader />}
      endMessage={<p>вы дошли до конца списка</p>}
    >
      {listData.map((item) => (
        <p key={item.id}>{item.full_name}</p>
      ))}
    </List>
  );
};

export default RepositoriesList;
