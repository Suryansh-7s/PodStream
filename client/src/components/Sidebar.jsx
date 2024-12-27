import React from 'react'
import styled from 'styled-components'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';
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