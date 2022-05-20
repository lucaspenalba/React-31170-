import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CartIcon () {
    return(
        <Container>
            <Link to="/cart"><img src="https://i.postimg.cc/8zktHMXK/cart.png" alt="icono Carrito" style={{width: "2rem"}}/></Link>
        </Container>
    )

}