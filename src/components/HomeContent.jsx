'use client';
import styled from 'styled-components';

const Container = styled.main`
  padding: 3rem;
`;

const Heading = styled.h1`
  color: #001f3f;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
`;

export default function HomeContent() {
  return (
    <Container>
      <Heading>Law & Justice Legal Firm</Heading>
      <Paragraph>
        Welcome to Law & Justice, where Delhi residents find trusted legal
        allies. We handle everything from personal injury cases to complex
        corporate law.
      </Paragraph>
      <Paragraph>
        Our legacy is built on justice, transparency, and legal excellence—your
        rights, our priority.
      </Paragraph>
    </Container>
  );
}
