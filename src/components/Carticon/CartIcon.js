import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CartIcon () {
    return(
        <Container>
            <Link to="/cart"><img src="image/cart.png" alt="icono Carrito" style={{width: "2rem"}}/></Link>
        </Container>
    )

}