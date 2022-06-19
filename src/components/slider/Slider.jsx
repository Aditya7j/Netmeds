import "./Slider.css";
import styled from "styled-components"
import {sliderItems} from "../../data"
import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";


const Container = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow =styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction==="left" && "10px"};
    right:${props=>props.direction==="right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    margin: auto;
    z-index: 2;

`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex*-100}vw);
    transition: all 0.5s ease;

`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer =styled.div`
    height: 100%; 
    flex: 1;
`

const Image =styled.img`
    height: 42%;
    object-fit: contain;
`

const Slider = () => {
    const check = useRef();
    const [slideIndex,setSlideIndex] =useState(0);
    
    useEffect(()=>{
        clearInterval(check.current)
             check.current=setInterval(()=>{
             setSlideIndex(slideIndex<5?slideIndex+1:0)
         },3500)
    },[slideIndex])

    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1:5)
        }
        else{
            setSlideIndex(slideIndex<5?slideIndex+1:0)
        }
    }

  return (
    <>
    <div className="slider">
        <ul className="sliderul">
            <li className="sliderli">Covid Essentials</li>
            <li className="sliderli">Diabetes</li>
            <li className="sliderli">Eyewear</li>
            <li className="sliderli">Ayush</li>
            <li className="sliderli">Ayurvedic</li>
            <li className="sliderli">Homeopathy</li>
            <li className="sliderli">Fitness</li>
            <li className="sliderli">Mom & baby</li>
            <li className="sliderli">Devices</li>
            <li className="sliderli">Surgicals</li>
            <li className="sliderli">Sexual Wellness</li>
            <li className="sliderli">Treatments</li>
        </ul>
    </div>
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((items)=>(
                <Slide bg={items.bg} key={items.id}>
                <ImgContainer>
                    <Image src={items.img}/>
                </ImgContainer>
                </Slide>
  ))}            
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            {/* <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> */}
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  

    
    </>
  )
}

export default Slider
