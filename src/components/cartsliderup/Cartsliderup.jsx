import styled from "styled-components";
import { sliderItems } from "../../data";
import { useState,useRef,useEffect } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";


const Container =styled.div`
    height: 200px;
    padding: 5px;
    display: flex;
    position: relative;
    overflow: hidden;
    margin-bottom: 3%;
    
`
const Arrow = styled.div`
    width: 30px;
    height: 30px;
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
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%; 
    flex: 1;
`
const Image = styled.img`
    height: 20%;
    margin: 30px;
    border-radius: 15px;
    object-fit: fill;
`
const Cartsliderup = () => {
    const check = useRef();
    const [slideIndex,setSlideIndex] =useState(0)

    useEffect(()=>{
        clearInterval(check.current)
             check.current=setInterval(()=>{
             setSlideIndex(slideIndex<2?slideIndex+1:0)
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

export default Cartsliderup 