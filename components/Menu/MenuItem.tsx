import { StyledMenuItemType } from './types';
import React from 'react';
import theme, { styled } from '../../theme/styled-components';
import { FaCheck } from 'react-icons/fa';

type BaseMenuItemType = React.ComponentProps<'div'> & StyledMenuItemType & { ref?: any };

const StyleMenuItem = styled.div<StyledMenuItemType>`
  width: 100%;
  min-width: max-content;

  padding: ${({ size }) =>
    size === 'lg' ? '0.6em .45em' : size === 'md' ? '0.5em 0.35em' : '0.4em .25em'};

  font-size: ${({ size }) => (size === 'lg' ? 1.3 : size === 'md' ? 1.1 : 0.8)}rem;

  transition: 200ms;

  display: flex;
  justify-content: center;

  color: ${theme.color.black};

  background-color: ${({ type }) => `
  ${
    type === 'success'
      ? theme.state.success.default
      : type === 'danger'
      ? theme.state.danger.default
      : type === 'warning'
      ? theme.state.warning.default
      : type === 'info'
      ? theme.state.info.default
      : theme.color.white
  }`};

  &:hover {
    cursor: pointer;

    color: ${theme.color.white};

    background-color: ${({ type }) => `
        ${
          type === 'success'
            ? theme.state.success.hover
            : type === 'danger'
            ? theme.state.danger.hover
            : type === 'warning'
            ? theme.state.warning.hover
            : type === 'info'
            ? theme.state.info.hover
            : theme.primary.default
        }`};
  }
  ${({ icon, selected }) =>
    (icon || selected) &&
    `
      display: flex;
      align-items: center;
   `}
  ${({ icon }) =>
    icon &&
    `
      display: flex;
      align-items: center;

      svg{
        margin-right: .5rem;
      }
   `}
   ${({ selected }) =>
    selected &&
    `
      display: flex;
      align-items: center;

      svg{     
        margin-left: .5rem;
      }
   `}
`;

const BaseMenuItem: React.FC<BaseMenuItemType> = (props) => {
  const { children, icon, selected = false } = props;

  return (
    <StyleMenuItem {...props}>
      {icon}
      {children}
      {selected && <FaCheck />}
    </StyleMenuItem>
  );
};

export default BaseMenuItem;
