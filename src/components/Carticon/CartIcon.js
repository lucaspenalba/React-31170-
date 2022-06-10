import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import React from 'react'

export default function CartIcon () {

    const { cartQuantity} = React.useContext(CartContext);;

    return(
        <>
            <Container>

                <div><Link to="/cart"><img src="https://i.postimg.cc/8zktHMXK/cart.png" alt="icono Carrito" style={{width: "2rem"}}/></Link></div>

                <div><span className="badge">

                {cartQuantity() || ''}

                </span></div>   

            </Container>
        </>
    )

}