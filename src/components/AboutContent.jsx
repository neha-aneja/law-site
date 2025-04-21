'use client';
import styled from 'styled-components';

const Container = styled.main`
  padding: 3rem;
`;

const Heading = styled.h1`
  color: #001f3f;
  font-size: 2.3rem;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
`;

export default function AboutContent() {
  return (
    <Container>
      <Heading>About Law & Justice</Heading>
      <Paragraph>
        With over 20 years of combined legal experience, our attorneys are
        dedicated to providing effective solutions that serve your best
        interest.
      </Paragraph>
      <Paragraph>
        Our mission is to simplify the legal process with clarity, empathy, and
        strategic representation. We serve individuals and businesses alike.
      </Paragraph>
    </Container>
  );
}
