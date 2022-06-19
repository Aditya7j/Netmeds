import { CardTravelOutlined, CategoryOutlined, PaymentOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "./payment.css"

const Payment = () => {

    const cart = useSelector(store=>store.cart);
    const navigate = useNavigate()
    console.log(cart)
    let total = 0;
    let off =0;
    let totalAmount=0;

    const handleClickpay = ()=>{
        swal({
            title: "Hurray 🎁🎁🎁",
            text: "Payment Successful?",
            icon: "success",  
          })
          navigate("/")
    }
    


  return (
    <>
     {cart.map((e)=>{
        total += e.prcie
        off = Number(e.price1)-e.prcie
        totalAmount = total+e.prcie- e.price1
    })}
    <div className='payment'>
        <div className="paynavbar">
            <Link to="/">
            <img className="payimg" src="https://www.netmeds.com/msassets/home-logo-netmeds-new.svg" alt="" />
            </Link>
        </div>
        <div className="paymiddlediv">
            <div className="payorder">
                <h2 className="payordderh">Order Review</h2>
                <div className="logocontdiv">
                    <div>
                    <CardTravelOutlined className="catout"/>
                    <p className="paymentp">Cart</p>
                    </div>
                    <b className="bbbu">-------</b>
                    <div>
                    <CategoryOutlined className="catout"/>
                    <p className="paymentp">Order Review</p>
                    </div>
                    <b className="bbbu">-------</b>
                    <div>
                        <PaymentOutlined className="catout"/>
                        <p className="paymentp">Payment Details</p>
                    </div>
                </div>
            </div>
            <p style={{margin:"5px",marginLeft:"20%",marginTop:"10px",color:"gray",fontSize:"13px"}}>PRODUCTS</p>

            <div className="paymentprod">
            <div>
                <p className="del">Delivery Estimate</p>
                <b className="date">22-June-2022</b>
                </div>
                {cart.map((e)=>(
                    <div className="paydivmain">
                    <div  className="payitem1">    
                    <img className="paymentprodimg" src={e.img1} alt="" />
                    </div>
                    <div className="payitem2">
                        <h2 className="paytitlle">{e.title}</h2>
                        <p className="payitemp1">Mrf: GLIDE ROUTE VENTURES LLP <br /> Seller : RELIANCE RETAIL LIMITED [NAGPUR BEAUTY FC]</p>
                        <p className="payitemp2">Expiry: May 2024</p>
                    </div>
                    <div className="payitem3">
                        <h2 className="payitemh">Rs.{e.prcie}.00</h2>
                        <p className="payitem1p">Rs.{e.price1}.00</p>
                        <span className="payitem2p">QYT:<b className="paybbc">1</b></span>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="bone">
            <p style={{lineHeight:"2"}}>Customer Notes</p>
            <textarea></textarea>
        </div>

        <div className="payitemms2">
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
              
                <button onClick={handleClickpay} className="proceedp">PAY</button>
    
            </div>
            <p className="isp">Netmeds is a technology platform to facilitate transaction of business. 
                The products and services are offered for sale by the sellers. 
                The user authorizes the delivery personnel to be his agent for delivery of the goods. 
                For details read <b className="terms">Terms & Conditions</b></p>
        </div>
    </div>
    </>
  )
}

export default Payment