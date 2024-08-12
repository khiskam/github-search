import { FC, useLayoutEffect, useRef, useState } from "react";

import { CopyButtonProps } from "./type";

const CopyButton: FC<CopyButtonProps> = ({ text }) => {
  const [isWritten, setIsWritten] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useLayoutEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setIsWritten(true);
      timer.current = setTimeout(() => setIsWritten(false), 2000);
    } catch {
      // подумать про обработку
    }
  };

  return (
    <button
      className="shadow border rounded px-1.5 text-slate-600 transition-all duration-500 hover:bg-slate-100"
      onClick={isWritten ? undefined : copy}
      type="button"
      aria-label={isWritten ? "Copied" : "Copy"}
    >
      {isWritten ? "Copied" : "Copy"}
    </button>
  );
};

export default CopyButton;
