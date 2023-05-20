import React from 'react'
import styled from "styled-components";

function Footer() {
  return (

    <Container>
      <a href="#">Tesla © 2021</a>
      <a href="#">Privacy & Legal</a>
      <a href="#">Contact</a>
      <a href="#">Careers</a>
      <a href="#">News</a>
      <a href="#">Engage</a>
      <a href="#">Locations</a>
    </Container>
  )
}

export default Footer




const Container = styled.div`
  min-height : 60px;
 position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 20px;
  bottom: -3600px;
  left: 0;
  right: 0;
  width: 60%;
  margin: 2rem auto;
 

  a{
    font-weight: 400;
    font-size: 12px;

  }
  

`