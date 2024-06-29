import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";

export default function About() {
  return (
    <>
      <div className={styles.introContainer}>
        <div className={styles.introText}>
          <h1>About</h1>
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
      <Card title="Who I am" background list={false} largeTitle={false}>
        Hello world
      </Card>
      <Card title="Current skills" background list={false} largeTitle={false}>
        Hello world
      </Card>
      <Card title="Latest projects" background={false} list largeTitle={false}>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
        <li className={styles.listItem}></li>
      </Card>
    </>
  );
}
