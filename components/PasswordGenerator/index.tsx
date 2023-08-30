import BaseComponent from '../BaseComponent';
import { StyledPasswordInputType } from './types';
import { StyledBaseComponentType } from '../BaseComponent/types';
import React from 'react';
import theme, { styled } from '../../theme/styled-components';
import { useState } from 'react';
import { FaCog, FaEye, FaEyeSlash } from 'react-icons/fa';
import { HiOutlineRefresh } from 'react-icons/hi';
import { SizeType } from '../../types/component';
import Input from 'components/Input';
import { useEffect } from 'react';

type BaseInputType = React.ComponentProps<'input'> &
  StyledPasswordInputType &
  StyledBaseComponentType & { ref?: any; setValue: any };

const BaseInput = styled.input<BaseInputType>`
  font-size: ${({ inputSize = 'md' }) =>
    inputSize === 'lg' ? 1.2 : inputSize === 'md' ? 1 : 0.7}rem;
  height: ${({ inputSize = 'md' }) => (inputSize === 'lg' ? 50 : inputSize === 'md' ? 40 : 20)}px;

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

const PasswordInputWrapper = styled.div`
  display: flex;
`;

const ActionWrapper = styled.div<{ inputSize?: SizeType; right }>`
  display: flex;
  align-items: center;

  padding: 0 0.5rem;

  height: ${({ inputSize = 'md' }) => (inputSize === 'lg' ? 50 : inputSize === 'md' ? 40 : 20)}px;

  position: absolute;
  right: ${({ right }) => right || 0}rem;

  background: ${theme.color.spaceGray};

  cursor: pointer;

  border: 1px solid ${theme.color.gray};
  border-left: 0px;
`;

const RuleInputWrapper = styled.div`
  padding: 1rem;
`;

const RuleInputItem = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
`;

const RuleInput = styled.input`
  width: 60px;
  height: 25px;
  margin: 0 1rem;
`;

export const shufflePassword = (str, maxlength) => {
  let shuffledString = str
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');

  if (maxlength > 0) {
    shuffledString = shuffledString.substr(0, maxlength);
  }

  return shuffledString;
};

const PasswordGenerator: React.FC<BaseInputType> = (props) => {
  const { icon, name, label, required, errors, helpText, onClear, style, inputSize, setValue } =
    props;
  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  const [typeIsPassword, setTypeIsPassword] = useState(false);

  const [passwordLength, setPasswordLength] = useState(10);

  const [showSettings, setShowSettings] = useState(false);

  const [passwordRule, setPasswordRule] = useState({
    uppercase: { text: 'abcdefghijklmnopqrstuvwxyz', min: 1 },
    lowercase: { text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', min: 1 },
    number: { text: '0123456789', min: 1 },
    specialchar: { text: '~!@-#$', min: 1 },
  });

  useEffect(() => {
    generatePassword(passwordLength);
  }, [passwordLength]);
  useEffect(() => {
    generatePassword(passwordLength);
  }, [passwordRule]);

  const generatePassword = (length) => {
    let globalText = '';
    let globalMin = 0;

    let temporaryPassword = '';

    Object.values(passwordRule).forEach((rule) => {
      globalText += rule.text;
      globalMin += rule.min;
    });

    if (length < globalMin) {
      setPasswordLength(Number(globalMin));
    }

    Object.values({ ...passwordRule, all: { text: globalText, min: length - globalMin } }).forEach(
      (rule) => {
        if (rule.min > 0) {
          temporaryPassword += shufflePassword(rule.text, rule.min);
        }
      },
    );

    return setValue(shufflePassword(temporaryPassword, length));
  };

  return (
    <BaseComponent {...{ ...baseComponentProps, size: inputSize }}>
      <PasswordInputWrapper>
        <BaseInput
          {...props}
          type={typeIsPassword ? 'password' : 'text'}
          onChange={(e) => setValue(e.target.value)}
        />
        <ActionWrapper right={0} onClick={() => setTypeIsPassword((prev) => !prev)}>
          {typeIsPassword ? <FaEyeSlash /> : <FaEye />}
        </ActionWrapper>
        <ActionWrapper right={2} onClick={() => setShowSettings((prev) => !prev)}>
          <FaCog />
        </ActionWrapper>
        <ActionWrapper
          right={4}
          onClick={() => {
            generatePassword(10);
          }}
        >
          <HiOutlineRefresh />
        </ActionWrapper>
      </PasswordInputWrapper>
      {showSettings && (
        <RuleInputWrapper>
          <RuleInputItem>
            Password Length{' '}
            <RuleInput
              type="number"
              onChange={(e) => {
                Number(e.target.value) && setPasswordLength(Number(e.target.value));
              }}
              value={passwordLength}
            />
          </RuleInputItem>
          {Object.entries(passwordRule).map((rule) => (
            <RuleInputItem>
              Minimum{' '}
              <RuleInput
                type="number"
                name={rule[0]}
                onChange={(e) => {
                  if (Number(e.target.value)) {
                    setPasswordRule((prev) => ({
                      ...prev,
                      [`${rule[0]}`]: { ...prev[`${rule[0]}`], min: Number(e.target.value) },
                    }));
                  }
                }}
                value={rule[1].min}
              />
              {rule[0]} ({rule[1].text})
            </RuleInputItem>
          ))}
        </RuleInputWrapper>
      )}
    </BaseComponent>
  );
};

export default PasswordGenerator;
