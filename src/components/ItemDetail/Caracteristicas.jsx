import React, { useState, useEffect} from "react"

const Caracteristicas = ({caracteristica}) =>{
    const [btnEstilos,setBtnEstilos] = useState()
    
    useEffect(()=>{
        caracteristica ? setBtnEstilos('block') : setBtnEstilos('none')
    },[])

    return(
        <div>
            <button style={{display:btnEstilos}} className="btnCaracteristias">Caracteristicas</button>
            <ul> {caracteristica && caracteristica.split('|').map(caracteristica => (<li key={caracteristica} className="caracteristica"> {caracteristica} </li>))} </ul>
        </div>
    )
}

export default Caracteristicas