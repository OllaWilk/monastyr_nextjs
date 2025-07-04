import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "underline";
}

export const Button: FC<Props> = ({
  children,
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(styles[`btn-${variant}`], className)}
      {...rest}
    >
      {children}
    </button>
  );
};
