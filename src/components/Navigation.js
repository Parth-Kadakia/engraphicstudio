import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #000000;
  padding: 20px;
  text-align: center;
`;

const NavLink = styled(Link)`
  color: #f19164;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #f5c5ae;
  }
`;

const Navigation = () => {
    return (
        <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </Nav>
    );
};

export default Navigation;
