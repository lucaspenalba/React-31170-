import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";
import {ListGroup, Row, Col, Button} from 'react-bootstrap';


export default function Cart(){

    const {cart, deleteAll, removeFromCart}= React.useContext(CartContext);
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.quantity * item.price));
        setPrice(ans);
      };
    
      useEffect(() => {
        handlePrice();
      });

      const GoToCheck = () => (
        <Link to="/checkout" >
        <Button className="stock-button" variant="success">Terminar mi compra</Button>
        </Link> 
      );

    return(
        price === 0 ? <h1>No hay productos en el carrito</h1> :
        <>
        
        <div>        
            {cart.map((item, index) => (
                <div key={item.id}>
                    
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col md={2}><img src={item.image} alt="" className="img-fluid"/></Col>
                                <Col md={2}><p>{item.title}</p></Col>
                                <Col md={2}><p>Precio: {item.price}</p></Col>
                                <Col md={2}><p>Cantidad: {item.quantity}</p></Col>
                                <Col md={2}>
                                    <button className="btn btn-danger" onClick={() => { removeFromCart(item)}}>Eliminar</button>                                  
                                    
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        
                    </ListGroup>
                   
                                       
            </div>
            
            ))}
            <div>
                <p>Total: {price}</p>
            </div>
            <button className="btn btn-danger" onClick={() => { deleteAll()}}>Vaciar Carrito</button> 
            <GoToCheck/>           
        </div>
       
        
        </>

        

    )
    
}