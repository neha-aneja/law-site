'use client';
import styled from 'styled-components';

const Container = styled.main`
  padding: 3rem;
`;

const Heading = styled.h1`
  color: #001f3f;
  font-size: 2.3rem;
`;

const Info = styled.p`
  margin: 0.8rem 0;
`;

export default function ContactContent() {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Info>📍 123 xyz New Delhi, India</Info>
      <Info>📞 9876543210</Info>
      <Info>📧 contact@lawjusticefirm.com</Info>
      <Info>
        We respond within 24 hours. Legal consultations by appointment only.
      </Info>
    </Container>
  );
}
