'use client';
import styled from 'styled-components';

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

const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const TopSection = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Info = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MapWrapper = styled.div`
  flex: 1;
  min-width: 300px;

  iframe {
    width: 100%;
    height: 300px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    iframe {
      height: 250px;
    }
  }
`;

const FormWrapper = styled.div`
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  max-width: 1100px;
  width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.8rem 1.2rem;
  }
`;

const Subheading = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  padding: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.75rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.75rem;
  }
`;

const Button = styled.button`
  background-color: #001f3f;
  color: white;
  padding: 1rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003366;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 1rem;
  }
`;

export default function ContactContent() {
  return (
    <Container>
      <Heading>Contact Us</Heading>

      <TopSection>
        <ContactDetails>
          <Info>📍 123 XYZ Street, New Delhi, India</Info>
          <Info>📞 +91 9876543210</Info>
          <Info>📧 contact@lawjusticefirm.com</Info>
          <Info>
            We typically respond within 24 hours. Please schedule an appointment
            before visiting.
          </Info>
        </ContactDetails>

        <MapWrapper>
          <iframe
            title='Office Location'
            src='https://www.google.com/maps?q=123+XYZ+New+Delhi,+India&output=embed'
            loading='lazy'
          ></iframe>
        </MapWrapper>
      </TopSection>

      <FormWrapper>
        <Subheading>Send Us a Message</Subheading>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <Label htmlFor='name'>Full Name</Label>
            <Input
              type='text'
              id='name'
              placeholder='Enter your name'
              required
            />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              type='email'
              id='email'
              placeholder='Enter your email'
              required
            />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor='subject'>Subject</Label>
            <Input
              type='text'
              id='subject'
              placeholder='Reason for contacting'
            />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor='message'>Message</Label>
            <TextArea
              id='message'
              placeholder='Type your message here...'
              required
            />
          </FieldGroup>
          <Button type='submit'>Submit</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}
