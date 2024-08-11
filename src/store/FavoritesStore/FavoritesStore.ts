import { makeAutoObservable } from "mobx";

import { Repository } from "@/model/Repository";

class FavoritesStore {
  private _data = new Map<number, Repository>();

  constructor() {
    makeAutoObservable(this);
  }

  add(repo: Repository) {
    this._data.set(repo.id, repo);
  }

  remove(id: number) {
    this._data.delete(id);
  }

  toggle(repo: Repository) {
    if (this.data.has(repo.id)) {
      this.remove(repo.id);
    } else {
      this.add(repo);
    }
  }

  exists(id: number) {
    return this.data.has(id);
  }

  get data() {
    return this._data;
  }
}

export default new FavoritesStore();
