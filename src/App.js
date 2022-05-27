import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./view/Cart/Cart"
import Home from "./view/Home/Home"
import Products from "./view/Products/Products"
import Product from "./view/Product/Product"
import Category from "./view/Category/Category"
import Header from "./components/Navbar/Navbar";
import {CartProvider} from "./context/CartContext"

function App() {
  

  return (
    <BrowserRouter>
        <CartProvider>
            <Header/>
            <Routes>
                <Route exact path="*" element={<Home/>} />
                <Route exact path="/products" element={<Products/>} />
                <Route exact path="/product/:productId" element={<Product/>} />
                <Route exact path="/category/:categoryId" element={<Category/>} />
                <Route exact path="/cart" element={<Cart/>} />
                
            </Routes>

        </CartProvider>
    </BrowserRouter>
    )
}

export default App;
