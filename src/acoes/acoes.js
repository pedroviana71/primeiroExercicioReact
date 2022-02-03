import React, { useState, useEffect } from "react";
import axios from "axios";
import { useImmer } from "use-immer";
import id from "./id";
import "./acoes.css";

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
      <div className="container">
        <div className="inner-container">
          <div className="container-top">
            <h1 className="title">Valor de ações</h1>
            <h3 className="subtitle">Digite o código da empresa:</h3>
            <input
              className="input"
              value={stock}
              type="text"
              onChange={updateInput}
              onKeyDown={handleStock}
              autoFocus
            />
          </div>
          <div className="container-answer">
            {isShow ? <h1 className="company-result">{company}</h1> : null}
            {isShow ? <h1 className="price-result">{`U$${price}`}</h1> : null}
          </div>

          <div className="result-save">
            {data.map((value) => {
              return (
                <div className="container-result" key={value.id}>
                  <p className="name">{value.company}</p>
                  <p className="price">{value.price}</p>
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
