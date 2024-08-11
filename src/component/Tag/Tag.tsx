import { FC } from "react";

import { TagProps } from "./type";

const Tag: FC<TagProps> = ({ icon, value }) => {
  return (
    <div className="flex items-center gap-x-2 bg-slate-200 rounded-full px-3 py-1.5 text-sm font-bold text-slate-600">
      {icon}
      <span>{value}</span>
    </div>
  );
};

export default Tag;
