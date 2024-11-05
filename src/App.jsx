
import { Outlet, useLocation } from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { useState } from 'react';


function App() {
  const location = useLocation();
  const [cartItems,setCartItems] = useState([]);
  const [wishLists,setWishLists] = useState([]);

  const handleCartItems = (product) => {
    setCartItems([...cartItems,product])
  }
  const handleWishList = (product) => {
    setWishLists([...wishLists,product])
  }

  return (
    <>
    <Navbar cartItems={cartItems}/>
    {
      location.pathname.includes("productDetails") ? <Outlet context={{handleCartItems,cartItems,handleWishList,wishLists}} /> :<Outlet/>
    }
    <Footer/>
    </>
  )
}

export default App
