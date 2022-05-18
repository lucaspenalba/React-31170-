import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Header from "./components/Navbar/Navbar";
import React from "react";

function App() {
  

  return (
    <div className="App">
      <Header category1={"Productos"} category2={"Categoria"} category3={"Perfil"} />
      <ItemDetailContainer/>
      
      
      
    </div>
  );
}

export default App;
