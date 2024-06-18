import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./NavBar.module.css";

export default function NavBar(): ReactNode {
    const linkData: Map<string, string> = new Map([
        ["/about", "About"],
        ["/projects", "Projects"],
        ["/contact", "Contact"],
        ["/blog", "Blog"],
    ]);

    const links: ReactNode[] = Array.from(linkData, ([key, value], i) => (
        <li className={styles.listItem} key={i}>
            <Link href={key} className={styles.link}>
                {value}
            </Link>
        </li>
    ));

    return (
        <nav className={styles.navBar}>
            <div className={styles.listItem}>
                <Link href="/" className={styles.link}>
                    Pedro Moraes
                </Link>
            </div>
            <ul className={styles.list}>{links}</ul>
        </nav>
    );
}
