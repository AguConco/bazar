import React, { useState, useEffect, useContext }  from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { CartContext } from "../../context/CartContext"

const ItemCountCart = ({id,stock, currentAmount}) =>{

    const [quantity, setQuantity] = useState(currentAmount)
    const {updateItem} = useContext(CartContext)

    const changeQuantity = (e) =>{
        if(e){
            quantity < stock && setQuantity(quantity + 1)
        }else{
            stock !== 0 && quantity > 1 && setQuantity(quantity - 1)
        }
    }

    useEffect(()=>{
        currentAmount > stock && setQuantity(stock)

        updateItem(id,quantity)
        
    },[quantity])

    return(
        <div className="agregar contadorCarrito">
            <span className="stockProductoCarrito"> En stock: {stock} </span>
            <div>
                <button onClick={()=>{ changeQuantity(false) }} type="button"><FontAwesomeIcon icon={faMinus} /></button>
                <input type="text" value={quantity} disabled/>
                <button onClick={()=>{ changeQuantity(true) }} type="button"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    )
}

export default ItemCountCart