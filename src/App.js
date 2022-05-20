import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./view/Cart/Cart"
import Home from "./view/Home/Home"
import Products from "./view/Products/Products"
import Product from "./view/Product/Product"
import Category from "./view/Category/Category"
import Header from "./components/Navbar/Navbar";

function App() {
  

  return (
    <BrowserRouter>
        <Header category1={"Productos"} category2={"Categoria 1"} category3={"Categoria 2"} />

        <Routes>
            <Route exact path="*" element={<Home/>} />
            <Route exact path="/products" element={<Products/>} />
            <Route exact path="/product/:productid" element={<Product/>} />
            <Route exact path="/category/:categoryId" element={<Category/>} />
            <Route exact path="/cart" element={<Cart/>} />
            
        </Routes>
    </BrowserRouter>
    )
}

export default App;
