'use client';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.main`
  padding: 3rem;
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
  margin-bottom: 2.5rem;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
  }
`;

const Subheading = styled.h2`
  font-size: 3rem;
  margin: 2rem 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.7;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
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

export default function AboutContent() {
  return (
    <Container>
      <Section>
        <Heading>About Law & Justice – Best Legal Firm in Delhi</Heading>
        <Paragraph>
          At <strong>Law & Justice</strong>, we are proud to be recognized as
          the <strong>best legal firm in Delhi</strong>, offering reliable legal
          advice and representation across multiple domains. With decades of
          combined experience, our team of expert{' '}
          <strong>attorneys near you</strong> delivers justice with a personal
          touch.
        </Paragraph>
        <Paragraph>
          We handle a wide range of cases—from{' '}
          <strong>personal injury lawyer services</strong> to{' '}
          <strong>family law</strong>, <strong>estate planning</strong>, and{' '}
          <strong>corporate & business law</strong>. Whether you’re searching
          for a <strong>divorce attorney near me</strong> or a trusted{' '}
          <strong>criminal defense attorney</strong>, our lawyers are committed
          to simplifying legal procedures and protecting your rights with
          unmatched dedication.
        </Paragraph>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-people-image.jpg'
            alt='Our experienced legal team of attorneys in Delhi'
            width={1200}
            height={500}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </ImageWrapper>
      </Section>

      <Section>
        <Subheading>Our Vision for Justice</Subheading>
        <Paragraph>
          We believe that legal protection is a right, not a privilege. Our
          long-term vision is rooted in building a transparent legal ecosystem,
          where individuals seeking a <strong>family attorney near me</strong>,{' '}
          <strong>car accident lawyer near me</strong>, or a{' '}
          <strong>real estate attorney</strong> feel heard, protected, and
          represented with integrity.
        </Paragraph>
        <Paragraph>
          As Delhi’s top-rated legal service provider, we are redefining how the
          public interacts with the law. Our aim is to guide clients through
          life’s legal challenges—be it <strong>immigration law</strong>,{' '}
          <strong>civil disputes</strong>, <strong>employment law</strong>, or
          complex <strong>criminal justice</strong> matters—with empathy and
          strategic advocacy.
        </Paragraph>
        <Paragraph>
          We also embrace the future by implementing technology-driven tools
          such as virtual consultations and AI-powered legal research, enhancing
          accessibility for those searching for{' '}
          <strong>injury lawyer near me</strong> or{' '}
          <strong>legal advice</strong> online.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>Our Core Values</Subheading>
        <Paragraph>
          <strong>Client-Centric Approach:</strong> We customize strategies
          based on your needs—whether you’re a business owner or looking for a{' '}
          <strong>divorce lawyer</strong> or{' '}
          <strong>child custody lawyer</strong>.
        </Paragraph>
        <Paragraph>
          <strong>Uncompromised Integrity:</strong> Our attorneys operate with
          professionalism and honesty, trusted by clients seeking{' '}
          <strong>civil lawyer near me</strong> and{' '}
          <strong>medical lawyer</strong> support.
        </Paragraph>
        <Paragraph>
          <strong>Research-Driven Advocacy:</strong> Every case—be it tax
          disputes or criminal defense—is backed by meticulous legal research
          and preparation.
        </Paragraph>
        <Paragraph>
          <strong>Affordable Expertise:</strong> We strive to be accessible for
          all, including those searching for{' '}
          <strong>personal injury lawyer near me</strong>,{' '}
          <strong>tax attorney</strong>, or{' '}
          <strong>immigration lawyer near me</strong>.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>Building Trust Through Community</Subheading>
        <Paragraph>
          Our commitment to justice goes beyond the courtroom. We host legal
          workshops, offer pro bono aid, and create outreach programs to improve
          legal literacy—supporting those seeking{' '}
          <strong>lawyers near me</strong> for urgent legal support.
        </Paragraph>
        <Paragraph>
          Whether you need a <strong>divorce lawyers near me</strong>{' '}
          consultation or representation from a reliable{' '}
          <strong>car accident attorney near me</strong>, we are here to serve
          you with empathy, clarity, and excellence.
        </Paragraph>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-legal-image.jpg'
            alt='Legal education and outreach events hosted by Law & Justice'
            width={1200}
            height={500}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </ImageWrapper>
      </Section>
    </Container>
  );
}
