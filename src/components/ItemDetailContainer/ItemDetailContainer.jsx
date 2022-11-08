import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemError from "../ItemDetail/ItemError"
import { useParams } from 'react-router-dom'
import Loading from '../Loading'
import $ from 'jquery'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [detalle,setDetalle] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)
    const {productId} = useParams()

    useEffect(()=>{
        setLoading(true)
        $.ajax({                        
            url:`http://localhost:80/Bazar-Backend/productDetail.php?id=${productId}`,              // a donde queres enviar la informacion
            type:'GET',                 // como la queres mandar si POST, GET, PUT o DELETE
            processData: false,
            contentType: false,
            success: response => { 
                if(response.length !== 2){
                    setError(false)
                    const productDetail = JSON.parse(response)
                    setDetalle(productDetail[0])
                }else{
                    setError(true)
                }
                setLoading(false)
            }    //success
        }) // ajax

    },[productId])
    
    return(
        <section className="contenedorDetalle">
            {loading ? <Loading /> : error ? <ItemError id={productId} /> : <ItemDetail detalle={detalle} />}
        </section>
    )
}

export default ItemDetailContainer
