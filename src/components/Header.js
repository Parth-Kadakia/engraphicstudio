import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #000000;
  color: #f9f9f9;
  padding: 20px;
  text-align: center;
`;

const Logo = styled.img`
  max-width: 200px;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo src="/path-to-logo.png" alt="Engraphic Studio Logo" />
        </HeaderWrapper>
    );
};

export default Header;
