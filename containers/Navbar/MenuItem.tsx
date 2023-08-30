import { StyledBaseComponentType } from 'components/BaseComponent/types';
import { StyledMenuItemType } from './types';
import React from 'react';
import { styled } from 'theme/styled-components';

type BaseMenuItemType = React.ComponentProps<'menuitem'> &
  StyledMenuItemType &
  StyledBaseComponentType & { ref?: any };

const MenuItemWrap = styled.div`
  padding: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: 200ms;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  color: black;
  cursor: pointer;
`;

const TextWrap = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

const BaseMenuItem: React.FC<BaseMenuItemType> = (props) => {
  const { icon, children } = props;

  return (
    <MenuItemWrap {...props}>
      {icon}
      <TextWrap>{children}</TextWrap>
    </MenuItemWrap>
  );
};

export default BaseMenuItem;
