import { ReactNodeChildren } from "interfaces";
import styles from "styles/two-column.module.css";

export function TwoColumn({ children }: ReactNodeChildren) {
  return <div className={styles.flexContainer}>{children}</div>;
}

export function TwoColumnMain({ children }: ReactNodeChildren) {
  return <div className={styles.main}>{children}</div>;
}

export function TwoColumnSidebar({ children }: ReactNodeChildren) {
  return <div className={styles.sidebar}>{children}</div>;
}
