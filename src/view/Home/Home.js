import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Header from "../../components/Navbar/Navbar";
import React from "react";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

export default function Home(){
    return(
        <div>
             <div className="Home">
                <Header category1={"Productos"} category2={"Categoria 1"} category3={"Categoria 2"} />
                <ItemDetailContainer/>
                <ItemListContainer/> 
                </div>
            
        </div>

    )
    
}