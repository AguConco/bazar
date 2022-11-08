import React from "react"
import {Link} from 'react-router-dom'

const Categoria = () =>{
    const category = [
        {
          categoryName:'Cocina',
          categoryId: 'cc/all'
        },
        {
          categoryName:'Regalería',
          categoryId: 'cr/all'
        },
        {
          categoryName:'Juguetería',
          categoryId: 'cj/all'
        },
        {
          categoryName:'Mates y Termos',
          categoryId: 'cmt/all'
        },
        {
          categoryName:'Limpieza y Baño',
          categoryId: 'clb/all'
        },
        {
          categoryName:'Varios',
          categoryId: 'cv/all'
        }
    ]

    return category.map(e => (<li key={e.categoryId}><Link to={"/category/"+e.categoryId} >{e.categoryName}</Link></li>))
}

export default Categoria