import React, { useState }  from 'react'
import axios from "axios"
import ItemDetail from "../ItemDetail/ItemDetail";



export default function ItemDetailContainer () {  
    const [items, setItem] = React.useState([])
    const [cargando, setCargando] = useState(false)


  React.useEffect (() =>{

    setCargando(true)
    setTimeout(()=> {
        
        axios.get("https://api.mercadolibre.com/sites/MLA/search?q=alimento%20para%20perro")
        .then((res) => setItem (res.data.results))
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