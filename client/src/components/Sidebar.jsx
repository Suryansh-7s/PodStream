import React from 'react'
import styled from 'styled-components'


const MenuContianer = styled.div``;
const Logo = styled.div``;
const Close = styled.div``;
const CloseRounded = styled.div``;
const Elements = styled.div``;
const HomeRounded = styled.div``;
const NavText = styled.div``;

const Sidebar = () => {
  return (
  <MenuContianer>
    <Logo></Logo>
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