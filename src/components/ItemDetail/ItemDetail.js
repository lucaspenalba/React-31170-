import {Container, Row, Col, Card} from 'react-bootstrap';



export default function ItemDetail ({items}) {  
    
    
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
                    
                    </Col>
                </Row>                
            </Container>
        </>

    );

}