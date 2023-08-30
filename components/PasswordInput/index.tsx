import BaseComponent from '../BaseComponent';
import { StyledPasswordInputType } from './types';
import { StyledBaseComponentType } from '../BaseComponent/types';
import React from 'react';
import theme, { styled } from '../../theme/styled-components';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { SizeType } from '../../types/component';

type BaseInputType = React.ComponentProps<'input'> &
  StyledPasswordInputType &
  StyledBaseComponentType & { ref?: any };

const BaseInput = styled.input<BaseInputType>`
  font-size: ${({ inputSize = 'md' }) =>
    inputSize === 'lg' ? 1.2 : inputSize === 'md' ? 1 : 0.7}rem;
  height: ${({ inputSize = 'md' }) => (inputSize === 'lg' ? 50 : inputSize === 'md' ? 40 : 20)}px;

  padding: ${({ inputIcon }) => `1rem 1rem 1rem ${inputIcon ? '3' : '.3'}rem;`};

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

const PasswordInputWrapper = styled.div`
  display: flex;
`;

const PasswordEyeWrapper = styled.div<{ inputSize?: SizeType }>`
  display: flex;
  align-items: center;

  padding: 0 0.5rem;

  height: ${({ inputSize = 'md' }) => (inputSize === 'lg' ? 50 : inputSize === 'md' ? 40 : 20)}px;

  position: absolute;
  right: 0rem;

  background: ${theme.color.spaceGray};

  cursor: pointer;

  border: 1px solid ${theme.color.gray};
  border-left: 0px;

  border-radius: 4px;
`;

const BasePasswordInput: React.FC<BaseInputType> = (props) => {
  const { inputIcon, icon, name, label, required, errors, helpText, onClear, style, inputSize } =
    props;
  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  const [typeIsPassword, setTypeIsPassword] = useState(true);

  return (
    <BaseComponent {...{ ...baseComponentProps, size: inputSize }}>
      <PasswordInputWrapper>
        <BaseInput {...props} type={typeIsPassword ? 'password' : 'text'} />
        <PasswordEyeWrapper onClick={() => setTypeIsPassword(!typeIsPassword)}>
          {typeIsPassword ? <FaEyeSlash /> : <FaEye />}
        </PasswordEyeWrapper>
      </PasswordInputWrapper>
    </BaseComponent>
  );
};

export default BasePasswordInput;
