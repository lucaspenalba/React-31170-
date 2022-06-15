import React, { useState, useEffect }  from 'react'
import { CartContext } from "../../context/CartContext";

import {
    doc,
    addDoc,
    runTransaction,
    collection,
    getFirestore,
  } from "firebase/firestore";


export default function Checkout(){

    const [data, setData] = React.useState()
  console.log(data)
  const [orderId, setOrderId] = React.useState()
  console.log(orderId)

  const {cart}= React.useContext(CartContext);

  const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.quantity * item.price));
        setPrice(ans);
      };

      useEffect(() => {
        handlePrice();
      });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      buyer: data,
      items: cart,
      total: price,
    };
    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    await addDoc(ordersCollection, order).then(({id}) => {
      setOrderId(id)
      updateProducts()
    })
  }

  const updateProducts = async () => {
    const db = getFirestore ()
    cart.forEach( async (item) => {
      const productRef = doc(db, `productos`, item.id)
      await runTransaction(db, async (transaction) => {
      const transfDoc = await transaction.get(productRef);
      if (!transfDoc.exists()) {
        console.error("El documento no existe")
      }
      const newStock = transfDoc.data().stock - item.quantity;
      transaction.update(productRef, { stock: newStock });
    });
    })
  }


  return (

    

    <div className="form">
        
      <form onSubmit={handleSubmit}>
        <h1>Checkout</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Finalizar compra"
        />
      </form>
    </div>
  );
}