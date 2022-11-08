import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import ItemCountCart from "../ItemCount/ItemCountCart"

const CartProducto = ({cartProduct, removeItem}) =>{
    console.log(cartProduct)
    return(
        <tr className="productoCarrito">
            <FontAwesomeIcon  icon={faTimes}  onClick={(() => removeItem(cartProduct.id))} className="removerProductoCarrito"/>
            <td className="tableProducto">
                <Link to={'/item/'+cartProduct.id} title={cartProduct.name}>
                    <div className="imgProductoCarrito"><img src={cartProduct.picture} alt={cartProduct.name} /></div>
                    {cartProduct.name} 
                </Link>
            </td>
            <td className="tableCantidad"><ItemCountCart id={cartProduct.id} stock={cartProduct.available_quantity} currentAmount={cartProduct.quantity} /></td>
            <td className="tablePrecio">$ {cartProduct.totalPrice}<span>c/u ${cartProduct.price.price_public}</span></td>
        </tr>
    )
}

export default CartProducto          