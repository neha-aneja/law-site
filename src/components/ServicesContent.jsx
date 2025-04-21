'use client';
import styled from 'styled-components';

const Container = styled.main`
  padding: 3rem;
`;

const Heading = styled.h1`
  color: #001f3f;
  font-size: 2.3rem;
`;

const List = styled.ul`
  padding-left: 1.5rem;
  margin-top: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

export default function ServicesContent() {
  return (
    <Container>
      <Heading>Our Legal Services</Heading>
      <List>
        <ListItem>
          <strong>Personal Injury:</strong> Legal aid for car accidents, slips,
          and more—get the compensation you deserve.
        </ListItem>
        <ListItem>
          <strong>Family Law:</strong> Assistance with custody, divorce, and
          adoption cases handled with sensitivity and care.
        </ListItem>
        <ListItem>
          <strong>Corporate Law:</strong> Contracts, disputes, and business
          formation for startups and enterprises.
        </ListItem>
        <ListItem>
          <strong>Estate Planning:</strong> Plan for the future with wills,
          trusts, and probate services.
        </ListItem>
      </List>
    </Container>
  );
}
