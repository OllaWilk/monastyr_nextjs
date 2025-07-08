import  parse  from "html-react-parser";
import styles from "./MainTitle.module.scss";

interface Props {
  title: string;
}
export const MainTitle = ({ title }: Props) => (
  <h1 className={styles.pageTitle}>{parse(title)}</h1>
);
