import React, { ReactNode } from "react";
import styles from "./Card.module.css";

function List({ children }: Readonly<{ children: ReactNode }>): ReactNode {
  return <ul className={styles.list}>{children}</ul>;
}

export default function Card({
  title,
  list = false,
  background = true,
  children,
}: Readonly<{
  title: string;
  list: boolean;
  background: boolean;
  children: React.ReactNode;
}>): ReactNode {
  return (
    <div
      className={`${styles.card} ${!background ? styles.cardNoBackground : ""}`}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {list ? <List>{children}</List> : children}
      </div>
    </div>
  );
}
