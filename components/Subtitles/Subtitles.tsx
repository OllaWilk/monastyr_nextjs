import parse from "html-react-parser";
import styles from "./Subtitles.module.scss";

interface Props {
  title: string;
}

export const Subtitles = ({ title }: Props) => {
  return (
    <div className={styles.subtitle}>
      <p className={styles.text}>{parse(title)}</p>
    </div>
  );
};
