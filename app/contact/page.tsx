import Image from "next/image";
import shared from "@/app/shared.module.css";
import Card from "@/components/Card/Card";

export default function Contact() {
  return (
    <Card title="Contact" background={false} list={false} largeTitle>
      Hello world
    </Card>
  );
}
