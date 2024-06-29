import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";

export default function Projects() {
  return (
    <>
      <Card title="Projects" background list={false} largeTitle>
        Hello world
      </Card>
      <Card title="Notable projects" background={false} list largeTitle={false}>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
      </Card>
    </>
  );
}
