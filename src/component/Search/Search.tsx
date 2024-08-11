import { FC } from "react";

import CopyButton from "../CopyButton";
import { SearchProps } from "./type";

const Search: FC<SearchProps> = ({ q, onChange }) => {
  return (
    <form className="flex gap-2 mb-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
        id="search"
        type="text"
        placeholder="Введите поисковый запрос"
        onChange={onChange}
        value={q}
      />
      <CopyButton text={q} />
    </form>
  );
};

export default Search;
