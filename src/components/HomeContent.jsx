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
        <Heading>Best Legal Firm in Delhi – Law & Justice</Heading>
        <Paragraph>
          Searching for the <strong>best lawyer in Delhi</strong>? At Law &
          Justice, we provide expert legal representation in all areas including{' '}
          <strong>family law</strong>, <strong>criminal justice</strong>, and{' '}
          <strong>personal injury law</strong>. Our firm is known for delivering
          clear, strategic, and results-driven legal support.
        </Paragraph>
        <Paragraph>
          As a trusted name among <strong>lawyers near me</strong>, we take
          pride in being your go-to <strong>legal firm in Delhi</strong> for
          professional, reliable, and compassionate legal services. From{' '}
          <strong>divorce attorneys</strong> to <strong>estate planning</strong>{' '}
          specialists, our lawyers cover every critical area of law.
        </Paragraph>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-banner-image.jpg'
            alt='Professional law firm office in Delhi'
            width={1200}
            height={500}
            priority
          />
        </ImageWrapper>
      </Section>

      <Section>
        <Subheading>Comprehensive Legal Services</Subheading>
        <Paragraph>
          We offer a wide array of legal services for individuals and
          businesses:
        </Paragraph>
        <List>
          <ListItem>
            <strong>Personal injury lawyer near me</strong> for accident claims
            and injury settlements
          </ListItem>
          <ListItem>
            <strong>Divorce lawyers near me</strong> and{' '}
            <strong>child custody lawyers</strong> for family law matters
          </ListItem>
          <ListItem>
            <strong>Corporate & business law</strong> experts for legal
            compliance and dispute resolution
          </ListItem>
          <ListItem>
            <strong>Real estate lawyers</strong> and{' '}
            <strong>property attorneys</strong> for conflict resolution
          </ListItem>
          <ListItem>
            <strong>Immigration lawyers near me</strong> and{' '}
            <strong>civil attorneys</strong> for legal consultation and case
            representation
          </ListItem>
        </List>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-service-image.jpg'
            alt='Legal services including family, corporate, and injury law'
            width={1200}
            height={500}
          />
        </ImageWrapper>
      </Section>

      <Section>
        <Subheading>Why We're the Best Lawyers in Delhi</Subheading>
        <Paragraph>
          As one of the <strong>top-rated legal firms in Delhi</strong>, our
          team of highly experienced <strong>criminal defense attorneys</strong>
          , <strong>employment lawyers</strong>, and{' '}
          <strong>family law attorneys</strong> provide unmatched legal
          guidance. Here’s why clients trust us:
        </Paragraph>
        <List>
          <ListItem>
            Client-first approach with transparent legal advice
          </ListItem>
          <ListItem>
            Strong success record in <strong>civil and criminal law</strong>
          </ListItem>
          <ListItem>
            Dedicated <strong>personal injury attorneys</strong> and{' '}
            <strong>car accident lawyers near me</strong>
          </ListItem>
          <ListItem>
            Affordable services from experienced{' '}
            <strong>divorce and tax attorneys</strong>
          </ListItem>
          <ListItem>Tailored strategies and seamless case handling</ListItem>
        </List>
      </Section>

      <Section>
        <Subheading>Client Testimonials</Subheading>
        <TestimonialBox>
          “As someone looking for{' '}
          <strong>personal injury lawyers near me</strong>, I couldn’t have
          asked for better support. Law & Justice exceeded my expectations.” –{' '}
          <em>S. Arora</em>
        </TestimonialBox>
        <TestimonialBox>
          “If you're looking for the{' '}
          <strong>best divorce attorney near me</strong>, Law & Justice is the
          firm to trust. Professional and efficient.” – <em>M. Sharma</em>
        </TestimonialBox>
      </Section>
    </Container>
  );
}
