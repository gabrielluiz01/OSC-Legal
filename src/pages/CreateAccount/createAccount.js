// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import Logo from '../../components/Logo';
import Button from '../../components/button';
import Overlay from '../../components/overlay';
import Input from '../../components/input';

// Redux
import { addNewUser } from '../../dataflow/modules/onboarding-modules';

const mapStateToProps = state => ({
  newAccount: state.onboarding.newAccount,
})

const mapDispatchToProps = dispatch => ({
  addNewUser: info => dispatch(addNewUser(info))
})

// Styled
const Form = styled.form`
  width: 27rem;
  height: 54rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #FFF;
  border-radius: 6px;
  margin: 1rem 0;

  strong{
    color: #85144B;
    text-decoration: underline;
    cursor: pointer;
    margin: 0 .3rem;
  }

  @media(max-width: 490px){
    width: 100%;
    min-height: 100vh;
  }
`;

const BoxTitle = styled.span`
  width: 85%;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.3rem;
`;

const InputBox = styled.span`
  width: 85%;
`;

const TextTerms = styled.p`
  font-size: .75rem;
  margin: 1rem 0;

  @media(max-width: 490px){
    text-align: center;
    font-size: .8rem;
  }
`;

const BoxButton = styled.span`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

const Modal = styled.div`
  width: 30rem;
  height: 32rem;
  display: flex;
  flex-direction: column;
  background: #FFF;
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
  
  @media(max-width: 490px){
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 15rem;
  }
`;

const BoxTitleTerms = styled.span`
  width: 95%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;

  @media(max-width: 490px){
    margin: 1rem 0;
    justify-content: center;
  }
`;

const TitleTerms = styled.h1`
  font-size: 1.3rem;
  text-transform: uppercase;
`;

const BoxTerms = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 85%;
  background: #FFCFCD;
  padding: 1rem 1.5rem;
  justify-content: space-between;

  @media(max-width: 490px){
    width: 100%;
    height: 100%;
    align-items: center;
    background: #FFF;
    padding-bottom: 25rem;
  }
`;

const BoxButtonTerms = styled.span`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media(max-width: 490px){
    justify-content: center;
  }
`;

const ButtonTerms = styled.button`
  width: 7.5rem;
  height: 2.3rem;
  background: #FF4136;
  color: #FFF;
  border: none;
  border-radius: 6px;
  font-size: .9rem;
  margin: 0.5rem 0; 

  @media(max-width: 490px){
    width: 95%;
    height: 3rem;
    position: fixed;
    bottom: 0;
  }
`;

const TermsBold = styled.p`
  font-weight: bold;
  width: 85%;
  font-size: .9rem;

  @media(max-width: 490px){
    text-align: center;
    margin: 1rem 0;
  }
`;

const Terms = styled.p`
  font-size: .9rem;
  margin: .5rem 0;
  
  @media(max-width: 490px){
    margin: .8rem 0;
  }
`;


class CreateAccount extends Component{

  state = {
    isModalTerms: false,
    user: {
      name: '',
      surname: '',
      cpf: '',
      telephone: '',
      password: '',
    },
  }

  openModalTerms = () => {
    this.setState({
      isModalTerms: true,
    });
  }

  closeModalTerms = () => {
    this.setState({
      isModalTerms: false,
    });
  }

  handleChange = (field, ev) => {
    const { user } = this.state;
    user[field] = ev.target.value;
    this.setState({ user })
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.addNewUser(this.state.user);
  }

  

  renderModalTerms = () => (
    <Overlay background="#00000050" position="fixed" top="0" bottom="0" onClick={this.closeModalTerms}>
      <Modal onClick={ev => ev.stopPropagation()}>
        <BoxTitleTerms>
          <TitleTerms>termos de serviço</TitleTerms>
        </BoxTitleTerms>
        <BoxTerms>
          <TermsBold>Boas vindas ao Aplicativo do estatuto OSC Legal</TermsBold>
          <Terms>
            Esta é uma ferramenta voltada a fornecer um guia para que as associações possam elaborar ou reformar seus estatutos, documento obrigatório nessas organizações.
          </Terms>
          <Terms>
            Cada senha dará oportunidade para que você possa trabalhar no documento por 30 dias. Ao final desse prazo se considera finalizado o texto, gerando-se o documento equivalente no estado em que estiver. 
          </Terms>
          <Terms>
            De acordo com a legislação brasileira, para registro de estatuto de associação é obrigatória a assinatura de advogado ou advogada inscrito na OAB. Recomendamos que procure um/a profissional especialista.
          </Terms>
          <Terms>
            Qualquer dúvida e/ou esclarecimento entre em contato com nossa equipe: <u style={{color: '#FF4136'}}>osclegal@gmail.com</u>
          </Terms>
        </BoxTerms>
        <BoxButtonTerms>
          <ButtonTerms onClick={this.closeModalTerms}>OK</ButtonTerms>
        </BoxButtonTerms>
      </Modal>
    </Overlay>
  );

  render() {
    console.log(this.props);
    return (
      <Overlay>
        <Form onSubmit={this.handleSubmit}>
          <Logo margin="2rem 0 3rem 0"/>
          <BoxTitle>
            <Title>Criar conta</Title>
          </BoxTitle>
          <InputBox>
            <Input
              type="text"
              labelText="nome"
              onChange={(ev) => this.handleChange('name', ev)}
              placeholder="Nome"
            />
            <Input
              type="text"
              labelText="sobrenome"
              onChange={(ev) => this.handleChange('surname', ev)}
              placeholder="Sobrenome"
            />
            <Input
              type="number"
              labelText="cpf"
              onChange={(ev) => this.handleChange('cpf', ev)}
              placeholder="0000000000-0"
            />
            <Input
              type="email"
              labelText="email"
              onChange={(ev) => this.handleChange('email', ev)}
              placeholder="nome@email.com"
            />
            <Input
              type="tel"
              labelText="telefone"
              onChange={(ev) => this.handleChange('telephone', ev)}
              placeholder="(00)00000-0000"
            />
            <Input
              type="password"
              labelText="senha"
              onChange={(ev) => this.handleChange('password', ev)}
              placeholder="Inserir senha"
            />
          </InputBox>
          <BoxButton>
            <TextTerms>
              Clique abaixo para concordar com os
              <strong onClick={this.openModalTerms}>Termos de Serviço</strong>
              e registrar.
            </TextTerms>
            <Button type="submit">
              concordar e criar conta
            </Button>
          </BoxButton>
          {this.state.isModalTerms && this.renderModalTerms()}
        </Form>
      </Overlay>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);