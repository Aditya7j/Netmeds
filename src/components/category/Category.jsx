import "./Category.css"

const category = () => {
  return (
    <>
    <h2 style={{padding:"5px"}}>Shop by Category</h2>
    <div className="category">
        
        <div className="cat1">
            <img className="catimg" src="https://www.netmeds.com/images/category/481/thumb/ayush_1.jpg" alt="" />
            <p className="catp">Ayush</p>
        </div>
        <div className="cat2">
            <img  className="catimg" src="https://www.netmeds.com/images/category/v1/3085/thumb/mom_baby_1.jpg" alt="" />
            <p className="catp">Mom & baby</p>
        </div>
        <div className="cat3">
            <img  className="catimg" src="https://www.netmeds.com/images/category/665/thumb/devices_1.jpg" alt="" />
            <p className="catp">Device</p>
        </div>
        <div className="cat4">
            <img  className="catimg" src="https://www.netmeds.com/images/category/500/thumb/fitness_1.jpg" alt="" />
            <p className="catp">Fitness</p>
        </div>
        <div className="cat5">
            <img  className="catimg" src="https://www.netmeds.com/images/category/v1/3251/thumb/sexual_wellness_2.jpg" alt="" />
            <p className="catp">Sexual Wellness</p>
        </div>
    </div>
    </>
  )
}

export default category