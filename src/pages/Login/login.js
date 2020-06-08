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
	min-height: 23.5rem;
	display: flex;
	flex-direction: column;
	border-radius: 6px;
	background: #FFF;
	border: none;
	align-items: center;
	padding: 2rem 1rem 2rem 1rem;

	@media(max-width: 490px){
		width: 100%;
		height: 100vh;
		justify-content: space-evenly;
	}
	a{
		text-decoration: none;
	}
`;

const InputBox = styled.div`
	width: 85%;
	margin: 1rem 0;
`;

const BoxButton = styled.span`
	width: 85%;
`;

const BoxOptions = styled.span`
	width: 85%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TextForm = styled.p`
	text-transform: uppercase;
	font-size: .89rem;
	color: #85144B;
	margin-top: 1.5rem;
	cursor: pointer;
`;

export default class Login extends Component {
	
	state = {
		user: {
			email: '',
			password: '',
		}
	}

	handleChange = (field, ev) => {
		const { user } = this.state;
		user[field] = ev.target.value;
		this.setState({ user })
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		console.log('user', this.state.user);
	}

	render() {
		return (
			<Overlay>
				<Form onSubmit={this.handleSubmit}>
					<Logo margin="1rem 0 2rem 0" widthMobile="200px"/>
					<InputBox>
						<Input
							type="email"
							placeholder="name@email.com"
							onChange={(ev) => this.handleChange('email', ev)}
							labelText="email"
							heightMobile='4rem'
						/>
						<Input
							type="password"
							placeholder="Insert password"
							onChange={(ev) => this.handleChange('password', ev)}
							labelText="senha"
							heightMobile='4rem'
						/>
					</InputBox>
					<BoxButton>
						<Button heightMobile="4rem" fontSize="1rem">
							Entrar
						</Button>
					</BoxButton>
					<BoxOptions>
						<Link to="/createaccount">
							<TextForm>criar conta</TextForm>
						</Link>
						<Link to="/resetpassword">
							<TextForm>resetar senha</TextForm>
						</Link>
					</BoxOptions>
				</Form>
			</Overlay>
		);
	}
}
