import React from 'react';
import { Card, Button } from 'react-bootstrap';



export default function AddButton () {   

    const [count, setCount] = React.useState(1)
    const stock = 10

    const onAdd = () =>  {
        if(count < stock){
            setCount (count + 1)
        }
    }

    const onDecrease = () =>  {
        if(count > 1) {
            setCount (count - 1)
        }
    }

    const StockButton = ({handleOnclick, text}) => {
        return (
            <Button className="stock-button" onClick={handleOnclick}>
                {text}
            </Button>
        )

    }

    const AddButton = () => {
        return (
            <Button className="add-button">
                Añadir al carrito
            </Button>
        )
    }


    return (
        <div className="add-button-container">
            <StockButton text="-" handleOnclick={onDecrease}/>
            <span className="add-button-count">{count}</span>
            <StockButton text="+" handleOnclick={onAdd}/>
            <AddButton/>
        </div>

    );

}