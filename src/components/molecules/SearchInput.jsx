import React, { memo } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/input/Input';

export const SearchInput = memo(() => {
  console.log('SearchInput');
  return (
    <div>
      <SContainer>
        <Input placeholder="Search" />
        <SButtonWrapper>
          <PrimaryButton>Search</PrimaryButton>
        </SButtonWrapper>
      </SContainer>
    </div>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 0.5rem;
`;
