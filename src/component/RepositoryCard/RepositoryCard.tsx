import { ChevronRight, FolderHeart, GitFork, Star } from "lucide-react";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import FavoritesStore from "@/store/FavoritesStore";

import Tag from "../Tag";
import { RepositoryCardProps } from "./type";

const buttonStyles =
  "flex items-center gap-x-2 bg-slate-200 rounded-full px-1.5 py-1.5 text-sm font-bold text-slate-600 transition-all duration-500 hover:bg-slate-300";

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
        className="font-bold text-xl text-slate-600 truncate hover:underline"
        target="_blank"
      >
        {repo.full_name}
      </a>

      <div className="flex justify-between flex-wrap mt-2 gap-2">
        <div className="flex gap-1">
          <Tag icon={<Star />} value={repo.stargazers_count} />
          <Tag icon={<GitFork />} value={repo.forks_count} />
        </div>

        <div className="flex gap-1">
          <button
            className={buttonStyles}
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
          <NavLink to={`/repos/${repo.full_name}`} className={buttonStyles}>
            <ChevronRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
});

export default RepositoryCard;
