import Image from "next/image";
import { Paragraph } from "@/components/Paragraph/Paragraph";
import styles from "./UnityIconSection.module.scss";

export const UnityIconsSection = () => {
  return (
    <section className={styles.unitySection}>
      <div className={styles.grid}>
        <div className={styles.item}>
          <Image 
            src="/milosierdziepage/iconPrayer.png"
            alt="Ikona modlitwy"
            width={120}
            height={120}
          />
          <Paragraph text="Modlimy się w duchu różnych tradycji – czasem jest to liturgia prawosławna, innym razem modlitwy rzymskokatolickie, protestanckie czy mariawickie." />
        </div>

        <div className={styles.item}>
          <Image
            src="/milosierdziepage/iconlistening.png"
            alt="Ikona słuchania"
            width={120}
            height={120}
          />
          <Paragraph text="Słuchamy siebie nawzajem – nie udajemy, że różnic nie ma, ale uczymy się miłości ponad nimi." />
        </div>

        <div className={styles.item}>
          <Image
            src="/milosierdziepage/iconHart.png"
            alt="Ikona serca"
            width={120}
            height={120}
          />
          <Paragraph text="Budujemy wspólnotę serc – tak, by każdy mógł doświadczyć miłosiernej obecności Boga i drugiego człowieka." />
        </div>
      </div>
    </section>
  );
};
