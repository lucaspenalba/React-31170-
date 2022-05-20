import { Navbar, Container, Nav } from 'react-bootstrap';
import BottonNav from '../BottomNav/BottonNav';
import CartIcon from '../Carticon/CartIcon';
import { Link } from 'react-router-dom'


export default function Header ({category1,category2,category3}) {

    


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">Alimento de Mascotas</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
                        <Nav.Link><Link to="/products">{category1}</Link></Nav.Link>
                        <Nav.Link><Link to="/products">{category2}</Link></Nav.Link>
                        <Nav.Link><Link to="/products">{category3}</Link></Nav.Link>
                        </Nav>
                    <CartIcon/>
                </Container>
            </Navbar>
            <BottonNav/>
        
        </>

    );

}