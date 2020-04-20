// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import ImageLogo from '../../../components/ImageLogo';

const Container = styled.div`
  width: 100%;
	height: auto;
  background-color: #FFFFFF;
  color: #231F20;
  font-family: Overpass, Light;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
	padding: 0 2.5rem;
  text-transform: uppercase;
	border-bottom: 2px solid  #707070;
	opacity: 1;


	@media (max-width: 865px) {
		padding: 0 1.5rem;
	}

	@media (max-width: 648px) {
		flex-wrap: wrap;
	}
`;

const WrapButton = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 1080px) {
		width: 36%;
	}

	@media (max-width: 785px) {
		width: 26%;
	}

	@media (max-width: 648px) {
		width: 95%;
		justify-content: space-between;
		order: 3;
	}
`;

const Border = styled.span`
	height: 5.2rem;
	margin-right: 3rem;
	border-bottom: ${props => (props.border && '5px solid #231F20')};
	cursor: pointer;

	@media (max-width: 859px) {
		margin-right: 0;
		padding-right: 1.5rem;
	}

	@media (max-width: 648px) {
		padding-right: 0;
	}
`;

const ParagraphContainer = styled.p`
  font-size: 1.375rem;
	font-weight: ${props => props.bold && '700'};
	margin-top: 2.2rem;
`;

const ContainerAdm = styled.div`
  width: 30%;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

	@media (max-width: 785px) {
		width: 40%;
	}

	@media (max-width: 648px) {
		padding-right: 1.3rem;
		margin-bottom: 0;
		order: 2;
	}
`;

const ParagraphContainer1 = styled.p`
	font-size: 1.3rem;
	font-family: Overpass, Light;
	margin-top: 1.2rem;

	@media (max-width: 685px) {
		margin-top: 0;
	}

	@media (max-width: 648px) {
		font-size: 1rem;
	}
`;

const ParagraphSair = styled.p`
  color: #85144B;
  font-family: Overpass, SemiBold;
	font-size: 1.25rem;
  opacity: 1;

	@media (max-width: 859px) {
		font-size: 1.2rem;
	}
`;

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
		};
	}

	handleChangeClick = (item) => {
		this.setState({
			redirect: item,
		});
		console.log('oiiii');
		this.props.handleClick(item);
	};

	renderButtons = item => (
		<Border border={this.state.redirect === item}>
			<ParagraphContainer
				onClick={() => this.handleChangeClick(item)}
				bold={this.state.redirect === item}
			>
				{item === 'documentos' ? item : 'organizações'}
			</ParagraphContainer>
		</Border>
	)

	render() {
		return (
			<Container>
				<ImageLogo height='2.8rem' heightMobile='2rem' />
				<WrapButton>
					{this.renderButtons('organization')}
					{this.renderButtons('documentos')}
				</WrapButton>
				<ContainerAdm>
					<ParagraphContainer1>administrador</ParagraphContainer1>
					<ParagraphSair>sair</ParagraphSair>
				</ContainerAdm>
			</Container>
		);
	}
}

export default Header;
