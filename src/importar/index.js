import React, { useState } from "react";
import CarouselSlider from "react-carousel-slider";
import Desc from "../descricao/descricao"


const Carousel = () => {

  const [firstLink, setFirstLink] = useState("./image/DSC_0367.jpg");
  const [input, setInput] = useState('')

  
  let data = [
    {
      des: "Coruja",
      imgSrc: "../image/DSC_0397.jpg",
    },
    {
      des: "Árvore",
      imgSrc: "../image/DSC_0326.jpg",
    },
    {
      des: "Coruja",
      imgSrc: "../image/DSC_0409.jpg",
    },
    {
      des: "Nevoeiro",
      imgSrc:
        "https://i.pinimg.com/564x/e2/db/2b/e2db2b820d547612ea213171d237656f.jpg",
    },
  ];

  

  let sliderBoxStyle = {
    width: "40%",
    background: "transparent",
    border: "1px solid #e1e4e8",
  };

  let itemsStyle = {
    height: "100%",
    padding: "20px",
    background: "transparent",
    border: "1px solid #e1e4e8",
    borderRadius: "2px",
  };  

  let buttonSetting = {
    placeOn: "bottom-beneath",
    style: {
      left: {
        color: "#929393",
        background: "transparent",
        border: "1px solid #e1e4e8",
        borderRadius: "50%",
      },
      right: {
        color: "#929393",
        background: "transparent",
        border: "1px solid #e1e4e8",
        borderRadius: "50%",
      },
    },
  };

  let dotsSetting = {
    placeOn: "top",
    style: {
      dotSize: "5px",
      currDotColor: "rgba(155, 108, 27, 0.5)",
      marginTop: "2px",
    },
  };

  

  return (
    <div>
      <CarouselSlider
        manner={{
          circular: true,
          autoSliding: { interval: "4s" },
          duration: "1.5s",
        }}
        sliderBoxStyle={sliderBoxStyle}
        dotsSetting={dotsSetting}
        buttonSetting={buttonSetting}
        itemsStyle={itemsStyle}
        slideItems={data}
      />
      <Desc/>
    </div>  
    
  );
};

export default Carousel;
