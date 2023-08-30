import BaseComponent from 'components/BaseComponent';
import { StyledButtonGroupType } from './types';
import { StyledBaseComponentType } from 'components/BaseComponent/types';
import React from 'react';
import { styled } from 'theme/styled-components';

type BaseButtonGroupType = React.ComponentProps<'button'> &
  StyledButtonGroupType &
  StyledBaseComponentType & { ref?: any };

const ButtonGroup = styled.div`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  justify-content: flex-end;
`;

const StyledBaseComponent = styled(BaseComponent)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
`;

const BaseButtonGroup: React.FC<BaseButtonGroupType> = (props) => {
  const { children, icon, name, label, required, errors, helpText, onClear, style } = props;

  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  return (
    <StyledBaseComponent {...baseComponentProps}>
      <ButtonGroup>{children}</ButtonGroup>
    </StyledBaseComponent>
  );
};

export default BaseButtonGroup;
