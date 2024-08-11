import { FC } from "react";

import { RepositoryProfileProps } from "./type";

export const RepositoryProfile: FC<RepositoryProfileProps> = ({ owner }) => {
  return (
    <div className="shadow p-8 rounded grid gap-3 lg:grid-cols-1 md:grid-cols-2">
      <img
        src={owner.avatar_url}
        alt=""
        className="md:w-full w-1/2 object-contain rounded-full shadow"
      />

      <div className="grid gap-1 content-center">
        <p className="text-xl text-slate-600 font-bold">{owner.login}</p>
        <a
          href={owner.html_url}
          target="_blank"
          className="text-slate-600 font-bold hover:underline"
        >
          Открыть профиль
        </a>
      </div>
    </div>
  );
};
