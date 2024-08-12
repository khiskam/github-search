import { NavLink, useParams } from "react-router-dom";

import { useGetRepositoryQuery } from "@/api/hook/useGetRepositoryQuery";

import Alert from "../Alert";
import Loader from "../Loader";
import { RepositoryData } from "./RepositoryData";
import { RepositoryProfile } from "./RepositoryProfile";

const Repository = () => {
  const { userName, repoName } = useParams();
  const fullName = `${userName}/${repoName}`;

  const { data, isLoading, isError } = useGetRepositoryQuery(fullName);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <Alert message="Произошла ошибка. Попробуйте позже..." />;
  }

  if (!data) {
    return (
      <Alert message={`Информации о репозитории ${fullName} не найдено...`} />
    );
  }

  return (
    <section className="grid gap-8">
      <h2 className="text-slate-600 font-bold text-2xl">{data.full_name}</h2>

      <div className="grid lg:grid-cols-[1fr_2fr] md:grid-cols-1 gap-4">
        <RepositoryProfile owner={data.owner} />
        <RepositoryData repo={data} />
      </div>

      <NavLink
        to="/"
        className="text-slate-600 font-bold hover:underline"
        aria-label={"На главную"}
      >
        На главную
      </NavLink>
    </section>
  );
};

export default Repository;
