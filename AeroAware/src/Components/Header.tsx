// src/components/Header.tsx
import React from "react";
import styles from "../styles/header.module.css"; // Adjust this path based on your directory structure

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>AeroAwar</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
