import React, { useRef } from 'react';
import { Container, FormButton, FormContent, FormWrap, Form, FormH1, FormLabel, FormInput, FormTextArea, FormError } from './ContactElements';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Contact = () => {

  
  const {
    register, 
    formState: {errors}, 
    handleSubmit
  } = useForm({
    mode: 'all'
  });

  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_mgxdptf', 'template_vlccxzg', form.current, 'qjKwffjGt4kNQRGUl')
  //     .then((result) => {
  //         console.log(result.text);
  //         console.log('Message sent');
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };
  const sendEmail = (formData) => {
    
  
    emailjs.sendForm('service_mgxdptf', 'template_vlccxzg', form.current, 'qjKwffjGt4kNQRGUl')
      .then((result) => {
          console.log(result.text);
          // console.log(form.current);
      }, (error) => {
          console.log(error.text);
      });
  };

  
  // console.log("errors",errors)

  // const handleSubmit

  return (
    <>
      <Container>

        <FormWrap>
          <FormContent>
          
        <Form ref={form}  onSubmit={handleSubmit(sendEmail)}>
        {/* <Form ref={form}  onSubmit={handleSubmit((data) => console.log(data))}> */}
        <FormH1>Contact form</FormH1>
        
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

        <FormButton type='submit'>Submit</FormButton>
        </Form>
          </FormContent>
        
        </FormWrap>

      </Container>
    </>
  )
}

export default Contact;















// import React, { useRef } from 'react';
// import { Container, FormButton, FormContent, FormWrap, Form, FormH1, FormLabel, FormInput, FormTextArea } from './ContactElements';
// import emailjs from '@emailjs/browser';
// import { useForm } from 'react-hook-form';

// const Contact = () => {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_mgxdptf', 'template_vlccxzg', form.current, 'qjKwffjGt4kNQRGUl')
//       .then((result) => {
//           console.log(result.text);
//           console.log('Message sent');
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   const {register, handleSubmit} = useForm();

//   // const handleSubmit

//   return (
//     <>
//       <Container>

//         <FormWrap>
//           <FormContent>
          
//         <Form ref={form}  onSubmit={handleSubmit((data) => console.log(data))}>
//         <FormH1>Contact form</FormH1>
//         <FormLabel>Name</FormLabel>
//         <FormInput {...register("userName")} type="text" name="user_name" />
//         <FormLabel>Email</FormLabel>
//         <FormInput {...register("email")} type="email" name="user_email" />
//         <FormLabel>Message</FormLabel>
//         <FormTextArea {...register("message")} name="message" required style={{ resize: 'vertical' }} />
//         {/* <FormInput type="submit" value="Send" /> */}
//         <FormButton type='submit'>Submit</FormButton>
//         </Form>
//           </FormContent>
        
//         </FormWrap>

//       </Container>
//     </>
//   )
// }

// export default Contact;