import Home from "./pages/home/Home";
import Product from "./components/products/Product";
import {Routes,Route} from "react-router-dom";
import SingleProduct from "./components/singleproduct/SingleProduct";
import Cart from "./components/cart/Cart";
import Login from "./pages/login/Login";
import Payment from "./pages/payment/Payment";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes> 
    </div>
  );
}

export default App;

