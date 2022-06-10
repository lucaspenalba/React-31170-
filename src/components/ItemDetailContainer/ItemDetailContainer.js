import React, { useState }  from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from "../ItemDetail/ItemDetail";



export default function ItemDetailContainer ({productId}) {  

    const [items, setItem] = useState([])


  React.useEffect (() =>{
    const db = getFirestore();

    
    const productRef = doc(db, "productos", productId);
    getDoc(productRef).then(snapshot => {
      if (snapshot.exists) {
        setItem ({id: snapshot.id, ...snapshot.data()})
      }
    })
  
        
        
      
    
  
  },[productId])



  return (
    <>
    <div className="ItemDetailContainer">
        
      <ItemDetail items={items}/>
      
        
        
      
    </div>
    </>
  );
  }