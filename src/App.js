import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext' 
import Order from './components/Order/Order'
import { initializeApp } from "firebase/app"
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import UserProvider from './context/UserContext'
import MyPurchases from './components/MyPurchases/MyPurchases'
import AddFirestone from './components/add/AddFirestore'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

const firebaseConfig = {
  apiKey: "AIzaSyDCRKtrnLExKto3CZcwKeoqWoqouk_Z3Gc",
  authDomain: "bazar-regalaria.firebaseapp.com",
  projectId: "bazar-regalaria",
  storageBucket: "bazar-regalaria.appspot.com",
  messagingSenderId: "377885634962",
  appId: "1:377885634962:web:3e19e3574e753d9de5d14b"
}

initializeApp(firebaseConfig);

const App = () =>{
  return (
    <UserProvider>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/category/:categoryId/:subcategoryId' element={<ItemListContainer />} />
          <Route exact path='/item/:productId' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/order/:orderId' element={<Order />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/myPurchases' element={<MyPurchases />} />
          <Route exact path='/add' element={<AddFirestone />} /> {/*eliminar*/}
        </Routes>
        <Footer />
      </CartProvider>
    </UserProvider>
  );
}

export default App
