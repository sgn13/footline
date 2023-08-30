import BaseComponent from '../BaseComponent';
import { StyledAccordionType } from './types';
import { StyledBaseComponentType } from '../BaseComponent/types';
import React, { useState } from 'react';
import theme, { styled } from '../../theme/styled-components';
import { FaChevronDown } from 'react-icons/fa';

type BaseAccordionType = React.ComponentProps<'div'> &
  StyledAccordionType &
  StyledBaseComponentType & { ref?: any };

const StyledAccordionWrapper = styled.div`
  width: 300px;
  color: ${theme.color.white};
  padding: 10px;
  background-color: ${theme.color.steelGray};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const StyledContent = styled.div`
  padding: 10px;
  background-color: ${theme.color.spaceGray};
`;
const StyledArrow = styled(FaChevronDown)<{ isOpen?: boolean }>`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  transition: transform 200ms ease-in-out;
  ${({ isOpen }) => isOpen && `transform: rotate(180deg);`}
`;

const BaseAccordion: React.FC<BaseAccordionType> = (props) => {
  const {
    children,
    icon,
    title,
    name,
    label,
    required,
    errors,
    helpText,
    onClear,
    onClick,
    style,
    isOpen,
  } = props;
  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  return (
    <BaseComponent {...baseComponentProps}>
      <StyledAccordionWrapper onClick={onClick}>
        {icon} {title}
        <StyledArrow isOpen={isOpen} />
      </StyledAccordionWrapper>
      {isOpen && <StyledContent>{children}</StyledContent>}
    </BaseComponent>
  );
};

export default BaseAccordion;
