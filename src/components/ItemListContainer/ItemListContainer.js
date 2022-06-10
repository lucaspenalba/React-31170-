import React, { useState }  from 'react'
import ItemList from "../ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where} from "firebase/firestore"


export default function ItemListContainer ({categoryId}) {  
    const [listProducts, setListProducts]=useState([])
   
  
    React.useEffect(()=>{
      const db = getFirestore();

      if(categoryId){
        const qry = query(collection(db, "productos"), where("categoryId", "==", categoryId)) 
        getDocs(qry).then(snapshot => {
        if (snapshot.size === 0) {
          console.log('No matching documents.');
        }
        setListProducts (snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
          })
      } else {
        const productosRef = collection(db, "productos");
        getDocs(productosRef).then(snapshot => {
        setListProducts (snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        console.log(setListProducts);
        })
      }
    


    }, [categoryId])
  
  
    return (
      <div>
          
          <ItemList listProducts={listProducts}/>
      </div>
    )
  }