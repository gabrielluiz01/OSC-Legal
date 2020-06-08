// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Overlay from '../../components/overlay';
import Input from '../../components/input';
import Button from '../../components/button';
import Logo from '../../components/Logo';

// Styled
const Form = styled.form`
  width: 25rem;
  height: 17rem;
  background: #FFF;
  border-radius: 6px;
  border: none;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;

  @media(max-width: 490px){
    width: 95%;
  }
`;

const BoxTitle = styled.span`
  width: 85%;
`;

const TitleForm = styled.h1`
  font-size: 1.5rem;
`;

const InputBox = styled.span`
  width: 85%;
`;

const ButtonBox = styled.span`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextButton = styled.p`
  color: #85144B;
  font-size: 1rem;
  text-transform: uppercase;
  margin-top: 1rem;
`;



export default class ResetPassword extends Component{
  render() {
    return (
      <Overlay>
        <Logo margin="0 0 5rem 0"/>
        <Form onSumibt={() => { }}>
          <BoxTitle>
            <TitleForm>Password Reset</TitleForm>
          </BoxTitle>
          <InputBox>
            <Input type="email" placeholder="name@email.com" labelText="email" onChange={() => { }}/>
          </InputBox>
          <ButtonBox>
            <Button fontSize=".9rem">
              Request password reset
            </Button>
            <Link to="/">
              <TextButton>Back to Login</TextButton>
            </Link>
          </ButtonBox>
        </Form>
      </Overlay>
    );
  }
}