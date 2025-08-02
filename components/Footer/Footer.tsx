import Link from "next/link";
import { Logo } from "../Logo/Logo";
import styles from "./Footer.module.scss";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <nav className={styles.nav} aria-label="Footer navigation">
          <ul className={styles.navList}>
            <li>
              <Link href="/">Home</Link>
            </li>
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
            <li>
              <a href="/prywatność">Prywatność</a>
            </li>
          </ul>
          <address className={styles.socials} aria-label="Social media links">
            <ul className={styles.socialList}>
              <Link
                href="https://www.facebook.com/61560330840377"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image
                  src="/footer/facebook.svg"
                  alt="logo facebook"
                  width={22}
                  height={22}
                  priority
                />
              </Link>
              <Link
                href="https://www.instagram.com/wspolnota_sw_krzysztofa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/footer/instagram.svg"
                  alt="logo instagram"
                  width={22}
                  height={22}
                  priority
                />
              </Link>
              <Link
                href="mailto:monastyr.krzysztofa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="gmail"
              >
                <Image
                  src="/footer/gmail.svg"
                  alt="logo email"
                  width={22}
                  height={22}
                  priority
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@monastyr.krzysztofa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="tiktok"
              >
                <Image
                  src="/footer/tiktok.svg"
                  alt="logo tiktok"
                  width={22}
                  height={22}
                  priority
                />
              </Link>
            </ul>
          </address>
        </nav>

        <Logo
          imgClassName={styles.logoImage}
          width={100}
          height={100}
          text={true}
        />
      </div>
    </footer>
  );
};
