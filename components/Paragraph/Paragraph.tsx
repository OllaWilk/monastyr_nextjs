import parse from "html-react-parser";
import styles from "./Paragraph.module.scss";

interface Props {
  text: string;
}

export const Paragraph = ({ text }: Props) => {

  return (
    <p className={styles.paragraph}>{parse(text)}</p>
  );
};
