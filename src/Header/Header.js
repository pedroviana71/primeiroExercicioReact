import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.header}>
        <div className={styles.outerHome}>
          <Link className={styles.home} to="/">
            Home
          </Link>
        </div>

        <Link className={styles.list} to="/acoes">
          Ações
        </Link>

        <Link className={styles.list} to="/cadastro">
          Cadastro
        </Link>

        <Link className={styles.list} to="/ToDo">
          To Do List
        </Link>

        <Link className={styles.list} to="/cores">
          Cores
        </Link>

        <Link className={styles.list} to="/palavras">
          Palavras
        </Link>

        <Link className={styles.list} to="/olaMundo">
          Olá Mundo
        </Link>

        <Link className={styles.list} to="/pessoas">
          Pessoas
        </Link>

        <Link className={styles.list} to="/carousel">
          
          Carousel
        </Link>
      </div>
    </div>
  );
};

export default Header;
