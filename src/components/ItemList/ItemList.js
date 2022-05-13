import React from 'react'
import Item from '../Item/Item'
import {products} from "../../data/productos";


const ItemList = ({product}) => {

  return (
      <>
        <h3>Productos para tu mascota</h3>
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', alignItems:'center' }}>
    {products.map((product, index) => (
          <Item product={product} key={product.id}/>
        )
      )}
    </div>
      </>
  )
}

export default ItemList