import React, { useState, useEffect }  from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { CartContext } from "../../context/CartContext";


import {

    doc,

    addDoc,

    runTransaction,

    collection,

    getFirestore,

  } from "firebase/firestore";

import { useNavigate } from 'react-router-dom';



export default function Checkout(){


    const [data, setData] = React.useState()

  console.log(data)

  const [orderId, setOrderId] = React.useState(false)

  console.log(orderId)

  const navegar = useNavigate()

  const {cart, deleteAll}= React.useContext(CartContext);


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

      deleteAll()

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

      <Container>   

        

      {!orderId 

        ?<Form onSubmit={handleSubmit}  className="justify-content-md-center">

          <h1>Checkout</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" name="name" placeholder="Ingrese su nombre" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" name="email" placeholder="Ingrese su correo" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="phone" name="phone" placeholder="Ingrese su Telefono" onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
          Finalizar compra
          </Button>


          

        </Form>

        : <>

          <h1>Muchas gracias por su compra!</h1>

          <p>Su order {orderId} será despachada en 2 días hábiles</p>

          <Button variant="primary" onClick={()=>navegar('/')}>Volver a Home</Button>

          </>}

          </Container>

    </div>

  );

}