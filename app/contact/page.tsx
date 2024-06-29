import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";

export default function Contact() {
  return (
    <Card title="Contact" background={false} list={false} largeTitle>
      Hello world
    </Card>
  );
}
