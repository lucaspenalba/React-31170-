import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header category1={"Productos"} category2={"Categoria"} category3={"Perfil"} />
      <h1>Mi primera aplicacion</h1>
      <ItemListContainer/>
    </div>
  );
}

export default App;
