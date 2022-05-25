import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'




export default function AddButton ({count, onAdd, onDecrease}) { 
    
    const [action, setAction] = React.useState("carrito")
    
    
    
    const StockButton = ({handleOnclick, text}) => {
        return (
            <Button className="stock-button" onClick={handleOnclick} variant="dark">
                {text}
            </Button>
        )

    }

    const AddButton = () => {
        
            <Button className="add-button" variant="dark" onClick={()=> setAction("carrito")}>
                Comprar
            </Button>
        
    }

    const GoCart = () => {
        <Link to="/cart" >
            <Button className="add-button" variant="dark"  >
                Comprar
            </Button>
        </Link>    
        
    }

    const Button = action === "carrito" ? AddButton : GoCart


    return (
        <div className="add-button-container">
            <StockButton text="-" handleOnclick={onDecrease}/>
            <span className="add-button-count">{count}</span>
            <StockButton text="+" handleOnclick={onAdd}/>
            <Button/>
        </div>

    );

}