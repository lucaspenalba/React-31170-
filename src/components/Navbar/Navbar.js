import { Navbar, Container, Nav } from 'react-bootstrap';
import BottonNav from '../BottomNav/BottonNav';
import CartIcon from '../Carticon/CartIcon';
import { NavLink } from 'react-router-dom'


export default function Header ({category1,category2,category3}) {

    


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">Alimento de Mascotas</NavLink>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><NavLink to="/">Inicio</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/products">{category1}</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/category/1">{category2}</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/category/2">{category3}</NavLink></Nav.Link>
                    </Nav>
                    <CartIcon/>
                </Container>
            </Navbar>
            <BottonNav/>
        
        </>

    );

}