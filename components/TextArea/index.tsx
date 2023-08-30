import BaseComponent from '../BaseComponent';
import { StyledTextType } from './types';
import { StyledBaseComponentType } from '../BaseComponent/types';
import React from 'react';
import theme, { styled } from '../../theme/styled-components';

type BaseTextAreaType = React.ComponentProps<'input'> &
  StyledTextType &
  StyledBaseComponentType & { ref?: any };

const StyledTextArea = styled.textarea<BaseTextAreaType>`
  font-size: ${({ inputSize = 'md' }) =>
    inputSize === 'lg' ? 1.2 : inputSize === 'md' ? 1 : 0.7}rem;

  padding: ${({ icon }) => `1rem 1rem 1rem ${icon ? '3' : '.3'}rem;`};

  position: relative;
  width: 100%;

  transition: border, color 0.2s ease-in-out;
  background-color: ${theme.color.white};

  border: 1px solid
    ${({ errors, value, required }) =>
      errors && !value && required ? theme.color.red : theme.color.gray};

  border-radius: 4px;

  :-webkit-autofill {
    -webkit-text-fill-color: #fff;
    box-shadow: 0 0 0px 1000px ${theme.color.black} inset;

    :focus {
      box-shadow: 0 0 0px 1000px ${theme.primary.default} inset;
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
    border: 1px solid ${theme.primary.default};
  }
`;

const BaseTextArea: React.FC<BaseTextAreaType> = (props) => {
  const { icon, name, label, required, errors, helpText, onClear, style, inputSize } = props;
  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  return (
    <BaseComponent {...{ ...baseComponentProps, size: inputSize }}>
      {icon}
      <StyledTextArea {...props} />
    </BaseComponent>
  );
};

export default BaseTextArea;
