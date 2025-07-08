import Image from "next/image";
import styles from "./SplashImage.module.scss"

interface Props {
    src: string;
    alt: string;
}
export const SplashImage = ({src, alt} : Props) => (
      <div className={styles.splashImage}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
        />
      </div>
)