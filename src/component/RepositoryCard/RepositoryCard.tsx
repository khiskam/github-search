import { ChevronRight, FolderHeart, GitFork, Star } from "lucide-react";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import FavoritesStore from "@/store/FavoritesStore";

import { RepositoryCardProps } from "./type";

const RepositoryCard: FC<RepositoryCardProps> = observer(({ repo }) => {
  return (
    <div className="grid gap-y-4 p-4 rounded shadow">
      <img
        className="h-16 w-16 rounded-full"
        src={repo.owner.avatar_url}
        alt={`${repo.full_name}'s avatar`}
      />

      <a
        href={repo.html_url}
        className="font-bold text-xl text-slate-600 truncate object-contain"
        target="_blank"
      >
        {repo.full_name}
      </a>

      <div className="flex justify-between flex-wrap mt-2 gap-2">
        <div className="flex gap-1">
          <span className="flex items-center gap-x-2 bg-slate-200 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600">
            <Star />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-x-2 bg-slate-200 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600">
            <GitFork />
            {repo.forks_count}
          </span>
        </div>

        <div className="flex  gap-1">
          <button
            className="flex items-center gap-x-2 bg-slate-200 rounded-full px-1.5 py-1.5 text-sm font-semibold"
            onClick={() => FavoritesStore.toggle(repo)}
          >
            <FolderHeart
              className={
                FavoritesStore.exists(repo.id)
                  ? "text-blue-600"
                  : "text-slate-600"
              }
            />
          </button>
          <NavLink
            to={`/repos/${repo.full_name}`}
            className="flex items-center gap-x-2 bg-slate-200 rounded-full px-1.5 py-1.5 text-sm font-semibold text-slate-600"
          >
            <ChevronRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
});

export default RepositoryCard;
