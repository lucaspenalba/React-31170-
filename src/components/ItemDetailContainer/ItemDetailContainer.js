import React, { useEffect, useState }  from 'react'
import ItemList from "../ItemList/ItemList";
import {getproducts} from "../../data/productos";


export default function ItemListContainer () {  
    const [listProducts, setListProducts]=useState([])
    const [cargando, setCargando] = useState(false)
   
  
    useEffect(()=>{
      setCargando(true)
      getproducts
      .then((res)=> setListProducts(res))
      .catch((error)=> console.log(error))
      .finally(()=> setCargando(false))
    }, [])
  
  
    return (
      <div>
          {cargando ? <p>Cargando...</p> : <ItemList listProducts={listProducts}/>}
      </div>
    )
  }