import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams,Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./SingleProduct.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/action";
import Navbar from "../navbar/Navbar";


const SingleProduct = () => {
    const {id} =useParams();
    const [product,setProduct] =useState([]);
    const [showImg,setShowImg] =useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        const getData = async()=>{
            axios.get(`http://localhost:8080/products/${id}`).then((res)=>{
                // console.log(res.data)
                setProduct(res.data)
            })
        }
        getData()
    },[id])

    const handleadd = (x)=>{
        dispatch(addProduct(x))
    }

  return (
    <>
    <Navbar/>
    <div className="slider">
        <ul className="sliderul">
            <li className="sliderli">Covid Essentials</li>
            <li className="sliderli">Diabetes</li>
            <li className="sliderli">Eyewear</li>
            <li className="sliderli">Ayush</li>
            <li className="sliderli">Ayurvedic</li>
            <li className="sliderli">Homeopathy</li>
            <li className="sliderli">Fitness</li>
            <li className="sliderli">Mom & baby</li>
            <li className="sliderli">Devices</li>
            <li className="sliderli">Surgicals</li>
            <li className="sliderli">Sexual Wellness</li>
            <li className="sliderli">Treatments</li>
        </ul>
    </div>

    <div className="inside">
            <ul className="insideul">
               <Link to="/" className="linkk"><li className="insideli">Home</li> -</Link>
                <li className="insideli">Wellness</li> -
                <li className="insideli"> <b>MANCODE 2 in 1 Beard & Face Wash 200 ml</b></li>
            </ul>
    </div>

    <div className='singleproduct'>
        <div className="singleproductitems1">
            <div className="singleproditem1">
                <img onClick={()=>setShowImg(product.img1)} className="singleprodimg" src={product.img1} alt="" />
                <img onClick={()=>setShowImg(product.img2)} className="singleprodimg" src={product.img2} alt="" />
                <img onClick={()=>setShowImg(product.img3)} className="singleprodimg" src={product.img3} alt="" />
                <img onClick={()=>setShowImg(product.img4)} className="singleprodimg" src={product.img4} alt="" />
                <img onClick={()=>setShowImg(product.img5)} className="singleprodimg" src={product.img5} alt="" />
            </div>
            <div className="singleproditem2">
                {showImg===""?<img className="singleproditem2img" src={product.img1} alt="" />:<img src={showImg} alt="" /> }
            </div>
        </div>
        <div className="singleproductitems2">
            <div className="singleprodeitem1">
                <p className="singleprodtitle">{product.title}</p>
                <span className="singleprodcat">{product.category}</span>
                <br />
                <b className="heart">❤</b>
            </div>

            <div className="singleprodeitem2">
                <b className="besst">Best Price* <span className="spanpic">₹ {product.prcie}</span></b>
                <br />
                <b className="mrpp">MRP* <span className="spanpic1">₹.{product.price1}</span></b>
                <span className="singleproddiscount">GET {product.dicount}% OFF</span>
                <p className="all">(Inclusive of all taxes)</p>
                <p className="mkt">* Mkt: GLIDE ROUTE VENTURES LLP</p>
                <p className="mkt">* Country of Origin: India</p>
                <p className="mkt">* Delivery charges if applicable will be applied at checkout</p>
                {/* <Link to="/cart"> </Link> */}
                <button onClick={()=>handleadd(product)} className="addbtn">ADD TO CART</button>
               
            </div>
            <div className="singleprodeitem3">
                <b className="check">Check Availability & Expiry</b>
                <div className="under">
                    <b className="pin">PINCODE:<span className="num">110002</span></b>
                    <span className="arroww">➡</span>
                </div>
                <b className="offap">OFFER APPLICABLE</b>
                <div className="offer">
                    <img className="offerimg" src="https://previews.123rf.com/images/blankstock/blankstock1802/blankstock180200700/95952958-up-to-25-off-sale-discount-offer-price-sign-special-offer-symbol-save-25-percentages-star-button-gra.jpg" alt="" />
                    <p className="def">Default Discount <p className="you">You get {product.dicount}% OFF on this product</p></p> 
                    <p className="offapp">Offer Applied</p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default SingleProduct