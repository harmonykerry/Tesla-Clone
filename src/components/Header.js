import React, {useState}from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);


  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#"> Model S</a>
        <a href="#"> Model 3</a>
        <a href="#"> Model X</a>
        <a href="#"> Model Y</a>
        <a href="#"> Powerwall</a>
        <a href="#"> Charging</a>
       </Menu>
      <RightMenu>
        <a href="#"> Support</a>
        <a href="#"> Shop</a>
        <a href="#"> Account</a>
      </RightMenu>
      <CustomMenu onClick={()=>setBurgerStatus(true)} />
      <BurgerNav show = {burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick ={() => setBurgerStatus (false)}/>
        </CloseWrapper>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">CyberTruck</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Energy</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Find Us</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Supports</a></li>
      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height : 60px;
  
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;


`

const Menu = styled.div`
  display: flex;
  align-items : center;
  justify-content: center;
  flex: 1;
  font-size: 14px;
  

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
    &:hover{background-color:#b7bac0;  padding:5px}
  }

  @media(max-width: 768px){
    display: none;
  }
`

const RightMenu = styled.div`

  display: flex;
  align-items: center;
  font-size: 14px;
 


  a{
   font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    &:hover{background-color:#b7bac0; padding:5px}
   
}

@media(max-width: 768px){
  display: none;
}

`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;

`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'} !important;
  transition: transform 0.2s;
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba( 0, 0, 0, .2);
    &:hover{background-color:#b7bac0}

    a{
      font-weight: 600;
    }
   

  }
 

`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  &:hover{background-color:#b7bac0}

`

const CloseWrapper = styled.div `
  display: flex;
  justify-content: flex-end;



`