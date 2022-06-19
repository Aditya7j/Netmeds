import Navbar from "../../components/navbar/Navbar"
import "./Login.css"
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <>
     <Navbar/>
    <div className="login">
        <div className="logindiv">
            <div className="logindiv1">
                <img className="loginimg" src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png" alt="" />
            </div>
            <div className="logindiv2">
                <h2 className="loginh">Sign In / Sign Up</h2>
                <p className="loginp">Sign up or Sign in to access your orders, special offers,  <br /> health tips and more!</p>
                <b className="loginb">PHONE NUMBER</b>
                <br />
                <div className="inputdivlogin">
                    <span className="loginspan">+91</span>
                    <input className="logininput" type="number" placeholder="Enter your mobile no"/>
                </div>
                <Link to="/">
                <button className="loginbtn">LOGIN</button></Link>

                <div className="logoimfdiv">
                    <div>
                    <img className="googlelogo" src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" />
                    <span className="googletitle">Google</span>
                    </div>
                    <div>
                    <img className="googlelogo" src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png" alt="" />
                    <span className="googletitle">Facebook</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
            <p className="byp">By continuing you agree to our <b className="bb">Terms of service</b> <br />
               and <b className="bb">Privacy & Legal Policy.</b></p>
    </>
  )
}

export default Login