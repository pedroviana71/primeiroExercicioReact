import React, { useState } from "react";

const Palavras = () => {
  const [txt, setTxt] = useState("Digite algo ^");

  const Texto = (event) => {
    setTxt(event.target.value);
  };
  return (
    <div>
      <textarea
        name="txtarea"
        id="txtarea"
        cols="30"
        rows="10"
        onChange={Texto}
      ></textarea>
      <h2>{txt}</h2>
    </div>
  );
};
export default Palavras;
