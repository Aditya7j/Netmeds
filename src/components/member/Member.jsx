import "./Member.css"

const Member = () => {
  return (
    <div className="member">
        <div className="member1">
            <div className="memberimgcont">
                <img className="memberimg" src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/netmeds_first_membership.svg" alt="" />
                <ul className="memberul">Netmeds First Membership
                    <li className="memberli">Get special discounts and offers on Netmeds services.</li>
                    <li className="memberli">Get 2.5% NMS Cash on pre-paid, Medicine orders of ANY value!</li>
                </ul>
            </div>
        </div>
        <div className="member2">
            <span className="startp"> <b>⚡</b>Starting at ₹299</span>     
            <button className="startbtn">Explore Plans</button>
        </div>
    </div>
  )
}

export default Member