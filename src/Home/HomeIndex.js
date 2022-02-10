import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./indexHome.module.css";
import data from "../data/data";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        {data.map(({ name, img, info, url }) => {
          return (
            <div key={name} className={styles.innerContainer}>
              <Link to={url}>
                <img src={img} alt="" className={styles.image} />
              </Link>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.description}>{info}</p>
            </div>
          );
        })}
      
      </div>
      <div>
        <h4>Experimente também: </h4>
        <p>Colocar na barra de navegação: "/verde/mochila" </p>
        <p></p>
      </div>
    </div>
  );
};

export default Home;
