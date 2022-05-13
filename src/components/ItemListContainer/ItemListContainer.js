
import React from "react";
import ItemList from "../ItemList/ItemList";
import {products} from "../../data/productos";


export default function ItemListContainer () {  

    const task = new Promise ((resolve, reject) => {
        let condition = true
        setTimeout(() => {
            if(condition){
                
                resolve(products)
            }else{
				reject('error')
			}
        }, 5000)
        
      })

      console.log(task)
      
      
    return (

        

        
        <div className="ItemListContainer">
      {products.map((product, index) => (
          <ItemList product={product} key={product.id}/>
        )
      )}
    </div>

    );

}