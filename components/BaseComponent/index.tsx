import React from 'react';

import Text from '../Text';

import theme, { styled } from '../../theme/styled-components';
import { StyledBaseComponentType } from './types';

type BaseComponentType = React.ComponentProps<'div'> & StyledBaseComponentType & { ref?: any };

const StyledBaseComponent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: center;

  width: 100%;
  min-width: 100px;
`;

const StyledClear = styled.div`
  width: 20px;
  height: 20px;

  position: absolute;
  right: -10px;
  top: 15px;

  color: white;

  text-align: center;

  background: ${theme.color.red};

  border-radius: 100%;

  cursor: pointer;
  z-index: 2;
`;

export const BaseLabel = styled(Text)`
  display: inline-block;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;
export const BaseHelpText = styled(Text)`
  margin-top: 0.5rem;
`;
export const BaseErrorMessage = styled(Text)`
  margin: 0.5rem 0;
  font-weight: 400;
  font-size: 0.75rem;
`;

export const BaseLabelHeader = styled(Text)`
  display: inline-block;
  font-weight: 600;
  margin-bottom: 1rem;
  width: 100%;
`;

const BaseComponent: React.FC<BaseComponentType> = ({
  name,
  label,
  icon,
  required,
  errors,
  helpText,
  onClear,
  children,
  size,
  inputSize,
  ...props
}) => {
  const getError = () => {
    if (!name || !Object.values(errors).length) return;

    if (!name.includes('.')) {
      return errors[name];
    } else {
      const splittedName = name.split('.');

      if (splittedName.length === 1) {
        return errors[splittedName[0]];
      }
      if (splittedName.length === 2) {
        return errors[splittedName[0]] && errors[splittedName[0]][splittedName[1]];
      }
      if (splittedName.length === 3) {
        return (
          errors[splittedName[0]] &&
          errors[splittedName[0]][splittedName[1]] &&
          errors[splittedName[0]][splittedName[1]][splittedName[2]]
        );
      }
    }
  };

  return (
    <StyledBaseComponent {...props}>
      {onClear && <StyledClear onClick={onClear}>X</StyledClear>}
      {label && (
        <BaseLabel required={required} icon={icon} size={size || inputSize}>
          {label}
        </BaseLabel>
      )}
      {children}
      {errors && <BaseErrorMessage type="error"> {getError()}</BaseErrorMessage>}
      {helpText && <BaseHelpText type="help"> {helpText}</BaseHelpText>}
    </StyledBaseComponent>
  );
};

export default BaseComponent;
