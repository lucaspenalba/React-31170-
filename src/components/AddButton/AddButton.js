import React from 'react';
import { Button } from 'react-bootstrap';



export default function AddButton ({stock}) {   

    const [count, setCount] = React.useState(1)
    

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
            <Button className="stock-button" onClick={handleOnclick} variant="dark">
                {text}
            </Button>
        )

    }

    const AddButton = () => {
        return (
            <Button className="add-button" variant="dark">
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