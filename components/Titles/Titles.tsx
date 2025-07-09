import parse from "html-react-parser";
import styles from "./Titles.module.scss";

interface Props {
  title: string;
  as?: "h1" | "h2" | "h3" | "h4";
}
export const Titles = ({ title, as: Tag = "h1" }: Props) => {
  const className = `${styles.pageTitle} ${styles[`pageTitle--${Tag}`]}`;
  return <Tag className={className}>{parse(title)}</Tag>;
};
