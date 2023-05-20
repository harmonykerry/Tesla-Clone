import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
       <Section
        title="Model 3"
        description=""
        backgroundImg="model-3.jpg"
        leftBtnText = "Existing Inventory"
        rightBtnText="Custom Order"
        lastDescription = "Schedule a Test Drive"

        
      />
       <Section
        title="Model Y"
        description="2% Company Car Tax. Learn More"
        backgroundImg="model-y.jpg"
        leftBtnText = "Existing Inventory"
        rightBtnText="Custom Order"
        lastDescription = "Schedule a Test Drive"
      />
     
      <Section
        title="Model S"
        description="2% Company Car Tax. Learn More"
        backgroundImg="model-s.jpg"
        leftBtnText = "Existing Inventory"
        rightBtnText="Custom Order"
        lastDescriptionWhite = "Only available as left-hand drive"
      />
     
    
      <Section
        title="Solar and Powerwall"
        description="Power Everything"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        RightBtnText="Learn more"
      />

      <Section
        title="Model X"
        description=""
        backgroundImg="model-x.jpg"
        leftBtnText = "Existing Inventory"
        rightBtnText="Custom Order"
        lastDescriptionWhite = "Only available as left-hand drive"
      />

      <Section
        title="Accessories"
        description=" "
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"

      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
