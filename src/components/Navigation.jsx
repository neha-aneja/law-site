// src/components/Navigation.jsx
'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #001f3f;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: #ffc107;
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <StyledLink href='/'>Home</StyledLink>
      <StyledLink href='/about'>About</StyledLink>
      <StyledLink href='/services'>Services</StyledLink>
      <StyledLink href='/contact'>Contact</StyledLink>
    </Nav>
  );
}

// 'use client';
// import Link from 'next/link';
// import styled from 'styled-components';

// const Nav = styled.nav`
//   background: #001f3f;
//   padding: 1rem;
//   display: flex;
//   justify-content: center;
//   gap: 2rem;
// `;

// const StyledLink = styled(Link)`
//   color: #fff;
//   text-decoration: none;
//   font-weight: 600;
//   &:hover {
//     color: #ffc107;
//   }
// `;

// export default function Navigation() {
//   return (
//     <Nav>
//       <StyledLink href='/'>Home</StyledLink>
//       <StyledLink href='/about'>About</StyledLink>
//       <StyledLink href='/services'>Services</StyledLink>
//       <StyledLink href='/contact'>Contact</StyledLink>
//     </Nav>
//   );
// }
