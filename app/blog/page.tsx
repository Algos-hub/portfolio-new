import Image from "next/image";
import shared from "@/app/shared.module.css";
import Card from "@/components/Card/Card";

export default function Blog() {
  return (
    <>
      <Card title="Blog" background list={false} largeTitle>
        Hello world
      </Card>
      <Card title="" background={false} list largeTitle={false}>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
      </Card>
    </>
  );
}
