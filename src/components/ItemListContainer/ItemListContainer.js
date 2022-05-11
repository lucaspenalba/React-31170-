
import { Card } from 'react-bootstrap';
import AddButton from '../AddButton/AddButton';



export default function ItemListContainer () {  
    
    return (
        <>  
            <div className='itemlist-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <div className='item'>  
                                <AddButton/>
                            </div>
                        </Card.Body>
                </Card>           

            </div>
        </>

    );

}