import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const CartDetail = ({cart, setCheckout}) =>{

    const [detalle, setDetalle] =  useState(false)

    const imgDetalleCarrito = () => {
        if(cart.length < 4){
            return cart.map(e => (<div><img src={e.picture} alt={e.name} /></div>)) 
        } else if(cart.length > 3){
            return(
                <>
                {cart.slice(0,2).map(e =>(<div><img src={e.picture} alt={e.name} /></div>))}
                <div className="sobrante"><span>+ {cart.length - 2}</span></div>
                </>
            )
        }
    }

    return(
        <div className="contenedorDetalleCarrito">
            <h4>Detalle de tu compra</h4>
            <div className="imgDetalle">
                {imgDetalleCarrito()}
            </div>
            <div className={detalle ? "detalleCarrito detalleCarritoVisible" : "detalleCarrito"}>
                <FontAwesomeIcon onClick={()=> setDetalle(!detalle)} icon={faAngleDoubleDown} />
                <ul> {cart.map(e => <li> <span title={e.name}>{e.name}</span><span>x{e.quantity}</span> </li>)} </ul>
            </div>
            <span>Total: ${cart.reduce((acumulado, carrito)=>acumulado + carrito.totalPrice , 0)} </span> 
            <div>
                <Link to={'/'}>Seguir comprando</Link>
                <button onClick={() => setCheckout(true)}>Comprar</button>
            </div>
        </div>
    )
}

export default CartDetail