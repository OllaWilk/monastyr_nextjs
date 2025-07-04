'use client';

import Image from "next/image";
import Link from "next/link";
import styles from  './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav id="navigation">
      <div className={styles.navigation}>
        <Link href="/">
          <Image src="/logo_transparent.png" alt="logo wspólnoty świętego Krzysztofa" width={80} height={80} priority/>
        </Link>
        <div id="menu" className={styles.menu}>
          <ul>
            <li>
              <Link href="/onas">O nas</Link>
            </li>
            <li>
              <Link href="/duchowosc">Duchowość</Link>
            </li>
            <li>
              <Link href="/charyzmat">Charyzmat</Link>
            </li>
            <li>
              <Link href="/historia">Historia</Link>
            </li>
            <li>
              <Link href="/pytania">Pytania</Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
          <div>
            <span id="cta-intentiona">Intencje</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
