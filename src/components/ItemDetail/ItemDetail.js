import {Container, Row, Col, Card} from 'react-bootstrap';



export default function ItemDetail ({item}) {  
    
    
    return (
        <>  
            <Container>
                <Row >
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} className="img-fluid" />                     
                        </Card> 
                    </Col>             
                    <Col>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                    
                    </Col>
                </Row>                
            </Container>
        </>

    );

}