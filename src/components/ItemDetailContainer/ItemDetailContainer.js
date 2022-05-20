import React, { useState }  from 'react'
import axios from "axios"
import ItemDetail from "../ItemDetail/ItemDetail";



export default function ItemDetailContainer ({id}) {  
    const [items, setItem] = React.useState([])
    const [cargando, setCargando] = useState(false)


  React.useEffect (() =>{

    setCargando(true)
    setTimeout(()=> {
        
        axios.get("https://6286e64e7864d2883e7b4b8d.mockapi.io/productos")
        .then((res) => setItem (res.data.find(item => item.id === id)))
        .catch((err) => console.error(err))
        .finally(()=> setCargando(false))
        
      }, 3000)
    
  
  },[])

  console.log(items[0])  


  return (
    <>
    <div className="ItemDetailContainer">
        {cargando ? <p>Cargando...</p> : 
      items.map((item,i)=> (
          <ItemDetail item={item} key={item.id}/>))
      
        
        }
      
    </div>
    </>
  );
  }