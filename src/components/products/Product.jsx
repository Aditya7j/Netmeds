import "./Product.css"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {useSearchParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/action";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Product = () => {

    let [searchParams,setSearchParams] = useSearchParams()
    const [product,setProduct] =useState([]);
    const [page,setPage] =useState(Number(searchParams.get("page")||1));
    const [asc,setAsc] =useState("ASC");
    const dispatch = useDispatch();
    

    useEffect(()=>{
        const getData = async()=>{
            axios.get(`http://localhost:8080/products?_limit=12&_page=${page}`,{params:{_sort:"prcie",_order:asc}}).then((res)=>{
                // console.log(res.data)
                setProduct(res.data)
            })
        }
        getData();
    },[page,asc])

    useEffect(()=>{
        setSearchParams({page,asc})
    },[page,setSearchParams,asc])

    const handleClickasc = ()=>{
        setAsc("ASC")
    }
    const handleClickdsc = ()=>{
        setAsc("DESC")
    }
    
    const handleadd = (x)=>{
        dispatch(addProduct(x))
    }

    const handlediscount= ()=>{
        
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
     <div className="outside">
            <ul className="outsideul">
               <Link className="linkk" to="/"><li className="outsideli">Home</li> - </Link> 
                <li className="outsideli">Non-Prescription </li> -
                <li className="outsideli">Men's Grooming </li> -
                <li className="outsideli">Beard Care</li> -
                <li className="outsideli">Beard Wash</li> 
            </ul>
        </div>

     
     
    <div className='productdiv'>
    
        <div className="productitem1">
        
            <div className="productitems1">

                <h2 style={{padding:"5px",fontSize:"18px",fontWeight:"500"}}>Categories</h2><br />
                <hr />
                <div className="productscrolldiv">
                <ul className="productul">
                    <li className="productli">Ayush</li>
                    <li className="productli">Fitness</li>
                    <li className="productli">Mom & Baby</li>
                    <li className="productli">Sexual Wellness</li>
                    <li className="productli">Treatments</li>
                    <li className="productli">Devices</li>
                    <li className="productli">Health Conditions</li>
                    <li className="productli">Otc Deals</li>
                    <li className="productli">Eyewear</li>
                    <li className="productli">Covid Essentials</li>
                    <li className="productli">Surgical</li>
                    <li className="productli">Diabetes Support</li>
                    <li className="productli">Fragrances</li>
                    <li className="productli">Make up</li>
                    <li className="productli">Hair</li>
                    <li className="productli">Tools & Appliances</li>
                </ul>
                </div>
                

            </div>
            <div className="productitems2">
                <div className="proditem1">
                <h2 style={{padding:"5px",fontSize:"18px",color:"gray",fontWeight:"500"}}>Filters</h2><br />
                <hr />
                <b style={{padding:"5px",fontSie:"15px",lineHeight:"2"}}>Availability</b><br />
                <input style={{margin:"5px"}} type="checkbox" /> <span style={{fontSize:"13px",lineHeight:"2"}}> Exclude out of stock (51)</span><br />
                <b style={{padding:"5px",fontSie:"15px"}}>Manufacturers</b><br />
                <input className="proditeminput" type="text" placeholder="Search..." />
                </div>
                <div className="proditem2">
                    <input type="checkbox" /> <span className="proditem2span">Happily Unmarried Marketing Private Limited</span><br />
                    <input type="checkbox" /> <span className="proditem2span">GLIDE ROUTE VENTURES LLP (6)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">The Man Company (6)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">Emmbros Overseas Lifestyle Pvt Ltd (4)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">Alphanso Products Pvt Ltd (3)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">SS Enterprises (3)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">UG Life Style Pvt Ltd (3)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">Ador Multiproducts Limited (2)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">Khadi Men (2)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">The Real Man (2)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">Visage Lines Personal Care Pvt Ltd (2)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">Bella Skin Care Sciences (1)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">Dofey Ventures Pvt. Ltd (1)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">Entice Cosmetics (1)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">Helios Lifestyle Pvt. Ltd. (1)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">IGC Lifestyle Pvt Ltd (1)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">KE Healthcare Pvt. Ltd. (1)</span><br />
                    <input type="checkbox" /> <span className="proditem2span">Letsshave Private Limited (1)</span><br />
                    <input type="checkbox" /> <span className="proditem2span"> Portia Global (1)</span><br />
                </div>
            </div>
            <div className="productitems3">
                <div className="proditemm1">
                <h2 style={{padding:"5px",fontSize:"18px",fontWeight:"500"}}>Brands</h2><br />
                <input className="proditemminput" type="text" placeholder="Search..." />
                </div>
                        <div className="proditemm2">
                        <input type="checkbox" /> <span className="proditem2span">Be O Man (5)</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Beardhood (3)</span><br />
                        <input type="checkbox" /> <span className="proditem2span">23 Yards (2)</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Be O Man (5)</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Bodycafe (2)</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Gans (2)</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Tabac (1)</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Uncle Tony (1)</span><br />
                        </div>
                <div className="proditemm3">
                <h2 style={{padding:"5px",fontSize:"18px",fontWeight:"500"}}>Price</h2><br /> 
                <hr />
                        <input type="checkbox" /> <span className="proditem2span">Rs 299 & Below</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Rs 499 & Above</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Rs 799 & Above</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Rs 1900 & Above</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Rs 2999 & Above</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Rs 3999 & Above</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Rs 4999 & Above</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Rs 5999 & Above</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Rs 6999 & Above</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Rs 7999 & Above</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Rs 8999 & Above</span><br />
                        <input type="checkbox" /> <span className="proditem2span">Rs 9999 & Above</span><br />
                </div>
            </div>
        </div>

        <div className="productitem2">
            <div className="productimgdiv">
                <img className="productimg" src="https://www.netmeds.com/images/category/v1/3593/beard_wash_0.jpg" alt="" />
            </div>
            <div className="productfilter">
                <div className="producttotal">Showing...<b>12</b>... of...<b>48</b>...items</div>
                <div className="productfil">
                   <b>Sort by :</b>  
                    <button className="productfilbtn">Popularity</button>
                    <button onClick={handleClickasc} className="productfilbtn">Low to High</button>
                    <button onClick={handleClickdsc} className="productfilbtn">High to Low</button>
                    <button onClick={handlediscount} className="productfilbtn">Discount</button>
                </div>
            </div>
            <b style={{padding:"7px",color:"gray",fontWeight:"500"}}>All Products</b>

            {/* Main products Items */}

            <div className="mainprod">
                {product.map((item)=>(
                <div className="productitems" key={item.id}>
                   <Link to={`/product/${item.id}`}><img className="productitemsimgg" src={item.img1} alt="" /></Link>
                    <p className="producttitle">{item.title}</p>
                    <p className="productcategory">{item.category}</p>
                    <span className="productdiscount">GET {item.dicount}% OFF</span>
                    <br />
                    <b className="best">Best Price*<span className="productpricespan">Rs. {item.prcie}</span></b>
                    <br />
                    <b className="mrp">MRP*<span className="productprice1span">Rs. {item.price1}</span></b>
                    <br />
                    
                    <button onClick={()=>handleadd(item)} className="productcartbutton">ADD TO CART</button>
                
                </div>
                ))}
            </div>
        </div>
    </div>
            <div className="buttondiv">
                <button disabled={page===1} className="btnpagination" onClick={()=>setPage(page-1)}>PREV</button>
                <Pagination currentPage={page} lastPage={4} onPageChange={setPage}/>
                <button disabled={page===4} className="btnpagination" onClick={()=>setPage(page+1)}>NEXT</button>
            </div>
        <Footer/>
    </>
  )
}

const Pagination = ({
    currentPage,
    lastPage,
    onPageChange
  
  })=>{
    const arr = new Array(lastPage).fill(0)
    return (
      <>
        <div>  
            {arr.map((item,page)=> <button key={page} className="next1" disabled={(page+1)===currentPage} 
                onClick={()=>onPageChange(page+1)}>{page+1}</button>)}
        </div>
        </>
    )
  }

export default Product;
