import React, { useState } from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import  styled from 'styled-components'
import Img from './img/AirForce1.png'
import Img2 from './img/newBalance.png'
import Img3 from './img/rack2.png'
import Img4 from './img/Jordan4.png'
const Container = styled.div`
  width: 100%;
  height: 33vh;
  display: flex;
  position: relative;
  overflow: hidden;
  
`;

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
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin:auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 33vh;
  display: flex;
  background-Color:${props=>props.bg} ;
`;

const ImgContainer = styled.div`
  width: 50vw;
  flex:2;
`;

const Image = styled.img`
  height: 35vh;
  width: 60vw;
  object-fit: cover;
`;

const InfoContainer = styled.div`
flex:1;
`;

const Title = styled.h1`
  font-size: 18px;
  margin-right: 10px;
 
`;

const Desc = styled.p`
  margin: 17px 20px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  
`;

const Button = styled.button`
  padding: 10px;
  font-size: 10px;
  background-color: transparent;
  cursor: pointer;
  
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
      <span class="material-symbols-outlined">keyboard_arrow_left</span>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>

      <Slide bg='lightBlue'>
            <ImgContainer>
              <Image src={Img3} style={{height: '70vh'}}/>
            </ImgContainer>
            <InfoContainer>
              <Title>Hoodies</Title>
              <Desc>View Jackets / Hoodies </Desc>
              <Link exact to='/hoodies'>
              <Button>SHOP NOW</Button>
          </Link>
            </InfoContainer>
          </Slide>

          

          
          <Slide bg='lightGreen'>
            <ImgContainer>
              <Image src={Img2} />
            </ImgContainer>
            <InfoContainer>
              <Title>New Balance</Title>
              <Desc>These shoes offer you comfort and flexibility to wear all day</Desc>
              <Link exact to='/newBalances'>
              <Button>SHOP NOW</Button>
          </Link>
            </InfoContainer>
          </Slide>

          <Slide bg='white'>
            <ImgContainer>
              <Image src={Img} />
            </ImgContainer>
            <InfoContainer>
              <Title>Crisp White Kicks !</Title>
              <Desc>Look fresh all summer in a pair of all-white AF1s.</Desc>
              <Link exact to='/airForce1s'>
              <Button>SHOP NOW</Button>
          </Link>
            </InfoContainer>
            </Slide>
            

          <Slide bg='white'>
            <ImgContainer>
              <Image src={Img4} />
            </ImgContainer>
            <InfoContainer>
              <Title>Air Jordan 4's</Title>
              <Desc>Stylish & Classic Jordan 4 great for any occasion </Desc>
              <Link exact to='/jordan4s'>
              <Button>SHOP NOW</Button>
          </Link>
            </InfoContainer>
          </Slide>

      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
      <span class="material-symbols-outlined">keyboard_arrow_right</span>
      </Arrow>
    </Container>
  );
};

export default Slider;