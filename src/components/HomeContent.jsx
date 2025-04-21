'use client';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.main`
  padding: 3rem 2rem;
  background-color: #f8f9fa;
  color: #001f3f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  text-align: center;
`;

const Subheading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin: 2rem 0 1rem;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.7;
  text-align: justify;
  margin-bottom: 1rem;
`;

const ImageWrapper = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    max-width: 1200px;
  }
`;

const List = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: 0.5rem;
`;

const TestimonialBox = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-left: 5px solid #001f3f;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-size: clamp(1rem, 2vw, 1.3rem);
`;

export default function HomeContent() {
  return (
    <Container>
      <Section>
        <Heading>Law & Justice Legal Firm</Heading>
        <Paragraph>
          Welcome to Law & Justice — a trusted legal partner for individuals and
          businesses across Delhi. Whether you're facing a legal challenge or
          need expert counsel, our experienced team is here to help.
        </Paragraph>
        <Paragraph>
          We pride ourselves on delivering strategic legal solutions with
          clarity, confidence, and a commitment to justice. Our firm is built on
          values of integrity, expertise, and client satisfaction.
        </Paragraph>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-banner-image.jpg'
            alt='Professional law firm office'
            width={1200}
            height={500}
            priority
          />
        </ImageWrapper>
      </Section>

      <Section>
        <Subheading>Our Legal Services</Subheading>
        <Paragraph>
          We specialize in a broad spectrum of legal areas to support both
          individuals and organizations:
        </Paragraph>
        <List>
          <ListItem>Criminal Law & Defense Representation</ListItem>
          <ListItem>Divorce, Custody & Family Disputes</ListItem>
          <ListItem>Business & Corporate Legal Support</ListItem>
          <ListItem>Real Estate & Property Conflict Resolution</ListItem>
          <ListItem>Compensation & Injury Claims</ListItem>
        </List>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-service-image.jpg'
            alt='Law firm services'
            width={1200}
            height={500}
          />
        </ImageWrapper>
      </Section>

      <Section>
        <Subheading>Why Choose Law & Justice?</Subheading>
        <Paragraph>
          Choosing the right legal team makes all the difference. Here’s what
          sets us apart:
        </Paragraph>
        <List>
          <ListItem>
            Client-focused approach with transparent communication
          </ListItem>
          <ListItem>Proven track record of favorable outcomes</ListItem>
          <ListItem>Experienced advocates and legal advisors</ListItem>
          <ListItem>Customized strategies tailored to each case</ListItem>
          <ListItem>Reasonable fees with flexible payment options</ListItem>
        </List>
      </Section>

      <Section>
        <Subheading>What Our Clients Say</Subheading>
        <TestimonialBox>
          “The team at Law & Justice handled my case with dedication and
          attention to detail. Their support made all the difference.” –{' '}
          <em>S. Arora</em>
        </TestimonialBox>
        <TestimonialBox>
          “Thanks to their expertise, I was able to resolve a longstanding
          property issue quickly. Highly professional.” – <em>M. Sharma</em>
        </TestimonialBox>
      </Section>
    </Container>
  );
}
