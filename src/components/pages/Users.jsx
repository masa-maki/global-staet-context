import React, { useContext } from 'react';
import styled from 'styled-components';

import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { UserContext } from '../../providers/UserProvider';

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `User-${val}`,
    image: 'https://picsum.photos/NE0XGVKTmcA/200',
    image: 'https://picsum.photos/200',
    email: '1234@example.com',
    tel: '672-1000-0001',
    company: {
      name: 'Test Inc.',
    },
    website: 'https://google.com',
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>User page</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>Switch</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;
const SUserArea = styled.div`
  padding-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
