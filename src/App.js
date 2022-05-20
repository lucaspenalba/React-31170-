import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./view/Cart/Cart"
import Home from "./view/Home/Home"
import Products from "./view/Products/Products"
import Product from "./view/Product/Product"
import Category from "./view/Category/Category"

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/products" element={<Products/>} />
            <Route exact path="/product/:id" element={<Product/>} />
            <Route exact path="/category/:CategoryId" element={<Category/>} />
            <Route exact path="/cart" element={<Cart/>} />
            
        </Routes>
    </BrowserRouter>
    )
}

export default App;
