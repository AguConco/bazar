import React, { useContext, useState } from "react"
import CartProducto from "./CartProducto"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { CartContext } from "../../context/CartContext"
import CartDetail from "./CartDetail"
import Checkout from "../Checkout/Checkout"

const CartContainer = () =>{

    const {cart, removeItem, clear} = useContext(CartContext)
    const [vaciarCarrito, setVaciarCarrito] = useState(false);
    const [checkout, setCheckout] = useState(false)

    return(
        <div className="contenedorCarrito">
            <div>
                {checkout ? <Checkout setCheckout={setCheckout}/>
                :
                <div>
                    <div className="headerCarrito">
                        <button onClick={() => setVaciarCarrito(!vaciarCarrito)} className="opcionesCarrito"> <FontAwesomeIcon icon={faEllipsisV} /> </button>
                        <div className={vaciarCarrito ? 'menuOpcionesCarrito menuVisible' : 'menuOpcionesCarrito menuHidden'}>
                            <button onClick={() => cart.length !== 0 && clear()} className="vaciar" >Vaciar el carrito</button>
                        </div>
                    </div> 
                    <table cellSpacing={0}>
                        <tr className="headerTable">
                            <th className="tableProducto">PRODUCTO</th>
                            <th className="tableCantidad">CANTIDAD</th>
                            <th className="tablePrecio">PRECIO</th>
                        </tr>
                        {cart.map(e => (<CartProducto cartProduct={e} removeItem={removeItem} />))}
                    </table>
                </div>
                }
            </div>
            <CartDetail cart={cart} setCheckout={setCheckout} />
        </div>
    )
}

export default CartContainer