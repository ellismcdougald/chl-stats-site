import React from "react";
import Link from "next/link";
import styles from "../styles/MenuBar.module.css";

export default function MenuBar() {
  return (
    <div id={styles.container}>
      <div id={styles.logoContainer}>
        <h1 id={styles.logoText}>chl-stats</h1>
      </div>
      <div id={styles.menuLinksContainer}>
        <Link href="/stats">Stats</Link>
        <Link href="/glossary">Glossary</Link>
      </div>
    </div>
  );
}
