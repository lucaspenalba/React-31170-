import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import axios from "axios"
import Header from "./components/Navbar/Navbar";
import React from "react";

function App() {
  const [productos, setProductos] = React.useState([])

  React.useEffect (() =>{
    
    axios.get("https://dog.ceo/api/breeds/list/all")
    .then((res) => setProductos (res))
    .catch((err) => console.error(err))
  
  },[])

  console.log(productos)


  return (
    <div className="App">
      <Header category1={"Productos"} category2={"Categoria"} category3={"Perfil"} />
      <ItemListContainer/>
    </div>
  );
}

export default App;
