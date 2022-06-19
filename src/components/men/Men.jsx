import "./Men.css"
import {Link} from "react-router-dom";

const Men = () => {
  return (
    <>
        <h2 style={{padding:"5px"}}>Men's Grooming</h2>
    <div className="category">
        
        <div className="cat1">
            <img className="catimg" src="https://www.netmeds.com/images/category/v1/3420/thumb/shaving.jpg?v=1" alt="" />
            <p className="catp">Shaving</p>
            <p className="catpp">Up to 31% OFF</p>
        </div>
        <div className="cat2">
            <img  className="catimg" src="https://www.netmeds.com/images/category/v1/3002/thumb/razors_cartridges_2.jpg?v=1" alt="" />
            <p className="catp">Razors & Cartridges</p>
            <p className="catpp">Up to 46% OFF</p>
        </div>
        <div className="cat3">
            <img  className="catimg" src="https://www.netmeds.com/images/category/v1/3591/thumb/beard_oil_2.jpg?v=1" alt="" />
            <p className="catp">Beard Oil</p>
            <p className="catpp">Up to 25% OFF</p>
        </div>

        <Link className='link' to="/product">
        <div className="cat4">
            <img  className="catimg" src="https://www.netmeds.com/images/category/v1/3593/thumb/beard_wash_2.jpg?v=1" alt="" />
            <p className="catppp">Beard Wash</p>
            <p className="catpp">Up to 20% OFF</p>
        </div>
        </Link>

        <div className="cat5">
            <img  className="catimg" src="https://www.netmeds.com/images/category/v1/3704/thumb/hair_gels_waxes_2.jpg?v=1" alt="" />
            <p className="catp">Hair Gel & Waxes</p>
            <p className="catpp">Up to 23% OFF</p>
        </div>
    </div>
    </>
  )
}

export default Men