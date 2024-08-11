import { FC } from "react";

import { DescriptionProps } from "./type";

const Description: FC<DescriptionProps> = ({ label, value }) => {
  return (
    <div className="grid gap-y-0.5">
      <span className="text-slate-400">{label}:</span>
      <p className="text-slate-600 font-bold">{value}</p>
    </div>
  );
};

export default Description;
