import React, { useState, useEffect, useContext } from "react"
import ItemCount from '../ItemCount/ItemCount'
import Caracteristicas from "./Caracteristicas"
import './ItemDetail.css'
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({detalle}) =>{ 
    console.log(detalle)
    const {addItem} = useContext(CartContext)

    const [picture, setPicture] = useState('')
    const [price, setPrice] = useState(0)
    const [availableQuantity, setAvailableQuantity] = useState(0)
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [id, setId] = useState('')
    const [mainFeatures, setMainFeatures] = useState()

    const onAdd = (c) =>{
        setQuantity(c)
        const product = {...detalle, quantity: c, totalPrice: price * c}
        addItem(product)
    }

    useEffect(()=>{
        setQuantity(0)
        setId(detalle.id)
        setPicture(detalle.picture)
        setPrice(detalle.price.price_public)
        setAvailableQuantity(detalle.available_quantity)
        setName(detalle.name)
        setMainFeatures(detalle.main_features)
        document.title = detalle.name
    },[detalle])

    return(
        <div key={id} className="detalle">
            <div className="contenedorImg">
                <img className="imgActual" src={picture} alt={name} />
            </div>
            <div className="infoDetalle">
                <h1 className="nombre"> {name} </h1>
                <h4 className="precio"> ${price} </h4>
                <div className="contenedorCaracteristicas">
                    <Caracteristicas caracteristica={mainFeatures} />
                </div>
                <div className="variedad"></div>  
                {quantity === 0 ? <ItemCount stock={availableQuantity} iniciar={1} onAdd={onAdd} /> : <Link className="terminarCompra" to={'/cart'}>Terminar mi compra</Link>}
            </div>
        </div>
    ) 
}

export default ItemDetail