'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderContainer = styled.header`
  background-color: #000000;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  font-family: 'Spartan', sans-serif;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    height: auto;
    padding: 15px 20px;
  }
`;

const LogoWrapper = styled.div`
  @media (max-width: 1024px) {
    order: 1;
  }
`;

const LogoImg = styled.img`
  max-height: 70px;
  width: auto;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  margin-left: auto;
  margin-right: 20px;

  @media (max-width: 1024px) {
    flex-basis: 100%;
    justify-content: center;
    margin-top: 15px;
    margin-left: 0;
    margin-right: 0;
    gap: 20px;
    flex-wrap: wrap;
    order: 3;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #ba0a02;
  }
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #ba0a02;
  }
`;

const NavItem = styled.div`
  position: relative;
  &:hover > ${StyledLink}, &:hover > ${NavLink} {
    color: #ba0a02;
  }
  &:hover > div {
    display: block;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    order: 1;
    margin-left: auto;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link href='/'>
          <LogoImg
            src='/law-site-images/law-site-logo.jpg'
            alt='Law Site Logo'
          />
        </Link>
      </LogoWrapper>

      <Navigation $isOpen={menuOpen}>
        <NavItem>
          <StyledLink href='/'>HOME</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink href='/about'>ABOUT US</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink href='/services'>SERVICES</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink href='/contact'>CONTACT US</StyledLink>
        </NavItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
