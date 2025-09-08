"use client";
import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { Menu } from "./Menu";
import { Hamburger } from "./Hamburger";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  console.log(isOpen)
  
  return (
    <nav className={styles.navigation}>
      <Logo imgClassName={styles.logoLink} />
      <Menu isOpen={isOpen}  closeMenu={toggleMenu} />
      <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};
