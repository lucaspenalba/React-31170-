import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from "../../context/CartContext";



export default function ItemDetail ({items}) {  

    const { addToCart}= React.useContext(CartContext);

    const [count, setCount] = React.useState(1)
    

    const onAdd = () =>  {
        if(count < items.stock){
            setCount (count + 1)
        }
    }

    const onDecrease = () =>  {
        if(count > 1) {
            setCount (count - 1)
        }
    }

    
    
    
    return (
        <>  
            <Container>
                <Row >
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={items.image} className="img-fluid" />                     
                        </Card> 
                    </Col>             
                    <Col>
                        <p>{items.title}</p>
                        <p>${items.price}</p>
                        <p>Stock: {items.stock}</p>
                        <ItemCount onSubmit={() => addToCart(items)} count={count} onDecrease={onDecrease} onAdd={onAdd} />
                    
                    </Col>
                </Row>                
            </Container>
            
        </>

    );

}