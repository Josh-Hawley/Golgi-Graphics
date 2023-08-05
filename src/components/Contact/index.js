import React, { useRef, useState } from 'react';
import { Container, FormButton, FormContent, FormWrap, Form, Header, FormLabel, FormInput, FormTextArea, FormError, Column1, Column2, Paragraph, FlexWrap, OrderedList, ListItem, EmailLink, UnorderedList } from './ContactElements';
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

            <FlexWrap>
              <Column1>
              
              <Container>
                    <FormWrap>
                      <FormContent>
                      
                        <Form >
                          
                        <Header>How it works</Header>
                  
                  
                        <Paragraph>
                        If it involves science and graphics, we will be happy to recieve your enquiry! Here's an overview of the process:
                      </Paragraph>
                      
                      <Paragraph>
                    

                        <OrderedList>
                          
                          <ListItem>
                            <b>Initial enquiry:</b> Reach out to us with your specific requirements using the contact form on this page, or for more general enquiries you can email us directly: <EmailLink href="mailto:contact@golgi.graphics">contact@golgi.graphics</EmailLink>. 
                          </ListItem>
                          
                          <ListItem>
                            <b>Project consultation:</b> We will get in touch to discuss the project in detail and cover considerations such as:
                          <UnorderedList>
                            <ListItem><i>Target audience</i></ListItem>
                            <ListItem><i>Research details and areas of emphasis</i></ListItem>
                            <ListItem><i>Stylistic choice</i></ListItem>
                            <ListItem><i>Project timeline</i></ListItem>

                          </UnorderedList>
                          </ListItem>

                          <ListItem>
                            <b>Quotation:</b> Once a quote has been agreed, the illustrating begins!
                          </ListItem>

                          <ListItem>
                            <b>Refinement:</b> The first draft will be sent across, and any refinements you wish to make are included with the initial quotation.
                          </ListItem>
                          
                          <ListItem>
                            <b>Final design:</b> We will provide you with copies of the final design in any required formats. 
                          </ListItem>

                        </OrderedList>
                          
                      
                      </Paragraph>

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
                
    </>
  )
}

export default Contact;