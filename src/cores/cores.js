import React, {useState} from "react";

function Cores() {
    
    const Azul = () => {
        setTxt("Azul")
    }

    const Verde = () => {
        setTxt("Verde")
    }

    const Rosa = () => {
        setTxt("Rosa")
    }
    
    const [txt, setTxt] = useState("")

    return <React.Fragment>
        <div className="container">
            <div className="buttons">
                <button id="azul" className="btn" onClick={Azul}>Azul</button>
                <button id="verde" className="btn" onClick={Verde}>Verde</button>
                <button id="rosa" className="btn" onClick={Rosa}>Rosa</button>
            </div>
            <div className="txt">
               <h1>A cor escolhida foi: {txt}</h1>
            </div>
        </div>
    </React.Fragment>
}

export default Cores;


