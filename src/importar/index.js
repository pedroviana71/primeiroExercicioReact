import React, { useState } from "react";
import CarouselSlider from "react-carousel-slider";
import Desc from "../descricao/descricao"
import Nevoeiro from "../image/DSC_0367.jpg";
import Coruja1 from "../image/DSC_0397.jpg"
import Coruja2 from "../image/DSC_0409.jpg"
import Arvore from "../image/DSC_0326.jpg";

const Carousel = () => {  
  
  let data = [
    {
      des: "Coruja",
      imgSrc: Coruja1,
    },
    {
      des: "Árvore",
      imgSrc: Arvore,
    },
    {
      des: "Coruja",
      imgSrc: Coruja2,
    },
    {
      des: "Nevoeiro",
      imgSrc:
        Nevoeiro,
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
