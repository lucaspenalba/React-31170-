import React from 'react'
import Item from '../Item/Item'
import {products} from "../../data/productos";


const ItemList = ({product}) => {
    // const {listaProductos } = props
  return (
      <>
        <h3>Lista de productos</h3>
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