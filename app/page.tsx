import Image from "next/image";
import styles from "./page.module.css";
import MainContent from "@/components/MainContent/MainContent";

export default function Home() {
  return (
    <main className={styles.page}>
      <MainContent>
        <p>Hello world</p>
      </MainContent>
    </main>
  );
}
