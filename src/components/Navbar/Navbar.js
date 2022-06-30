import { Navbar, Container, Nav } from 'react-bootstrap';
import CartIcon from '../Carticon/CartIcon';
import { NavLink } from 'react-router-dom'



export default function Header () {

    


    return (
        
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">                        
                            Alimento de Mascotas
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><NavLink to="/">Inicio</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/products">Productos</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/category/1">Perros</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/category/2">Gatos</NavLink></Nav.Link>
                    </Nav>
                    <CartIcon/>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        
        </>

    );

}