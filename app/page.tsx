import Image from "next/image";
import styles from "./page.module.css";
import { ReactNode } from "react";
import Card from "@/components/Card/Card";

export default function Home(): ReactNode {
  return (
    <>
      <div className={styles.introContainer}>
        <div className={styles.introText}>
          <h1>Hello world</h1>
          <p>Sample text</p>
        </div>
        <div className={styles.introImageContainer}>
          <Image
            src="/face-logo.png"
            alt=""
            fill
            priority
            sizes="(max-width: 250px)"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <Card
        title="Looking for something in particular?"
        background
        list
        largeTitle={false}
      >
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
      </Card>
      <Card title="Latest projects" background list largeTitle={false}>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
      </Card>
      <Card title="Latest posts" background={false} list largeTitle={false}>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
      </Card>
    </>
  );
}
