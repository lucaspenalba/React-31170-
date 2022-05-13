import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header category1={"Productos"} category2={"Categoria"} category3={"Perfil"} />
      <ItemListContainer/>
    </div>
  );
}

export default App;
