import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className="footermid">
            <div className="footerimg">
                <img className="footerimgg" src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg" alt="" />
            </div>
            <div className="footerdesc">
                <p className="footerp">Netmeds.com, India Ki Pharmacy, is brought to you by the Dadha & Company – one of India’s most trusted <br />
                 pharmacies, with over 100 years’ experience in dispensing quality medicines.</p>
            </div>
        </div>
        <div className="footerwrapper">
                <div  className="footercomp">
                    <ul className="footul">
                        <b>COMPANY</b>
                        <li className="footli">About Netmeds</li>
                        <li className="footli">Customers Speak</li>
                        <li className="footli">In the News</li>
                        <li className="footli">Career</li>
                        <li className="footli">Terms and Conditions</li>
                        <li className="footli">Privacy Policy</li>
                        <li className="footli">Fees and Payments Policy</li>
                        <li className="footli">Shipping and Delivery Policy</li>
                        <li className="footli">Return, Refund and Cancellation Policy</li>
                        <li className="footli">Contact</li>
                    </ul>
                </div>

                <div className="footershop">
                    <ul className="footul">
                        <b>SHOPPING</b>
                        <li className="footli">Browse by A-Z</li>
                        <li className="footli">Browse by Manufacturers</li>
                        <li className="footli">Health Articles</li>
                        <li className="footli">Offers / Coupons</li>
                        <li className="footli">FAQs</li>
                    </ul>
                </div>

                <div className="footersocial">
                    <ul className="footul">
                        <b>SOCIAL</b>
                        <li className="footli">Patients Alike</li>
                        <li className="footli">Facebook</li>
                        <li className="footli">Twitter</li>
                        <li className="footli">LinkedIn</li>
                        <li className="footli">Youtube</li>
                        <li className="footli">Refer & Earn</li>
                    </ul>
                </div>

                <div className="footersub">
                    <b>SUBSCRIBE TO OUR NEWSLETTER</b>
                    <p className="footp">Get a free subscription to our health and fitness tip and stay tuned to our latest offers</p>
                    <div className="footboot">
                    <input className="footinput" type="text" placeholder="Enter your email address"/>
                    <span className="footspan">→</span>
                    </div> 
                    <img className="footimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />
                    <img className="footimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="" />
                </div>
        </div>
        
        <div className="footerend">
            <div>Medicine</div>
            <div>Wellness</div>
            <div>Lab Tests</div>
            <div>Beauty</div>
            <div className="copy">Copyright© 2022. All Rights Reserved.</div>
        </div>
    </div>
    
    </>
  )
}

export default Footer



















