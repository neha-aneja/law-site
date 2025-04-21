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
  gap: 2.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
  text-align: center;
`;

const Subheading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: 1.5rem;
  line-height: 1.7;
  text-align: justify;
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 300px;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
`;

export default function ServicesContent() {
  return (
    <Container>
      <Heading>Our Legal Services</Heading>

      <Section>
        <TextContent>
          <Subheading>Personal Injury</Subheading>
          <Paragraph>
            Accidents can change lives in seconds. Whether you've been injured
            in a vehicle collision, slip and fall, or workplace incident, our
            team ensures you get the compensation you deserve.
          </Paragraph>
          <Paragraph>
            We handle all aspects—from gathering evidence to negotiating with
            insurance companies—so you can focus on recovery while we fight for
            your justice.
          </Paragraph>
        </TextContent>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-injury-image.jpg'
            alt='Injury law services'
            width={600}
            height={400}
            priority
          />
        </ImageWrapper>
      </Section>

      <Section reverse>
        <TextContent>
          <Subheading>Family Law</Subheading>
          <Paragraph>
            Navigating sensitive family matters like divorce, child custody, or
            adoption requires legal expertise and compassion. We prioritize
            emotional well-being while advocating for your rights.
          </Paragraph>
          <Paragraph>
            Whether you're restructuring a family dynamic or starting a new
            chapter, we provide clear legal guidance every step of the way.
          </Paragraph>
        </TextContent>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-family-image.jpg'
            alt='Family legal support'
            width={600}
            height={400}
          />
        </ImageWrapper>
      </Section>

      <Section>
        <TextContent>
          <Subheading>Corporate & Business Law</Subheading>
          <Paragraph>
            From startups to seasoned enterprises, our corporate law services
            include contract drafting, dispute resolution, IP protection, and
            regulatory compliance.
          </Paragraph>
          <Paragraph>
            Our legal strategies help businesses grow securely while minimizing
            risk and protecting long-term value.
          </Paragraph>
        </TextContent>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-corporate-image.jpg'
            alt='Corporate law advice'
            width={600}
            height={400}
          />
        </ImageWrapper>
      </Section>

      <Section reverse>
        <TextContent>
          <Subheading>Estate Planning</Subheading>
          <Paragraph>
            Secure your family’s future with customized estate planning services
            including wills, trusts, powers of attorney, and probate navigation.
          </Paragraph>
          <Paragraph>
            We ensure your legacy is protected and your wishes are clearly
            documented—offering peace of mind for you and your loved ones.
          </Paragraph>
        </TextContent>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-estate-image.jpg'
            alt='Estate planning services'
            width={600}
            height={400}
          />
        </ImageWrapper>
      </Section>
    </Container>
  );
}
