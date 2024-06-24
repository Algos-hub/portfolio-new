import React, { ReactNode } from "react";
import styles from "./Card.module.css";

export default function Card({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>): ReactNode {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
