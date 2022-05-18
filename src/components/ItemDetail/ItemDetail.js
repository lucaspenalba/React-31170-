import {Container, Row, Col, Card} from 'react-bootstrap';
import AddButton from '../AddButton/AddButton';



export default function ItemDetail ({item}) {  
    
    return (
        <>  
            <Container>
                <Row >
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.thumbnail} className="img-fluid" />                     
                        </Card> 
                    </Col>             
                    <Col>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                        <AddButton stock={item.available_quantity}/>                 
                    
                    </Col>
                </Row>                
            </Container>
        </>

    );

}