import React from "react"



const CartContext = React.createContext()

const {Provider} = CartContext


const CartProvider = ({children}) => {

    const [cart, setCart] = React.useState([])
    
    const addToCart = (items) => {
        setCart([...cart,{...items, quantity: 1}])
      
    }
  
   
    const removeFromCart = (id) => {
     
      
    }
   
    const deleteAll = () => {
      setCart([])
    }
   
    const isInCart = (id) => {
    }
  
  
    return (
      <Provider value={{
        addToCart,
        removeFromCart,
        deleteAll,
        isInCart,
        cart,
      }}>{children}</Provider>
    )
  }




export {CartContext, CartProvider}