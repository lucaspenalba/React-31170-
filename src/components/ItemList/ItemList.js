import React from 'react'
import Item from '../Item/Item'


export default function ItemList ({listProducts}) {

  return (
      <>
        <h3>Productos para tu mascota</h3>
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', alignItems:'center' }}>
    {listProducts.map((product, index) => (
          <Item product={product} key={product.id}/>
        )
      )}
    </div>
      </>
  )
}
