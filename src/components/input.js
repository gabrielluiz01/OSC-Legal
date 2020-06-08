import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  color: #85144B;
  font-size: .85rem;
  font-weight: bold;
  margin: 1rem 0;
  
  p{
    margin: .5rem 0;
    font-size: .7rem;
  }
`;

const InputForm = styled.input`
  width: 100%;
  padding: .5rem;
  height: 3rem;
  font-size: .9rem;
  border: 1px solid #FFCFCD;
  border-radius: 6px;

  @media(max-width: 490px){
    height: ${props => props.heightMobile};
  }
`;

function Input(props) {
	return (
		<Label>
			<p>{props.labelText}</p>
      <InputForm placeholder={props.placeholder} type={props.type} onChange={props.onChange} heightMobile={props.heightMobile} required/>
		</Label>
	);
}

export default Input;
