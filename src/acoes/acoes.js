import React, { useState, useEffect } from "react";
import axios from "axios";
import { useImmer } from "use-immer";
import id from "./id";
import styles from "./acoes.module.css";

const Stocks = () => {
  //useStates para fazer a captura do nome e valores das acoes
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [data, setData] = useImmer([]);

  const addRegister = (nameCompany, valuePrice) => {
    setData((draft) => {
      draft.push({
        id: id(),
        company: nameCompany,
        price: valuePrice,
      });
    });
  };
  //função para pegar o valor do input
  const handleStock = (event) => {
    if (event.key === "Enter") {
      dados();
    } else if (event.key === "Backspace") {
      setIsShow(false);
    } else {
      setIsShow(false);
    }
  };

  const updateInput = (event) => {
    setStock(event.target.value);
  };

  //URL para usar na função da pegar os dados da API
  //const url = `https://cloud.iexapis.com/stable/stock/${stock}/quote?token=pk_b5e0e271d2544ee0ac8274f564b85117`;

  //Função para pegar os dados da API usando fetch
  // const dados = async () => {
  //   const dado = await fetch(url);
  //   const result = await dado.json();
  //   setTxtStock(result.latestPrice);
  //   setCompany(result.companyName);
  // };

  //Funcao para pegar os dados da API usando axios !!!!DUVIDA : o axios.get retorna so uma promise?
  const dados = () => {
    axios
      .get(
        `https://cloud.iexapis.com/stable/stock/${stock}/quote?token=pk_b5e0e271d2544ee0ac8274f564b85117`
      )
      .then((response) => {
        setCompany(response.data.companyName);
        setPrice(response.data.latestPrice);
        setIsShow(true);
        addRegister(response.data.companyName, response.data.latestPrice);
      })
      .catch(() => {
        console.log("Ops");
        setIsShow(false);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <div className={styles.container_top}>
            <h1 className={styles.title}>Valor de ações</h1>
            <h3 className={styles.subtitle}>Digite o código da empresa:</h3>
            <input
              className={styles.input}
              value={stock}
              type="text"
              onChange={updateInput}
              onKeyDown={handleStock}
              autoFocus
            />
          </div>
          <div className={styles.container_answer}>
            {isShow ? (
              <h1 className={styles.company_result}>{company}</h1>
            ) : null}
            {isShow ? (
              <h1 className={styles.price_result}>{`U$${price}`}</h1>
            ) : null}
          </div>

          <div className={styles.result_save}>
            {data.map((value) => {
              return (
                <div className={styles.container_result} key={value.id}>
                  <p className={styles.name}>{value.company}</p>
                  <p className={styles.price}>{value.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stocks;
