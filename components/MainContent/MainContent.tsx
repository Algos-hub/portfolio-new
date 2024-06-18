import React, { ReactNode } from "react";
import styles from "./MainContent.module.css";

export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactNode {
  return <div className={styles.card}>{children}</div>;
}
