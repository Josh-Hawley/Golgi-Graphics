import React, { useRef, useState } from 'react';
import { Container, FormButton, FormContent, FormWrap, Form, Header, FormLabel, FormInput, FormTextArea, FormError, Column1, Column2, Paragraph, FlexWrap } from './ContactElements';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
// import { motion } from 'framer-motion';

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const resetForm = () => {
    form.current.reset();
  };

  const {
    register, 
    formState: {errors}, 
    handleSubmit
  } = useForm({
    mode: 'all'
  });

  const form = useRef();

  const sendEmail = (formData) => {
    setLoading(true);
    emailjs.sendForm('service_mgxdptf', 'template_vlccxzg', form.current, 'qjKwffjGt4kNQRGUl')
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          alert("Email sent successfully!");
          resetForm();
          
      }, (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Unsuccessful submission of email, please send a direct email to contact@golgi.graphics");
          
        });
      
  };

  return (
    <>

      {/* <ContactContainer>
        <ContactWrapper>
            <ContactRow>  */}
            <FlexWrap>
              <Column1>
              
              <Container>
                    <FormWrap>
                      <FormContent>
                      
                        <Form >
                          
                        <Header>How it works</Header>
                  <Paragraph>Enquire, hshkdh sue enskl d dfisha kskjd dfhiffvnvhdhsirb rhrowuanxcnvk d ssodj </Paragraph>

                        </Form>

                      </FormContent>
                    </FormWrap>
                  </Container>
              

                  </Column1>
              
                <Column2>
                  <Container>
                    <FormWrap>
                      <FormContent>
                      
                        <Form ref={form}  onSubmit={handleSubmit(sendEmail)}>
                          
                          <Header>Contact form</Header>
                          
                          <FormLabel>Name</FormLabel>
                          <FormInput
                          name="user_name"
                          placeholder='Name' 
                          {...register("user_name", {
                          required: "Name is required"
                          })} />
                          <FormError>{errors.user_name?.message}</FormError>
                          
                          <FormLabel>Email</FormLabel>
                          <FormInput 
                          placeholder='Email'
                          {...register("user_email", 
                          {required: "Email is required", 
                          pattern:{
                          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Email must be valid"
                          }})} />
                          <FormError>{errors.user_email?.message}</FormError>

                          <FormLabel>Message</FormLabel>
                          <FormTextArea 
                          name="message"
                          required style={{ resize: 'vertical' }}
                          placeholder='Details about your graphic design enquiry.'
                          rows="8"
                          {...register("message", {
                          required: "Message is required"
                          })} />
                          <FormError>{errors.message?.message}</FormError>

                        
                          <FormButton type='submit' loading={loading ? 1 : 0}>
                            {loading ? 'Sending...' : 'Submit'}
                          </FormButton>

                        </Form>

                      </FormContent>
                    </FormWrap>
                  </Container>
                </Column2>
            </FlexWrap>
                
                
           
            {/* </ContactRow>
        </ContactWrapper>
      </ContactContainer> */}



    </>
  )
}

export default Contact;