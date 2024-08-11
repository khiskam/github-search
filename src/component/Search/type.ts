import { ChangeEventHandler } from "react";

export type SearchProps = {
  q: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
