"use client";

import clsx from 'clsx';
import styles from './Navigation.module.scss';

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const Hamburger = ({isOpen, toggleMenu} : Props) => (
      <button
          className={styles.navbarToggler}
          id="hamburger"
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className={clsx(styles.hamburgerIcon, isOpen && styles.open)}
></span>
        </button>
)
