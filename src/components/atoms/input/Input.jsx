import React from 'react';
import styled from 'styled-components';

export const Input = (props) => {
  const { placeholder = '' } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 0.5rem 1rem;
  border: solid #ddd 1px;
  border-radius: 4px;
  outline: none;
`;
