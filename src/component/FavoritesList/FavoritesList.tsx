import { observer } from "mobx-react-lite";

import FavoritesStore from "@/store/FavoritesStore";

import Alert from "../Alert";
import RepositoryCard from "../RepositoryCard";

const FavoritesList = observer(() => {
  const favorites = Array.from(FavoritesStore.data);

  return (
    <section className="grid gap-4">
      <h2 className="text-slate-600 font-bold text-2xl">Избранное</h2>

      {FavoritesStore.data.size === 0 ? (
        <Alert message="В избранных пока ничего нет..." />
      ) : (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          {favorites.map(([id, repo]) => (
            <RepositoryCard key={id} repo={repo} />
          ))}
        </div>
      )}
    </section>
  );
});
export default FavoritesList;
