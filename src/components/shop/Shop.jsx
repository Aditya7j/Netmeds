import React from 'react'

const Shop = () => {
  return (
    <>
    <h2 style={{padding:"5px"}}>Shop by Category</h2>
    <div className="category">
        
        <div className="cat1">
            <img className="catimg" src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg" alt="" />
            <p className="catp">Body Care</p>
        </div>
        <div className="cat2">
            <img  className="catimg" src="https://www.netmeds.com/images/category/v1/3085/thumb/mom_baby_1.jpg" alt="" />
            <p className="catp">Mom & baby</p>
        </div>
        <div className="cat3">
            <img  className="catimg" src="https://www.netmeds.com/images/category/3934/thumb/skin_treatment_1.jpg" alt="" />
            <p className="catp">Skin Treatment</p>
        </div>
        <div className="cat4">
            <img  className="catimg" src="https://www.netmeds.com/images/category/3495/thumb/face_wash_cleansers_3.jpg" alt="" />
            <p className="catp">Face Wash & Cleansers</p>
        </div>
        <div className="cat5">
            <img  className="catimg" src="https://www.netmeds.com/images/category/v1/3566/thumb/shower_gels_body_wash_2.jpg" alt="" />
            <p className="catp">Shower Gel & Body Wash</p>
        </div>
    </div>
    </>
  )
}

export default Shop