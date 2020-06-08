// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Input from '../../components/input';
import Button from '../../components/button';
import Logo from '../../components/Logo';
import Overlay from '../../components/overlay';

// Styled
const Form = styled.form`
  width: 25rem;
  height: 27rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #FFF;
  border-radius: 6px;
  border: none;
  padding: 1rem;
`;

const BoxTitle = styled.span`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

const TitleForm = styled.h1`
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: .5rem 0;
`;

const TextForm = styled.p`
  font-size: .9rem;
`;

const InputBox = styled.span`
  width: 85%;
`;

const ButtonBox = styled.span`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextButton = styled.p`
  margin-top: 1rem;
  text-transform: uppercase;
  color: #85144B;
`;


export default class NewPasswordScreen extends Component{
  render() {
    return (
      <Overlay>
        <Logo margin="0 0 4rem 0"/>
        <Form onSubmit={() => { }}>
          <BoxTitle>
            <TitleForm>
              password reset
            </TitleForm>
            <TextForm>
              A confirmation code sent to name@email.com, please, paste it bellow:
            </TextForm>
          </BoxTitle>
          <InputBox>
            <Input
              type="password"
              placeholder="Insert password"
              onChange={() => { }}
              labelText="new password"
            />
            <Input
              type="password"
              placeholder="Insert new password"
              onChange={() => { }}
              labelText="repeat new password"
            />
          </InputBox>
          <ButtonBox>
            <Button>
              PROCEED WITH NEW PASSWORD
            </Button>
            <TextButton>
              resend Email
            </TextButton>
          </ButtonBox>
        </Form>
      </Overlay>
    );
  }
}