import React, { useState } from "react";

const UsePalavras = () => {
    const [txt, setTxt] = useState('Digite algo ^')

    const Texto = () =>{
        setTxt(document.getElementById('txtarea').value)
    }
    return(
        <>
        <div>
            <textarea name="txtarea" id="txtarea" cols="30" rows="10" onChange={Texto}></textarea>            
            <h2>{txt}</h2>
        </div>
        </>
    )  
}
export default UsePalavras;