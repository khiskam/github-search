import { Check, Copy } from "lucide-react";
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button
      className="shadow items-center gap-x-2 border rounded px-1.5 text-sm font-semibold text-slate-600"
      onClick={isWritten ? undefined : copy}
    >
      {isWritten ? <Check /> : <Copy />}
    </button>
  );
};

export default CopyButton;
