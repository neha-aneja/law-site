'use client';

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 0 20px;
`;

const FooterNav = styled.div`
  width: 100%;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 20px 10px;
    /* background-color: #f5f5f5; */
    border-radius: 8px;
    margin-bottom: 20px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px 15px;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 0;

  @media (max-width: 768px) {
    margin: 0;
    border: none;
    width: auto;
  }
`;

const NavLink = styled.a`
  color: #ba0a02;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: #990902;
  }

  @media (max-width: 768px) {
    display: inline-block;
    padding: 8px 12px;
    font-size: 14px;
    background-color: white;
    border-radius: 16px;
    /* border: 1px solid #e0e0e0; */

    &:hover {
      background-color: rgba(186, 10, 2, 0.05);
    }
  }
`;
const Copyright = styled.div`
  text-align: center;
  padding: 25px 0;
  font-size: 15px;
  color: #555;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <NavLinks>
          <NavItem>
            <NavLink href='#'>About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Service Areas</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href='#'>Contact Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Terms of Use</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Privacy Policy</NavLink>
          </NavItem>
        </NavLinks>
      </FooterNav>

      <Copyright>
        Copyright © 2025 KR LAW GROUP - All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};
export default Footer;
