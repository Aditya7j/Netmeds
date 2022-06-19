import "./Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMedkit,faOilWell,faKitMedical,faFileMedical,faIls} from "@fortawesome/free-solid-svg-icons";
import {Search,ShoppingCartOutlined,FileCopyOutlined,PersonAddOutlined } from "@material-ui/icons"
import {Link } from "react-router-dom";
import {useSelector } from "react-redux";
import {Badge} from '@material-ui/core';


const Navbar = () => {
    const quantity =useSelector(store=>store.cart.length)
  return (
    <div className="navbar">
        <div className="navbarwrapper">
            <div className="navbarleft">
              <Link to="/"> <img className="navbarleftimg" src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="" /></Link> 
            </div>
            <div className="navbarcentre">
                <div className="searchbar">
                    <span className="searchspan">Deliver to <b className="searchb">110002</b></span>
                    <Search className="srch"/>
                    <input className="searchinput" type="text" placeholder="Search for medicine & wellness products..." />
                </div>
                
            </div>
            <div className="navbarright">
                <div className="rightItems">
                    <div className="righticons">
                        <FileCopyOutlined/>
                        <span className="navrightspan">Upload</span>
                    </div>

                    <div className="righticons">
                        <Link className="cu" to="/cart">
                        <Badge className="badge" badgeContent={quantity} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                        </Link>
                        <span className="navrightspan">Cart</span>
                    </div>

                    <div className="righticons">
                        <PersonAddOutlined/>
                       <Link className="cu" to="/login"><span className="navrightspan">Sign in/Sign up</span></Link> 
                    </div>
                </div>
            </div>
            <div className="middlecont">
                <div className="middleitems">
                    <div className="middleicons">
                        <FontAwesomeIcon className="medicons" icon={faMedkit}></FontAwesomeIcon>   
                        <span className="middlespan">Medicine</span>
                    </div>
                    <div className="middleicons">
                        <FontAwesomeIcon className="oilicons" icon={faOilWell}></FontAwesomeIcon>
                        <span className="middlespan">Wellness</span>
                    
                    </div>
                    <div className="middleicons">
                        <FontAwesomeIcon className="kiticons" icon={faKitMedical}></FontAwesomeIcon>
                        <span className="middlespan">Lab Tests</span>
                    </div>
                    <div className="middleicons">
                        <FontAwesomeIcon className="inboxicons" icon={faFileMedical}></FontAwesomeIcon>
                        <span className="middlespan">Beauty</span>
                    </div>
                    <div className="middleicons">
                        <FontAwesomeIcon className="ilsicons" icon={faIls}></FontAwesomeIcon>
                        <span className="middlespan">Health Corner</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar