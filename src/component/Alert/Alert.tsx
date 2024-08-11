import { FC } from "react";

import { AlertProps } from "./type";

const Alert: FC<AlertProps> = ({ message, icon }) => {
  return (
    <div
      className="bg-slate-100 rounded text-slate-600 mt-4 px-4 py-3"
      role="alert"
    >
      {icon}
      <p className="font-bold">{message}</p>
    </div>
  );
};

export default Alert;
