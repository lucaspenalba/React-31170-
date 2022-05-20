import React, { useState }  from 'react'
import ItemList from "../ItemList/ItemList";
import axios from "axios"



export default function ItemListContainer ({categoryId}) {  
    const [listProducts, setListProducts]=useState([])
   
  
    React.useEffect(()=>{

      if(categoryId){

        axios.get("https://6286e64e7864d2883e7b4b8d.mockapi.io/productos")
        .then((res) => setListProducts (res.data.filter(item => item.categoryId === +categoryId)))
        
      }
      else{
        axios.get("https://6286e64e7864d2883e7b4b8d.mockapi.io/productos")
        .then((res) => setListProducts (res.data))
      }

   
    
      
        

      
    }, [categoryId])
  
  
    return (
      <div>
          
          <ItemList listProducts={listProducts}/>
      </div>
    )
  }