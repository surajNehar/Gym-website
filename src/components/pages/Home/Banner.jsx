import React from 'react'
import styled from 'styled-components'
import bg from "../../images/body-build.jpg";
import { useNavigate } from 'react-router-dom';
import { BsFillPlayCircleFill } from 'react-icons/bs';
//BsFillPlayCircleFill


function Banner() {
    const navigate= useNavigate();

   const handleClick = () => {
    navigate("/register");
   }

   const handleClick2 = () =>{
    navigate("/program")
   }


  return (
   <Container>
   <Rightbox>
    <H1>BUILD PERFECT BODY<br/>
    SHAPE FOR GOOD AND<br/>
    HEALTHY LIFE
    </H1>
    <button className='btn btn-danger' onClick={handleClick} >Join with us</button>
    <BsFillPlayCircleFill size={50} color="red" onClick={handleClick2} />
   </Rightbox>
   </Container>
  )
}

const Container = styled.div`
width:100%;
height:100vh;
background-image:url(${bg});
bacground-attachment:fixed;
background-repeat:no-repeat;
background-size:cover;
display:flex;
justify-content:end;
align-item:center;

`;

const Rightbox = styled.div`
margin-right:10%;
margin-top:12%;
`;

const H1 = styled.p`
color:white;
margin-right:20%;
font-size:220%;
font-weight:500;
`;

export default Banner