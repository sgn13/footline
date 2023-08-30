import BaseComponent from '../BaseComponent';
import { StyledInputType } from './types';
import { StyledBaseComponentType } from '../BaseComponent/types';
import React from 'react';
import theme, { styled } from '../../theme/styled-components';

type BaseInputType = React.ComponentProps<'input'> &
  StyledInputType &
  StyledBaseComponentType & { ref?: any };

const StyledInput = styled.input<BaseInputType>`
  font-size: ${({ inputSize = 'md' }) =>
    inputSize === 'lg' ? 1.2 : inputSize === 'md' ? 1 : 0.7}rem;
  height: ${({ inputSize = 'md' }) => (inputSize === 'lg' ? 50 : inputSize === 'md' ? 40 : 20)}px;

  padding: ${({ inputIcon: icon }) => `1rem 1rem 1rem ${icon ? '3' : '.3'}rem;`};

  position: relative;
  width: 100%;

  transition: border, color 0.2s ease-in-out;
  background-color: ${theme.color.white};

  border: 1px solid
    ${({ errors, value, required }) =>
      errors && !value && required ? theme.color.red : theme.color.gray};

  border-radius: 4px;

  :-webkit-autofill {
    :focus {
      border: 1px solid black;
    }
  }

  ::placeholder {
    color: ${theme.color.gray};
  }

  :hover {
    border: 1px solid ${theme.primary.default};
  }

  :focus {
    outline: 0;
    border: 2px solid ${theme.primary.default};
  }
`;

const BaseInput: React.FC<BaseInputType> = (props) => {
  const { inputIcon, icon, name, label, required, errors, helpText, onClear, style, inputSize } =
    props;
  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  return (
    <BaseComponent {...{ ...baseComponentProps, size: inputSize }}>
      {inputIcon}
      <StyledInput {...props} />
    </BaseComponent>
  );
};

export default BaseInput;
