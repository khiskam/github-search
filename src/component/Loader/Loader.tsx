import { LoaderCircle } from "lucide-react";

import styles from "./style.module.css";

const Loader = () => {
  return <LoaderCircle size={32} className={styles.loader} />;
};

export default Loader;
