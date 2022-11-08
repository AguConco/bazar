import React, { createContext, useState,  useEffect, useContext } from "react"
import { UserContext } from "./UserContext"

export const CartContext = createContext()

const CartProvider = ({children}) =>{
    
    const {user} = useContext(UserContext)

    const [cart, setCart] = useState([])
    const [userId, setUserId] = useState('')

    const isInCart = product => cart.some(cartProduct => cartProduct.id === product.id)

    const addItem = product =>{
        if(isInCart(product)){
            let productExist = cart.find(e => e.id === product.id)
            productExist.quantity += product.quantity   
            setCart([...cart])
            localStorage.setItem('cart'+userId,JSON.stringify([...cart]))
        }else{
            setCart([...cart, product]) 
            localStorage.setItem('cart'+userId,JSON.stringify([...cart, product]))
        }
    }
    const removeItem = id =>{
        let items = cart.filter(item => item.id !== id)
        setCart(items)
        localStorage.setItem('cart'+userId,JSON.stringify(items))
    }
    const clear = () =>{
        setCart([])
        localStorage.removeItem('cart'+userId)
    }
    const updateItem = (id,quantity) =>{
        let updateProduct = cart.find(e => e.id === id)
        updateProduct.quantity = quantity 
        updateProduct.totalPrice = updateProduct.price.price_public * quantity
        setCart([...cart])
        localStorage.setItem('cart'+userId,JSON.stringify([...cart]))

    }
    const getCart = () => {
        if(user !== null){
            setCart([])
            localStorage.getItem('cart-'+user.uid) && setCart(JSON.parse(localStorage.getItem('cart-'+user.uid)))
        }
    }

    const allItems = () => cart.reduce((accumulate, product)=>accumulate + product.quantity , 0)
    
    useEffect(()=>{
        setCart([])
        setUserId(user !== null && '-'+user.uid)
        getCart()
    },[user])

    return <CartContext.Provider value={{cart,addItem,removeItem,updateItem,allItems,clear}}> {children} </CartContext.Provider>
}

export default CartProvider