'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const HeaderContainer = styled.header`
  background-color: #000;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  position: relative;
  font-family: 'Spartan', sans-serif;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 20px;
  }
`;

const LogoWrapper = styled.div`
  z-index: 999;
`;

const LogoImg = styled.img`
  max-height: 70px;
  width: auto;
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  z-index: 999;

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  margin-left: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    background: #000;
    position: absolute;
    top: 100%;
    left: 0;
    transition: max-height 0.3s ease-in-out;
    max-height: ${(props) => (props.$isOpen ? '300px' : '0')};
    overflow: hidden;
    z-index: 998;
    padding: ${(props) => (props.$isOpen ? '15px 0' : '0')};
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
  padding: 10px 0;

  &:hover {
    color: #ba0a02;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const NavItem = styled.div`
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Close menu on route change
  }, [pathname]);

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link
          href='/'
          title='Best Legal Firm in Delhi - Justice & Law Services'
        >
          <LogoImg
            src='/law-site-images/law-site-logo.jpg'
            alt='Best Lawyer in Delhi - Justice Legal Logo'
          />
        </Link>
      </LogoWrapper>

      <MenuToggle onClick={toggleMenu} aria-label='Toggle menu'>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuToggle>

      <Navigation ref={navRef} $isOpen={menuOpen}>
        <NavItem>
          <StyledLink
            href='/'
            title='Top Law Firm in Delhi – Legal Advice & Attorneys'
          >
            Home
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            href='/about'
            title='About Our Justice Team - Best Lawyers in Delhi'
          >
            About Us
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            href='/services'
            title='Legal Services: Personal Injury Lawyer, Family Law, Estate Planning, Corporate Law'
          >
            Legal Services
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink
            href='/contact'
            title='Contact the Best Lawyer in Delhi – Get Legal Advice Today'
          >
            Contact a Lawyer
          </StyledLink>
        </NavItem>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
