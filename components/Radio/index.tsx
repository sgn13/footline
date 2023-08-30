import BaseComponent from '../BaseComponent';
import { StyledRadioType } from './types';
import { StyledBaseComponentType } from '../BaseComponent/types';
import React from 'react';
import theme, { styled } from '../../theme/styled-components';

type BaseRadioType = React.ComponentProps<'input'> &
  StyledRadioType &
  StyledBaseComponentType & { type?: any; ref?: any };

const StyledRadio = styled.input.attrs({ type: 'radio' })`
  height: 0;
  width: 0;
`;

const StyledRadioWrapper = styled.div`
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
  border-radius: 1em;

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${StyledRadio}:checked + &::after {
    display: block;

    border: solid ${theme.color.gray};
    border-radius: 1em;

    background-color: ${theme.color.gray};

    width: 0.5em;
    height: 0.5em;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    animation-name: popin;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  @keyframes popin {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.5);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const BaseRadio: React.FC<BaseRadioType> = (props) => {
  const { icon, radioLabel, name, label, required, errors, helpText, onClear, style, onClick } =
    props;

  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  return (
    <BaseComponent {...baseComponentProps} onClick={onClick}>
      <StyledRadioWrapper>
        <StyledRadio {...props} />
        <StyledIndicator />
        <StyledLabel> {radioLabel}</StyledLabel>
      </StyledRadioWrapper>
    </BaseComponent>
  );
};

export default BaseRadio;
