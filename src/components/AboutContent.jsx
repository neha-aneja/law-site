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
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.h2`
  font-size: 3rem;
  margin: 2rem 0 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.7;
  margin-top: 1rem;
`;

const ImageWrapper = styled.div`
  margin-top: 1.5rem;
  max-width: 900px;
`;

export default function AboutContent() {
  return (
    <Container>
      <Section>
        <Heading>About Law & Justice</Heading>
        <Paragraph>
          Law & Justice is a Delhi-based legal firm committed to delivering
          outstanding legal counsel with integrity, expertise, and client focus.
          Our attorneys bring over two decades of combined legal knowledge
          across a wide range of disciplines, ensuring that every case is
          handled with strategy and care.
        </Paragraph>
        <Paragraph>
          We aim to simplify complex legal procedures while advocating strongly
          for your rights. Whether it's a business negotiation or a personal
          legal issue, our goal is to make legal support more approachable and
          effective.
        </Paragraph>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-people-image.jpg'
            alt='Our experienced legal team'
            width={900}
            height={350}
            style={{ borderRadius: '12px' }}
          />
        </ImageWrapper>
      </Section>

      <Section>
        <Subheading>Our Vision</Subheading>
        <Paragraph>
          We envision a legal ecosystem that empowers individuals, protects
          rights, and upholds the rule of law without prejudice or complexity.
          At Law & Justice, our long-term goal is to redefine how people
          interact with the legal system—by making it more transparent,
          approachable, and rooted in trust.
        </Paragraph>
        <Paragraph>
          Our vision goes beyond winning cases. We aim to be legal partners in
          every chapter of your life—whether you're launching a business, buying
          a home, facing personal challenges, or resolving disputes. We want
          every client to feel informed, secure, and confident when seeking
          legal advice.
        </Paragraph>
        <Paragraph>
          As technology reshapes the legal world, we are committed to adopting
          innovative tools and digital-first solutions that improve access to
          justice. Our vision includes embracing AI-driven research, secure
          online consultations, and client-centric communication—all while
          staying grounded in ethical practice.
        </Paragraph>
        <Paragraph>
          Ultimately, we dream of a society where legal protection is not a
          privilege but a given. A society where everyone, regardless of
          background or income, can stand up for their rights—and be heard.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>Our Core Values</Subheading>
        <Paragraph>
          <strong>Client-Centric Service:</strong> Your goals and needs shape
          our legal strategies.
        </Paragraph>
        <Paragraph>
          <strong>Ethical Integrity:</strong> We uphold the highest standards of
          professionalism and honesty.
        </Paragraph>
        <Paragraph>
          <strong>Strategic Advocacy:</strong> Every case is backed by deep
          research and tactical representation.
        </Paragraph>
        <Paragraph>
          <strong>Accessible Expertise:</strong> We believe legal help should be
          within reach for everyone.
        </Paragraph>
      </Section>

      <Section>
        <Subheading>Building Trust Through Community</Subheading>
        <Paragraph>
          Beyond the courtroom, we believe in contributing to the legal literacy
          and empowerment of our community. Through pro bono initiatives, legal
          aid workshops, and educational events, we strive to make legal
          knowledge accessible to all.
        </Paragraph>
        <Paragraph>
          Trust isn't just earned through verdicts—it's built through
          compassion, service, and continuous support. Law & Justice stands as a
          pillar for those seeking not just legal victories, but peace of mind.
        </Paragraph>
        <ImageWrapper>
          <Image
            src='/law-site-images/law-site-legal-image.jpg'
            alt='Legal education and community outreach'
            width={900}
            height={350}
            style={{ borderRadius: '12px' }}
          />
        </ImageWrapper>
      </Section>
    </Container>
  );
}
