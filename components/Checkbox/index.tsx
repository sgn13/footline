import BaseComponent from '../BaseComponent';
import { StyledCheckboxType } from './types';
import { StyledBaseComponentType } from '../BaseComponent/types';
import React from 'react';
import theme, { styled } from '../../theme/styled-components';

type BaseCheckboxType = React.ComponentProps<'input'> &
  StyledCheckboxType &
  StyledBaseComponentType & { type?: any; ref?: any };

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  height: 0;
  width: 0;
`;

const StyledCheckboxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledLabel = styled.label`
  margin-left: 2rem;
`;

const StyledIndicator = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  background: ${theme.color.silver};

  position: absolute;

  border: 1px solid ${theme.color.silver};
  border-radius: 0.2em;

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${StyledCheckbox}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.4em;

    width: 35%;
    height: 70%;

    border: solid #263238;
    border-width: 0 0.2em 0.2em 0;

    animation: rotate;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    from {
      opacity: 0;
      transform: rotate(0deg);
    }
    to {
      opacity: 1;
      transform: rotate(45deg);
    }
  }
`;

const BaseCheckbox: React.FC<BaseCheckboxType> = (props) => {
  const { icon, checkboxLabel, name, label, required, errors, helpText, onClear, style, onClick } =
    props;

  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  return (
    <BaseComponent {...baseComponentProps} onClick={onClick}>
      <StyledCheckboxWrapper>
        <StyledCheckbox {...props} />
        <StyledIndicator />
        <StyledLabel> {checkboxLabel}</StyledLabel>
      </StyledCheckboxWrapper>
    </BaseComponent>
  );
};

export default BaseCheckbox;
