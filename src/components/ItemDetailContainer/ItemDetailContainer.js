import React, { useState }  from 'react'
import axios from "axios"
import ItemDetail from "../ItemDetail/ItemDetail";



export default function ItemDetailContainer ({productId}) {  

    const [items, setItem] = useState([])


  React.useEffect (() =>{

    
        axios.get("https://6286e64e7864d2883e7b4b8d.mockapi.io/productos")
        .then((res) => setItem (res.data.find(item => item.id === +productId)))
        
        
      
    
  
  },[productId])



  return (
    <>
    <div className="ItemDetailContainer">
        
      <ItemDetail items={items}/>
      
        
        
      
    </div>
    </>
  );
  }