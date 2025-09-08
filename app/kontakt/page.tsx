import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SubpageHeader } from "@/components/SubpageHeader/SubpageHeader";
import { headerData } from "@/data/kontakt/header";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import { Titles } from "@/components/Titles/Titles";
import { kontaktData } from "@/data/kontakt/kontakt";
import { IntentionForm } from "@/components/IntentionForm/IntentionForm";
import styles from "./kontakt.module.scss";

export default function Kontakt() {
  const { form } = kontaktData;

  return (
    <div className={styles.page}>
      <SubpageHeader data={headerData} />
      <section
        className={styles.wrapper}
        aria-label="Kontakt i intencje modlitewne"
      >
        <div className={styles.card}>
          <Titles as="h2" title={form.title} />
          <Paragraph text={form.description} />
          <IntentionForm />
        </div>

        <aside className={styles.aside}>
          <Titles as="h2" title={"Dołącz do nas w social media"} />
          <Paragraph
            text={
              "Sprawdź aktualności, zdjęcia i krótkie rozważania. QR-code do wszystkich social mediów"
            }
          />
          <Image
            src="/qr_socialmedia.png"
            alt="QR-code do wszystkich social mediów"
            width={200}
            height={200}
            priority
          />
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
                  width={30}
                  height={30}
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
                  width={30}
                  height={30}
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
                  width={30}
                  height={30}
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
                  width={30}
                  height={30}
                  priority
                />
              </Link>
            </ul>
          </address>
        </aside>
      </section>
      
    </div>
  );
}
