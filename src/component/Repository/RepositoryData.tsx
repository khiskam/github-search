import { FC } from "react";

import Description from "../Description";
import { RepositoryDataProps } from "./type";

export const RepositoryData: FC<RepositoryDataProps> = ({ repo }) => {
  return (
    <div className="shadow p-8 rounded grid gap-8 content-center">
      <div className="grid gap-2">
        <p className="text-xl text-slate-600 font-bold">{repo.full_name}</p>
        <p className="text-slate-600">{repo.description}</p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <Description label="Количество звезд" value={repo.stargazers_count} />
        <Description label="В архиве" value={repo.archived ? "да" : "нет"} />
        <Description label="Количество форков" value={repo.forks_count} />
        <Description label="Язык" value={repo.language ?? "-"} />
        <Description
          label="Создано"
          value={new Date(repo.created_at).toLocaleDateString("ru")}
        />
        <Description
          label="Изменено"
          value={new Date(repo.updated_at).toLocaleDateString("ru")}
        />
        {repo.private && <Description label="Приватный" value="да" />}
      </div>
      {!repo.private && (
        <a
          href={repo.html_url}
          target="_blank"
          className="text-slate-600 font-bold hover:underline"
        >
          Открыть репозиторий
        </a>
      )}
    </div>
  );
};
