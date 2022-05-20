import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./view/Cart/Cart"
import Home from "./view/Home/Home"
import Products from "./view/Products/Products"


export default function AppShell(){
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/products" element={<Products/>} />
            <Route exact path="/cart" element={<Cart/>} />
            
        </Routes>
    </BrowserRouter>
}