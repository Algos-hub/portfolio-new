import Image from "next/image";
import shared from "@/app/shared.module.css";
import Card from "@/components/Card/Card";

export default function About() {
  return (
    <>
      <Card title="About" background={false} list={false} largeTitle>
        <p className={shared.paragraph}>
          I'm a Web Developer building Websites and Web Applications that leads
          to the success of the overall product.
        </p>
        <p className={shared.paragraph}>
          I also like sharing content related to the stuff that I have learned
          over time in Web Development so it can help other people of the Dev
          Community.
        </p>
        <p className={shared.paragraph}>
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </p>
      </Card>
      <Card title="Current skills" background list={false} largeTitle={false}>
        Hello world
      </Card>
      <Card title="Latest projects" background={false} list largeTitle={false}>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
        <li className={shared.listItem}></li>
      </Card>
    </>
  );
}
