import BaseComponent from 'components/BaseComponent';
import { StyledToggleSwitchType } from './types';
import { StyledBaseComponentType } from 'components/BaseComponent/types';
import React from 'react';
import theme, { styled } from 'theme/styled-components';

type BaseToggleSwitchType = React.ComponentProps<'input'> &
  StyledToggleSwitchType &
  StyledBaseComponentType & { type?: any; ref?: any };

const StyledToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 4em;
  height: 2em;
`;

const StyledToggleSwitch = styled.input.attrs({ type: 'checkbox' })`
  height: 0;
  width: 0;
`;

const StyledIndicator = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 3.4em;

  &::before {
    position: absolute;
    content: '';
    height: 1.5em;
    width: 1.5em;
    left: 0.55em;
    bottom: 0.25em;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${StyledToggleSwitch}:checked + & {
    background-color: ${theme.state.success.default};
  }

  ${StyledToggleSwitch}:checked + &::before {
    -webkit-transform: translateX(1.6em);
    -ms-transform: translateX(1.6em);
    transform: translateX(1.6em);
  }

  ${StyledToggleSwitch}:focus + & {
    box-shadow: 0 0 0.1em ${theme.primary.default};
  }

  ${StyledToggleSwitch}:disabled + & {
    pointer-events: none;
    background: ${theme.color.silver};
  }
`;

const BaseToggleSwitch: React.FC<BaseToggleSwitchType> = (props) => {
  const { icon, name, label, required, errors, helpText, onClear, style, onClick } = props;

  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  return (
    <BaseComponent {...baseComponentProps} onClick={onClick}>
      <StyledToggleSwitchWrapper>
        <StyledToggleSwitch {...props} />
        <StyledIndicator />
      </StyledToggleSwitchWrapper>
    </BaseComponent>
  );
};

export default BaseToggleSwitch;
