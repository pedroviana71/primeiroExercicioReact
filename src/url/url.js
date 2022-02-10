import React from "react";
import { useParams } from "react-router-dom";

const Url = () => {
  const { color, text } = useParams();
  let bg = "";
  console.log(color);
  if (color === "verde") {
    bg = "green";
  }

  if(color === "amarelo"){
      bg = "yellow"
  }

  return (
    <div style={{ backgroundColor: bg  }}>
      <h1>{text}</h1>
    </div>
  );
};

export default Url;
