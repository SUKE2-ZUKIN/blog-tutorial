import { ReactNodeChildren } from "interfaces";
import styles from "styles/post-body.module.css";

export default function PostBody({ children }: ReactNodeChildren) {
  return <div className={styles.stack}>{children}</div>;
}
