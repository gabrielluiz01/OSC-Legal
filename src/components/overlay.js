import React from 'react';
import styled from 'styled-components';

const OverlayApp = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.background};
  position: ${props => props.position};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
`;

export default function Overlay(props) {
	return (
		<OverlayApp background={props.background || '#FFCFCD'} position={props.position} top={props.top} bottom={props.bottom} onClick={props.onClick}>
			{props.children}
		</OverlayApp>
	);
}
