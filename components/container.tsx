import { ReactNode } from "react";
import styles from "styles/container.module.css";

type Props = {
  children: ReactNode
  large?: boolean
}

export default function Container({ children, large = false }: Props) {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
}
