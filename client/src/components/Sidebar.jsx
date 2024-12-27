import React from 'react'
import styled from 'styled-components'
import HomeRounded from '@mui/icons-material/HomeRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';


const MenuContianer = styled.div`
flex: ;
const Logo = styled.div``;
const Close = styled.div``;
const Elements = styled.div``;
const NavText = styled.div``;

const Sidebar = () => {
  return (
  <MenuContianer>
    <Logo>Podstream</Logo>
    <Close>
        <CloseRounded />
    </Close>
    <Elements>
        <HomeRounded />
        <NavText>Dashboard</NavText>
    </Elements>

    </MenuContianer>
  )
}

export default Sidebar