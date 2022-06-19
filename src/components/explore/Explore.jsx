import "./Explore.css"

const Explore = () => {
  return (
    <>
    <div className='explore'>
        <h2>Explore beauty</h2>
           <div className="explorewrapper">
                <div>
                    <img className="exploreimg" src="https://www.netmeds.com/images/category/3505/thumb/facial_kits_1.jpg" alt="" />
                    <p className="explorep">Facial Kit</p>
                </div>
                <div>
                    <img className="exploreimg" src="https://www.netmeds.com/images/category/v1/560/thumb/lip_care_2.jpg" alt="" />
                    <p className="explorep">Lip Care</p>
                </div>
                <div>
                    <img className="exploreimg" src="https://www.netmeds.com/images/category/v1/525/thumb/body_care_2.jpg" alt="" />
                    <p className="explorep">Body Care</p>
                </div>
                <div>
                    <img className="exploreimg" src="https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg" alt="" />
                    <p className="explorep">Hair care</p>
                </div>
           </div>
    </div>
    </>
  )
}

export default Explore