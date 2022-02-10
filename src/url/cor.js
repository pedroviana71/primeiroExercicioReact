import React from 'react'
import { useParams } from 'react-router-dom'

const Cor = () => {

    let params = useParams()
    console.log(params.Cor);
  return (
    <div>
        <h1>Cor: {params.Cor}</h1>
    </div>
  )
}

export default Cor