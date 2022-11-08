import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "../ItemList"
import Loading from "../Loading"
import $ from "jquery"
import './ItemListContainer.css'


const ItemListContainer = () => {

    const {categoryId, subcategoryId} = useParams()
    const [catalogo,setCatalogo] = useState([])
    const [loading, setLoading] = useState(true)

    const getCategoryItems = () =>{
        $.ajax({                        
            url:`http://localhost:80/Bazar-Backend/category.php?categoryId=${categoryId}&subcategoryId=${subcategoryId}`,              // a donde queres enviar la informacion
            type:'GET',                 // como la queres mandar si POST, GET, PUT o DELETE
            processData: false,
            contentType: false,
            success: response => { 
                console.log(response)
                const data = JSON.parse(response)
                if(data.length !== 0){
                    setCatalogo(JSON.parse(response))
                    setLoading(false)
                }else {
                    setCatalogo([]) 
                }
            }    //success
        }) // ajax
    }

    useEffect(()=>{
        setLoading(true)
        getCategoryItems()
    },[categoryId])

    return(
        <section>
            {loading ? <Loading /> : <ItemList catalogo={catalogo}/>}
        </section>
    )
}

export default ItemListContainer