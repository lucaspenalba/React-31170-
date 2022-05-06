import { ListGroup } from 'react-bootstrap';


export default function BottonNav () {
    return (
        <ListGroup horizontal>
        <ListGroup.Item action variant="info">Perros</ListGroup.Item>
        <ListGroup.Item action variant="info">Gatos</ListGroup.Item>
        <ListGroup.Item action variant="info">Peces</ListGroup.Item>
        <ListGroup.Item action variant="info">Aves</ListGroup.Item>
        </ListGroup>
    )
}