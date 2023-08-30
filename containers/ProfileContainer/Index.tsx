import React from 'react';
import Avatar from 'components/Avatar';
import { styled } from 'theme/styled-components';
import DataTable from 'containers/DataTable';
import Button from 'components/Button';

export const BorderWrapper = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 7px;
`;

const ProfileWrapper = styled.div`
  border-radius: 4px;
  padding: 1rem;
  background: #ffffff;
  border-radius: 7px;
`;
const Title = styled.h1`
  font-size: 1.3rem;
  padding: 0.5rem 0;
`;
const SubTitle = styled.h1`
  color: #555;
  font-weight: 100;
  padding: 0.5rem 0;
`;
const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileBody = styled.div``;

const ProfileContainer = ({ title, subTitle, data, border = true, avatar, onViewCV }) => {
  return (
    <ProfileWrapper>
      <ProfileHeader>
        <Avatar
          width="100px"
          height="100px"
          src={avatar || 'https://randomuser.me/api/portraits/men/1.jpg'}
        />
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </ProfileHeader>
      <hr />
      <ProfileBody>
        <DataTable data={data} border={border} />
        {onViewCV && (
          <Button size="sm" onClick={onViewCV}>
            View CV
          </Button>
        )}
      </ProfileBody>
    </ProfileWrapper>
  );
};

export default ProfileContainer;
