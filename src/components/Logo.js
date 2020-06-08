import React from 'react';
import styled from 'styled-components';
import LogoImg from '../assets/logo.svg';

const LogoImage = styled.img`
  width: ${props => props.width};
  margin: ${props => props.margin};

  @media(max-width: 768px){
    width: ${props => props.widthTablet};
    margin: ${props => props.marginTablet};
  }

  @media(max-width: 490px){
    width: ${props => props.widthMobile};
    margin: ${props => props.marginMobile};
  }
`;


export default function Logo(props) {
	return (
		<LogoImage src={LogoImg} width={props.width} widthTablet={props.widthTablet} widthMobile={props.widthMobile} margin={props.margin} marginTablet={props.marginTablet} marginMobile={props.marginMobile}/>
	);
}
