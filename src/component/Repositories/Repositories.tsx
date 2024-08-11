import { useThrottle } from "ahooks";
import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

import FavoritesList from "../FavoritesList";
import RepositoriesList from "../RepositoriesList";
import Search from "../Search";

const Repositories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState<string>(searchParams.get("q") ?? "");
  const throttledValue = useThrottle(q, { wait: 400 });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;

    setQ(q);
    setSearchParams({ q });
  };

  return (
    <div className="container">
      <div className="grid gap-12 mt-8">
        <Search q={q} onChange={onChange} />
        <FavoritesList />
        <RepositoriesList q={throttledValue} />
      </div>
    </div>
  );
};

export default Repositories;
