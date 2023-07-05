import React, { useRef } from 'react';
import { Container, FormButton, FormContent, FormWrap, Form, FormH1, FormLabel, FormInput, FormTextArea } from './ContactElements';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y7ochdo', 'template_1rt0yh7', form.current, 'Iot7G4GECvgfRKiPm')
      .then((result) => {
          console.log(result.text);
          console.log('Message sent');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <Container>

        <FormWrap>
          <FormContent>
          
        <Form ref={form} onSubmit={sendEmail}>
        <FormH1>Contact form</FormH1>
        <FormLabel>Name</FormLabel>
        <FormInput type="text" name="user_name" />
        <FormLabel>Email</FormLabel>
        <FormInput type="email" name="user_email" />
        <FormLabel>Message</FormLabel>
        <FormTextArea name="message" required style={{ resize: 'vertical' }} />
        {/* <FormInput type="submit" value="Send" /> */}
        <FormButton type='submit'>Continue</FormButton>
        </Form>
          </FormContent>
        
        </FormWrap>

      </Container>
    </>
  )
}

export default Contact;
