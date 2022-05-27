import React from "react"



const CartContext = React.createContext()

const {Provider} = CartContext


const CartProvider = ({children}) => {

    const [cart, setCart] = React.useState([])

    console.log(cart)
    
    const addToCart = (items, count) => {
        if(isInCart(items.id)) {
            const newCart = cart.map(cartItem => {
              if(cartItem.id === items.id) {
                cartItem.quantity++
              }
              return cartItem
            })
            setCart(newCart)
          }
          else {
            setCart([...cart, {...items, quantity: +count}])
          }
      
    }
  
   
    const removeFromCart = (id, items) => {
        if (items.quantity===1){

            const newCart = cart.filter((carItem) => carItem.id !== items.id);
            setCart(newCart)

        }else{
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === items.id) {
                  cartItem.quantity--;
                }
                return cartItem;
              });
              setCart(newCart)
        }

     
      
    }
   
    const deleteAll = () => {
      setCart([])
    }
   
    const isInCart = (id) => {
        return cart.find(items => items.id ===id)
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