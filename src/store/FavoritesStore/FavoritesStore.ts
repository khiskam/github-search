import { makeAutoObservable } from "mobx";

import { Repository } from "@/model/Repository";

class FavoritesStore {
  private _data: Repository[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  add(repo: Repository) {
    this._data.push(repo);
  }

  get data() {
    return this._data;
  }
}

export default new FavoritesStore();
