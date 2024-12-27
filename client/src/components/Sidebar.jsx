import React from 'react';
import styled from 'styled-components';
import HomeRounded from '@mui/icons-material/HomeRounded';
import CloseRounded from '@mui/icons-material/CloseRounded';

const MenuContainer = styled.div`
    flex: 0.5;
    flex-direction: column;
    height: 100vh;
    display: flex;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.div`
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: bold;
    font-size: 20px;
    margin: 20px 0;
`;

const Close = styled.div`
    display: flex;
    @media (max-width: 1100px) {
        display: block;
    }
`;

const Elements = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const NavText = styled.div`
    font-size: 16px;
`;

const Sidebar = () => {
    return (
        <MenuContainer>
            <Logo>Podstream</Logo>
            <Close>
                <CloseRounded />
            </Close>
            <Elements>
                <HomeRounded />
                <NavText>Dashboard</NavText>
            </Elements>
        </MenuContainer>
    );
};

export default Sidebar;