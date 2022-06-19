import "./Beauty.css"

const Beauty = () => {
  return (
    <>
    <div className="beauty">
        <div className="beautyleft">
            <div className="beautyimgcont">
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/Wellnessnew.svg" alt="" />
                <span className="beautyspan">Order Medicine <br /> <b className="beautyp">Save upto 25% off</b></span>
            </div>
        </div>
        <div className="beautycenter">
            <div className="beautyimgcont">
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/Beautynew.svg" alt="" />
                <span className="beautyspan">Beauty <br /> <b className="beautyp">Save upto 40% off</b></span>
            </div>
        </div>
        <div className="beautyright">
            <div className="beautyimgcont">
                <img src="https://www.netmeds.com/assets/gloryweb/images/icons/ordermedicinnew.svg" alt="" />
                <span className="beautyspan">Wellness <br /> <b className="beautyp">Flat 15% off</b></span>
            </div>
        </div>
    </div>
       
       <div className="letterdiv">
        <div className="letter1">
        <h2 >Payment Partner Offers</h2>
        </div>
        <div className="letter2">
            <b>View All</b>
        </div>
       </div>

       <div className="logodiv">
            <div className="logoitems1">
                <div className="logoimgcont">
                    <img className="logoimg" src="https://www.netmeds.com/images/cms/offers/1654235738_Icon_256x256.png" alt="" />
                    <span className="logospan">Use pay with Rewards,Get up to Rs.800 Cashback!.. <br /> <br />
                        <b className="logob">Get assured cashback between Rs.30 and Rs 800 when you pay using the "Pay with Rewards" payme...</b>
                    </span>
                </div>
            </div>
            <div className="logoitems2">
                <div className="logoimgcont">
                    <img className="logoimg" src="https://www.netmeds.com/images/cms/offers/1643631754_1629112796_Simpl_Icon.png" alt="" />
                    <span className="logospan">Get up to Rs.500 Simpl Cashback* (5%)!.. <br /><br />
                    <b className="logob">From 1st to 30th June 2022 get up to Rs. 500 Simpl Cashback*(5%) on your payment via Simpl towards...</b>
                    
                    </span>
                </div>
            </div>
            <div className="logoitems3">
                <div className="logoimgcont">
                    <img className="logoimg" src="https://www.netmeds.com/images/cms/offers/1643631754_1629112796_Simpl_Icon.png" alt="" />
                    <span className="logospan">Get up to Rs.750 Simpl Cashback* (12%)!.. <br /> <br />
                    <b className="logob">Today only Get up to Rs. 750 Simpl Cashback (12%) on FIRST-EVER payment made via Simple towards ANY p...</b> 
                    </span>
                </div>
            </div>
       </div>

        <div className="prevdiv">
            <div className="prevdiv1">

                <div className="previtems">
                    <h3 className="previtemsh">Previous Orders</h3>
                    <p className="previtemsp">Your previously ordered products</p> <br />
                    <b className="previtemsb">View Orders</b>
                </div>

                <div className="previtems1">
                    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg" alt="" />
                </div>

            </div>
            <div className="prevdiv2">
            <div className="previtems">
                    <h3 className="previtemsh">Beauty Products</h3>
                    <p className="previtemspp">Save upto 40% off</p> <br />
                    <button className="prevbtn">Explore beauty</button>
                </div>

                <div className="previtems1">
                    <img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Beauty