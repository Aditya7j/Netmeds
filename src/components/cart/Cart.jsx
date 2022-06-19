import "./Cart.css";
import { useSelector } from "react-redux";
import Cartslider from "../cartslider/Cartslider";
import Cartsliderup from "../cartsliderup/Cartsliderup";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Cart = () => {
    const cart = useSelector(store=>store.cart)
    let total = 0;
    let off =0;
    let totalAmount=0;
  return (
    <>
     <Navbar/>
    {cart.map((e)=>{
        total += e.prcie
        off = Number(e.price1)-e.prcie
        totalAmount = total+e.prcie- e.price1
    })}
    <div className="cart">

        <div className="cartitems1">
        <h2 className="carth">Order Summary</h2>
        <div className="slide">
            <Cartsliderup/>
        </div>
        
        <div className="cartquandiv">
            <p className="cartp">Products</p>
            {cart.map((e)=>(
                <div className="cartqun" key={e.id}>
                <div className="cartqun1">
                <img className="cartqunimg" src={e.img1}alt="" />
                </div>
                <div className="cartqun2">
                <p className="cartanti">{e.title}</p>
                <p className="cartmfr">Mfr: Happily Unmarried Marketing Private Limited</p>
                <b className="cartprice">Rs.{e.prcie}</b>
                <span className="cartprice1">Rs.{e.price1}</span>
                <p className="cartdel">Delivery between JUNE 21-JUNE 22</p>
                </div>
                <div className="cartqun3">
                    <div className="qytdiv">
                        <b className="qyt">QTY :</b>
                        <select className="cartselect">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                    </div>
                    <br />
                    <button className="cartremovebtn">REMOVE</button>
                    <button className="cartsavebtn">SAVE FOR LATER</button>
                </div>
            </div>
            ))}
            <b className="moreb">ADD MORE ITEMS</b>
        </div>
        
        </div>
        <div className="cartitems2">
            <div className="coupondiv">
                <p className="coup">APPLY PROMOCODE / NMS SUPERCASH</p>
                <input className="rad" type="radio" />
                <span className="coupspan">Apply Promo Code</span>
                <p className="coupp">Get flat discount! Vouchers applicable in <br /> payment options.</p>
            </div>
            <div className="billdiv">
                <p className="payp">PAYMENT DETAILS</p>
                <b className="netb">MRP Total</b><span className="white">...................................................</span><span className="payspan">Rs.{total}.00</span>
                <br />
                <b className="netb">Netmeds Discount</b><span className="white">...............................</span> <span className="payspan">-Rs.{off}.00</span>
                <br />
                <b className="totp">Total Amount*</b><span className="white">.........................................</span> <span className="payspan">Rs.{totalAmount}.00</span>
                <button className="totalbtn">TOTAL SAVINGS RS.<b>{off}.00</b></button>
                <p className="amop">Total Amount</p>
                <span className="ppop">Rs.{totalAmount}.00</span>
                <Link to="/payment">
                <button className="proceedp">PROCEED</button>
                </Link>
            </div>
            <p className="isp">Netmeds is a technology platform to facilitate transaction of business. 
                The products and services are offered for sale by the sellers. 
                The user authorizes the delivery personnel to be his agent for delivery of the goods. 
                For details read <b className="terms">Terms & Conditions</b></p>
        </div>
    </div>
    <br /><br />
    <div className="cartslider">
        <Cartslider/>
    </div>
    </>
  )
}

export default Cart