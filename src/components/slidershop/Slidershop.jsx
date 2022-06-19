import styled from "styled-components";
import { slideitems } from "../../data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRef,useEffect } from "react";

const Conatiner =styled.div`
    height: 250px;
    padding: 5px;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-bottom: 3%;
`
const Arrow = styled.div`
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
    transition: all 1.5s ease;
`
const ImgContainer = styled.div`
    height: 100%; 
    flex: 1;
`
const Image = styled.img`
    height: 90%;
    margin: 30px;
    border-radius: 15px;
    object-fit: contain;
`
const Slidershop = () => {
    const check = useRef();
    const [slideIndex,setSlideIndex] =useState(0)

    useEffect(()=>{
        clearInterval(check.current)
             check.current=setInterval(()=>{
             setSlideIndex(slideIndex > 0 ? slideIndex-1:1)
         },3500)
    },[slideIndex])
    

    const handleClick = (direction) =>{
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1:1)
        }
        else{
            setSlideIndex(slideIndex<1?slideIndex+1:0)
        }
    }

  return (
    <>
    <h2 style={{padding:"5px"}}>Trending Today</h2>
    <Conatiner>
       
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {slideitems.map((item)=>(
                <ImgContainer key={item.id}>
                        <Image src={item.img}/>
                </ImgContainer>
            ))}
        </Wrapper>

        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </Arrow>
    </Conatiner>
    </>
  )
}

export default Slidershop