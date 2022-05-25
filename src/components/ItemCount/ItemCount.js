import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';





export default function AddButton ({count, onAdd, onDecrease}) {  
    
    const [action, setAction] = React.useState("comprar")
    
   
  
    const AddButton = () => (
        <Button onClick={()=> setAction("carrito")} className="stock-button" variant="dark">Comprar</Button>
      );

      const GoToCart = () => (
        <Link to="/cart" >
        <Button className="stock-button" variant="success">Carrito</Button>
        </Link> 
      );

      const StockButton = ({handleOnclick, text}) => {
        return (
            <Button className="stock-button" onClick={handleOnclick} variant="dark">
                {text}
            </Button>
        )

    }

    




    return (
        <>
        <div>
            <StockButton text="-" handleOnclick={onDecrease}/>
            <span className="add-button-count">{count}</span>
            <StockButton text="+" handleOnclick={onAdd}/>
        </div>

        <div className="add-button-container"style={{marginTop: 20}}>
        {action === "comprar" ? <AddButton /> : <GoToCart />}
            
        </div>
        </>
        

    );

}