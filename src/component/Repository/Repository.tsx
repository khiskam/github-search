import { GitFork, Star } from "lucide-react";
import { useParams } from "react-router-dom";

import { useGetRepositoryQuery } from "@/api/hook/useGetRepositoryQuery";

import Loader from "../Loader";

const Repository = () => {
  const { userName, repoName } = useParams();

  const { data, isLoading, isError } = useGetRepositoryQuery(
    `${userName}/${repoName}`
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <>error</>;
  }

  if (!data) {
    return <>not found</>;
  }

  return (
    <section className="container">
      <div className="grid grid-cols-[1fr_2fr] gap-4">
        <div className="shadow p-8 rounded grid gap-4">
          <img
            src={data.owner.avatar_url}
            alt=""
            className="w-full object-contain rounded-full"
          />
          <a href={data.owner.html_url} className="hover:underline">
            {data.owner.login}
          </a>
        </div>

        <div className="shadow p-8 rounded grid align-top">
          <div className="flex gap-1 align-top">
            <span className="flex  gap-x-2 bg-slate-200 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600">
              <Star />
              {data.stargazers_count}
            </span>
            <span className="flex  gap-x-2 bg-slate-200 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600">
              <GitFork />
              {data.forks_count}
            </span>
            <span className="flex  gap-x-2 bg-slate-200 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600">
              {data.language}
            </span>
            <span className="flex  gap-x-2 bg-slate-200 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600">
              {data.private ? "Приватный" : "Публичный"}
            </span>
            <span className="flex  gap-x-2 bg-slate-200 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600">
              Создано {new Date(data.created_at).toLocaleDateString("ru")}
            </span>
            <span className="flex  gap-x-2 bg-slate-200 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600">
              {new Date(data.created_at).toLocaleDateString("ru")}
            </span>

            {data.archived && (
              <span className="flex  gap-x-2 bg-slate-200 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600">
                В архиве
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repository;
