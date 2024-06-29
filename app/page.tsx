import Image from "next/image";
import shared from "./shared.module.css";
import { ReactNode } from "react";
import Card from "@/components/Card/Card";

export default function Home(): ReactNode {
  return (
    <>
      <div className={shared.introContainer}>
        <div className={shared.introText}>
          <h1 className={shared.title}>Hello, I'm Pedro.</h1>
          <p className={shared.paragraph}>Sample text</p>
          <p className={shared.paragraph}>Sample text</p>
          <p className={shared.paragraph}>Sample text</p>
        </div>
        <div className={shared.introImageContainer}>
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
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
      </Card>
      <Card title="Latest projects" background list largeTitle={false}>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
      </Card>
      <Card title="Latest posts" background={false} list largeTitle={false}>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
      </Card>
    </>
  );
}
