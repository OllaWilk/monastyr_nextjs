"use client";

import Link from "next/link";
import styles from "./Navigation.module.scss";
import { Button } from "../Buttons/Button";
import clsx from "clsx";

interface Props {
  isOpen: boolean;
}

export const Menu = ({ isOpen }: Props) => (
  <div id="menu" className={clsx(styles.menu, isOpen && styles.open)}>
    <ul>
      <li className={styles.navigationLinks}>
        <Link href="/onas">O nas</Link>
      </li>
      <li className={styles.navigationLinks}>
        <Link href="/duchowosc">Duchowość</Link>
      </li>
      <li className={styles.navigationLinks}>
        <Link href="/charyzmat">Charyzmat</Link>
      </li>
      <li className={styles.navigationLinks}>
        <Link href="/historia">Historia</Link>
      </li>
      <li className={styles.navigationLinks}>
        <Link href="/pytania">Pytania</Link>
      </li>
      <li className={styles.navigationLinks}>
        <Link href="/kontakt">Kontakt</Link>
      </li>
      <li className={styles.navigationLinks}>
        <Button>Intencje</Button>
      </li>
    </ul>
  </div>
);
