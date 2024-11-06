
import { Outlet } from 'react-router-dom';
import './App.css'
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { useState } from 'react';



function App() {
  
  const [cartItems,setCartItems] = useState([]);
  const [wishLists,setWishLists] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  const [isDisable,setIsDisable] = useState(true)

  const handleCartItems = (product) => {
    setCartItems([...cartItems,product])
    setTotalPrice(totalPrice+product.price)
    setIsDisable(false)
  }
  const handleWishList = (product) => {
    setWishLists([...wishLists,product])
  }
  const deleteWishItem = (productId) => {
   const updateWishLists = wishLists.filter(item => item.product_id !== productId)
    console.log(updateWishLists)
    setWishLists(updateWishLists)
  }
  const deleteCartItem = (productId,price) => {
   const index = cartItems.findIndex(item => item.product_id == productId)
    const updatedCartItems = [...cartItems]
    updatedCartItems.splice(index,1);
    setTotalPrice(totalPrice-price)
    setCartItems(updatedCartItems)
  }

  const descendingSort = () => {
    const sortedItems =[...cartItems].sort((a,b) => b.price - a.price )

    setCartItems(sortedItems)   
}


const handlePurchase = () => {
  setCartItems([]);
  setTotalPrice(0);
  setIsDisable(true);
}

  return (
    <>
    
    <Navbar cartItems={cartItems} wishLists={wishLists}/>
    {
      <Outlet context={{handleCartItems,cartItems,handleWishList,wishLists,totalPrice,deleteWishItem,deleteCartItem,descendingSort,handlePurchase,isDisable}} />
    }
    <Footer/>
    </>
  )
}

export default App
