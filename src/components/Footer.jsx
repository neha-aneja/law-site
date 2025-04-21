'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 40px 20px 20px;
  font-family: 'Spartan', sans-serif;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 25px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 12px 18px;
  }
`;

const NavItem = styled.li``;

const StyledLink = styled(Link)`
  color: #ba0a02;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4136;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 20px;
    background-color: #fff;
    color: #ba0a02;

    &:hover {
      background-color: rgba(186, 10, 2, 0.1);
    }
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  margin: 0 auto 20px;
  width: 80%;
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 14px;
  color: #aaa;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 10px 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <NavLinks>
          <NavItem>
            <StyledLink href='/about'>About Us</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href='/services'>Service Areas</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href='/contact'>Contact Us</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href='#'>Terms of Use</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink href='#'>Privacy Policy</StyledLink>
          </NavItem>
        </NavLinks>
      </FooterNav>

      <Divider />

      <Copyright>© 2025 KR LAW GROUP – All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
