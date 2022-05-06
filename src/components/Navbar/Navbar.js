import { Navbar, Container, Nav } from 'react-bootstrap';
import BottonNav from '../BottomNav/BottonNav';
import CartIcon from '../Carticon/CartIcon';


export default function Header ({category1,category2,category3}) {

    const Button = ({texto}) => {
        return(
            <input type="button" value={texto}/>
        )
    }



    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Alimento de Mascotas</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#productos">{category1}</Nav.Link>
                        <Nav.Link href="#categorias">{category2}</Nav.Link>
                        <Nav.Link href="#perfil">{category3}</Nav.Link>
                        </Nav>
                    <CartIcon/>
                </Container>
            </Navbar>
            <Button texto="click"/>
            <BottonNav/>
        
        </>

    );

}