import React from 'react'
import { Container, FormButton, FormContent, FormWrap, Icon, Form, FormH1, FormLabel, FormInput, Text } from './ContactElements';

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
            <Icon to='/'><i>ink vivo</i></Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required /> 
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required /> 
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot password</Text>
                </Form>
            </FormContent>
        </FormWrap>

      </Container>
    </>
  )
}

export default Contact;
