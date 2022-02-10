import React, { useEffect, useState } from "react";
import styles from "./cadastro.module.css";
import moment from "moment";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Feminino");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [job, setJob] = useState("");
  const [isShow, setIsShow] = useState(false);

  //CONTROLLED INPUTS
  const valueFirstName = (e) => setFirstName(e.target.value);
  const valueLastName = (e) => setLastName(e.target.value);
  const valueBirthdayDate = (e) => {
    setBirthdayDate(maskDate(e.target.value));
    setAge(calcAge(e.target.value));
  };
  const valueGender = (e) => setGender(e.target.value);
  const valueEmail = (e) => setEmail(e.target.value);
  const valuePassword = (e) => setPassword(e.target.value);
  const valueSecondPassword = (e) => setSecondPassword(e.target.value);
  const valueJob = (e) => setJob(e.target.value);

  //AGE FUNCTION
  function calcAge(date) {
    if (date.length >= 10) {
      const years = moment(date, "DD/MM/YYYY").fromNow().slice(0, 2);
      var resultAge = parseInt(years);
      return resultAge;
    }
  }

  const maskDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  //HANDLE USER SUBMIT CLICK
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsShow(true);
    let list = [];
    if (password !== secondPassword) {
      list.push("As senhas são diferentes");
    }

    if (!birthdayDate) {
      list.push("Digite uma data");
    }

    if (firstName.length < 4) {
      list.push("Nome precisa de pelo menos 4 caracteres");
    }

    if (lastName.length < 4) {
      list.push("Sobrenome precisa de pelo menos 4 caracteres");
    }

    if (email.length < 4) {
      list.push("Email precisa de pelo menos 4 caracteres");
    }
    
    alert(list.join("\n"))   
    
  };
  

  return (
    <>
      <div className={styles.outer_container}>
        <form className={styles.outer_form} onSubmit={handleSubmit}>
          <div className={styles.form}>
            <label htmlFor="firstName">Nome: </label>
            <input
              className={styles.input}
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={valueFirstName}
            />
          </div>
          <div className={styles.form}>
            <label htmlFor="lastName">Sobrenome: </label>
            <input
              className={styles.input}
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={valueLastName}
            />
          </div>
          <div className={styles.form}>
            <label htmlFor="birthdayDate">Data de Nascimento: </label>
            <input
              className={styles.input}
              type="text"
              id="birthdayDate"
              name="birthdayDate"
              value={birthdayDate}
              onChange={valueBirthdayDate}
            />
          </div>
          <div className={styles.form}>
            <label htmlFor="age">Idade: </label>
            <input
              className={styles.input}
              type="text"
              id="age"
              name="age"
              value={age}
              readOnly
            />
          </div>
          <div className={styles.form}>
            <select name="gender" value={gender} onChange={valueGender}>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>
          <div className={styles.form}>
            <label htmlFor="job">Profissão: </label>
            <input
              className={styles.input}
              type="job"
              id="job"
              name="job"
              value={job}
              onChange={valueJob}
            />
          </div>
          <div className={styles.form}>
            <label htmlFor="email">Email: </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={valueEmail}
            />
          </div>
          <div className={styles.form}>
            <label htmlFor="age">Senha: </label>
            <input
              className={styles.input}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={valuePassword}
            />
          </div>
          <div className={styles.form}>
            <label htmlFor="age">Repita a senha: </label>
            <input
              className={styles.input}
              type="password"
              id="checkPassword"
              name="password"
              value={secondPassword}
              onChange={valueSecondPassword}
            />
          </div>
          <button className={styles.btn} type="submit">
            Enviar
          </button>
        </form>
        {isShow ? (
          <div>
            <p>Confirme seus dados: </p>
            <p>
              {`Nome: ${firstName} `}
              {lastName}
            </p>
            <p>{`Profissão: ${job}`}</p>
            <p>{`Nascimento: ${birthdayDate}`} </p>
            <p>{`Idade: ${age}`}</p>
            <p>{`Profissão: ${job}`}</p>
            <p>{`Email: ${email}`}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Form;
