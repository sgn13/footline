import { StyledColorPickerType } from '../ColorPicker/types';
import React from 'react';
import theme, { styled } from '../../theme/styled-components';
import { StyledBaseComponentType } from '../BaseComponent/types';
import BaseComponent from '../BaseComponent';
import Input from '../Input';

type BaseColorPickerType = React.ComponentProps<'span'> &
  StyledColorPickerType &
  StyledBaseComponentType & { ref?: any };

const StyledColorPickerWrapper = styled.div`
  display: flex;
`;

const StyledColorPicker = styled.input.attrs({ type: 'color' })<BaseColorPickerType>`
  font-size: ${({ inputSize = 'md' }) =>
    inputSize === 'lg' ? 1.2 : inputSize === 'md' ? 1 : 0.7}rem;
  height: ${({ inputSize = 'md' }) => (inputSize === 'lg' ? 50 : inputSize === 'md' ? 40 : 20)}px;
`;

const BaseColorPicker: React.FC<BaseColorPickerType> = (props) => {
  const {
    icon,
    name,
    label,
    required,
    errors,
    helpText,
    onClear,
    style,
    value = '#000000',
    onChange,
  } = props;

  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <BaseComponent {...baseComponentProps}>
      <StyledColorPickerWrapper>
        <StyledColorPicker type="color" value={value} onChange={handleChange} />
        <Input value={value} onChange={handleChange} maxLength={7} />
      </StyledColorPickerWrapper>
    </BaseComponent>
  );
};

export default BaseColorPicker;
