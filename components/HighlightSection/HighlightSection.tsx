import styles from "./HighlightSection.module.scss";

interface Props {
  text: string;
  span: string;
}

export const HighlightSection = ({ text, span }: Props) => {
  return (
    <blockquote className={styles.quote}>
      <em>{text}</em>
      <br />
      <span>{span}</span>
    </blockquote>
  );
};
