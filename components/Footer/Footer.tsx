import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.main}>
      <p>
        <Link className={styles.link} href="https://unlicense.org/">
          Uncopyrighted
        </Link>{" "}
        by Pedro Moraes. Last updated on June 18h, 2024.
      </p>
      <p className={styles.footerSecond}>
        Built with{" "}
        <Link className={styles.link} href="https://nextjs.org/">
          Nextjs
        </Link>
        . Source code on{" "}
        <Link
          className={styles.link}
          href="https://github.com/Algos-hub/portfolio-new"
        >
          Github
        </Link>
        .
      </p>
      <div className={styles.iconList}>
        <Link href="https://github.com/Algos-hub">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </Link>
        <Link href="https://www.linkedin.com/in/pedrofmf/">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </Link>
        <Link href="mailto:pedrofmf332@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        </Link>
      </div>
    </footer>
  );
}
