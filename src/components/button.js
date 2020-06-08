import React from 'react';
import styled from 'styled-components';

const ButtonApp = styled.button`
  width: 100%;
  height: 3.5rem;
  background: #FF4136;
  box-shadow: 0 3px 6px #00000029;
  color: #FFF;
  font-size: ${props => props.fontSize};
  border-radius: 6px;
  border: none;
  font-weight: bold;
  text-transform: uppercase;

  @media(max-width: 490px){
    height: ${props => props.heightMobile};
  }
`;


export default function Button(props) {
	return (
		<ButtonApp fontSize={props.fontSize} type={props.type} heightMobile={props.heightMobile}>
			{props.children}
		</ButtonApp>
	);
}
