import Beauty from "../../components/beauty/Beauty"
import Slider from "../../components/slider/Slider"
import SliderItems from "../../components/slideritems/SliderItems"
import Category from "../../components/category/Category";
import Slidershop from "../../components/slidershop/Slidershop";
import Top from "../../components/top/Top";
import Member from "../../components/member/Member";
import Mid from "../../components/mid/Mid";
import Explore from "../../components/explore/Explore";
import Best from "../../components/best/Best";
import Shop from "../../components/shop/Shop";
import Men from "../../components/men/Men";
import Health from "../../components/health/Health";
import Experts from "../../components/experts/Experts";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";


const Home = () => {
  return (
    <div>
         <Navbar/>
        <Slider/>
        <Beauty/>
        <SliderItems/>
        <Category/>
        <Slidershop/>
        <Top/>
        <Member/>
        <Mid/>
        <Explore/>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Best/>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Shop/>
        <Men/>
        <Health/>
        <Experts/>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <Footer/>
    </div>
  )
}

export default Home