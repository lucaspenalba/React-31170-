import { Card } from 'react-bootstrap';
import AddButton from '../AddButton/AddButton';


export default function ItemList ({product}) {  
    
    return (
        <>  
            <div className='itemlist-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} className="img-fluid" />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                            <p>Stock: {product.stock}</p>
                            <p>Precio: {product.price}</p>
                            </Card.Text>
                            <div className='item'>  
                                <AddButton stock={product.stock}/>
                            </div>
                        </Card.Body>
                </Card>           

            </div>
        </>

    );

}