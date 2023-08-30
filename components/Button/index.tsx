import BaseComponent from '../BaseComponent';
import { StyledButtonType } from './types';
import { StyledBaseComponentType } from '../BaseComponent/types';
import React from 'react';
import theme, { StateColor, styled } from '../../theme/styled-components';
import ButtonGroup from '../ButtonGroup';

type BaseButtonType = React.ComponentProps<'button'> &
  StyledButtonType &
  StyledBaseComponentType & { ref?: any };

const StyledButton = styled.button<BaseButtonType>`
  ${({ size = 'md', primary = true, transparent = false, variant: buttonType, color }) => `
    min-width: 6.25em;
    padding: ${size === 'lg' ? '0.625em 1em' : size === 'md' ? '0.5em .8em' : '0.4em .5em'};

    background-color: ${
      transparent
        ? 'transparent'
        : primary
        ? `${StateColor({ type: buttonType })}`
        : theme.secondary.default
    };
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    background-clip: padding-box;
    box-shadow: inset 0 1px inherit;
    width:fit-content;
    font-size: ${size === 'lg' ? 1.875 : size === 'md' ? 1.375 : 1}rem;
    font-family: ${primary ? theme.font.primary : theme.font.secondary};
    font-weight: bold;
    color: ${
      color
        ? color
        : buttonType
        ? theme.color.white
        : primary
        ? theme.primary.text
        : theme.secondary.text
    };
    text-align: center;
    text-decoration: none;
    text-shadow: 0 -1px rgb(0 0 0 / 69%);

    border: 0;
    border-radius: 0.3125em;

    appearance: none;
    cursor: pointer;
    transition: 0.3s ease-out;
    outline: 0;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      background-color: ${
        transparent
          ? 'transparent'
          : primary
          ? `${StateColor({ type: buttonType, mode: 'hover' })}`
          : theme.secondary.default
      };
    }

    &:focus, &:focus:hover {
      background-color: ${
        transparent
          ? 'transparent'
          : primary
          ? `${StateColor({ type: buttonType, mode: 'hover' })}`
          : theme.secondary.default
      };
    }

  ${ButtonGroup} & {
    // margin: 4px;
   }
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
`;

const Caret = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid;
  margin-left: 0.5rem;
`;

const StyledBaseComponent = styled(BaseComponent)`
  width: min-content;
`;

const BaseButton: React.FC<BaseButtonType> = (props) => {
  const { children, icon, name, label, required, errors, helpText, onClear, style, dropdown } =
    props;

  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  return (
    <StyledBaseComponent {...baseComponentProps}>
      <StyledButton {...props}>
        {icon}
        {children}
        {dropdown && <Caret />}
      </StyledButton>
    </StyledBaseComponent>
  );
};

export default BaseButton;
