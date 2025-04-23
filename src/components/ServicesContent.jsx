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
      <Heading>Top Legal Services by the Best Law Firm in Delhi</Heading>

      <Section>
        <TextContent>
          <Subheading>Personal Injury Law</Subheading>
          <Paragraph>
            If you’re searching for a{' '}
            <strong>personal injury lawyer near me</strong>, our team is here to
            help. Whether it's a car crash, workplace accident, or a medical
            negligence case, our experienced <strong>injury lawyers</strong>{' '}
            fight for your rightful compensation.
          </Paragraph>
          <Paragraph>
            As a recognized <strong>personal injury attorney</strong> team in
            Delhi, we take on cases with integrity and deep commitment—handling
            every detail from documentation to courtroom representation.
          </Paragraph>
        </TextContent>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-injury-image.jpg'
            alt='Personal Injury Lawyer in Delhi'
            width={600}
            height={400}
            priority
          />
        </ImageWrapper>
      </Section>

      <Section reverse>
        <TextContent>
          <Subheading>Family Law & Divorce</Subheading>
          <Paragraph>
            Family disputes can be emotionally challenging. Whether you're
            looking for <strong>divorce lawyers near me</strong>,{' '}
            <strong>child custody lawyers</strong>, or a{' '}
            <strong>family law attorney</strong>, our firm delivers clarity and
            compassion.
          </Paragraph>
          <Paragraph>
            We guide you through legal complexities—be it divorce, adoption, or
            guardianship. Our lawyers provide trusted{' '}
            <strong>family law</strong> support and help restructure your family
            future with confidence.
          </Paragraph>
        </TextContent>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-family-image.jpg'
            alt='Family Law and Divorce Attorneys in Delhi'
            width={600}
            height={400}
          />
        </ImageWrapper>
      </Section>

      <Section>
        <TextContent>
          <Subheading>Corporate & Business Law</Subheading>
          <Paragraph>
            Our experienced <strong>corporate & business law</strong> team
            supports startups, SMEs, and enterprises. Services include contract
            management, legal compliance, IP protection, and commercial dispute
            resolution.
          </Paragraph>
          <Paragraph>
            If you're seeking a <strong>business attorney near me</strong>, we
            deliver strategic legal advice to minimize risk, protect your
            assets, and enhance long-term growth.
          </Paragraph>
        </TextContent>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-corporate-image.jpg'
            alt='Corporate and Business Law Lawyers in Delhi'
            width={600}
            height={400}
          />
        </ImageWrapper>
      </Section>

      <Section reverse>
        <TextContent>
          <Subheading>Estate Planning & Probate</Subheading>
          <Paragraph>
            Secure your legacy with professional{' '}
            <strong>estate planning</strong>. We help you draft wills, establish
            trusts, handle powers of attorney, and smoothly navigate probate
            issues.
          </Paragraph>
          <Paragraph>
            Whether you need a <strong>real estate attorney</strong> or{' '}
            <strong>tax attorney</strong>, our expert legal advice ensures peace
            of mind and protection of generational wealth.
          </Paragraph>
        </TextContent>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-estate-image.jpg'
            alt='Estate Planning Lawyers in Delhi'
            width={600}
            height={400}
          />
        </ImageWrapper>
      </Section>
    </Container>
  );
}
