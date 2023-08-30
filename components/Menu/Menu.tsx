import { StyledMenuType } from './types';
import React, { useRef, useState } from 'react';
import theme, { styled } from '../../theme/styled-components';
import { FaChevronDown } from 'react-icons/fa';
import BaseMenuItem from './MenuItem';
import BaseComponent from '../BaseComponent';
import { StyledBaseComponentType } from '../BaseComponent/types';
import { SizeType } from '../../types/component';

type BaseMenuType = StyledMenuType & StyledBaseComponentType;

const StyledMenu = styled.div`
  position: relative;

  min-width: 200px;

  font-size: 1rem;

  user-select: none;
`;

const StyledMenuButton = styled.button<{ size?: SizeType }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  border: 1px solid rgb(223, 223, 223);
  border-radius: 3px;

  background-color: ${theme.color.white};

  cursor: pointer;

  padding: ${({ size }) =>
    size === 'lg' ? '0.6em .45em' : size === 'md' ? '0.5em 0.35em' : '0.4em .25em'};

  font-size: ${({ size }) => (size === 'lg' ? 1.5 : size === 'md' ? 1.25 : 1)}rem;
`;

const StyledMenuHeader = styled.div`
  margin: 2px 12px;
  font-weight: 300;
`;

const StyledArrow = styled(FaChevronDown)<{ isOpen?: boolean }>`
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  transition: transform 200ms ease-in-out;

  ${({ isOpen }) => isOpen && `transform: rotate(180deg);`}
`;

const StyledMenuList = styled.div<{ minItemWidth?: number }>`
  min-width: ${({ minItemWidth }) => `${minItemWidth}px`};

  position: absolute;
  z-index: 10;
  max-height: 215px;
  border: 1px solid rgb(223, 223, 223);
  border-top: none;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 2px 5px -1px rgb(232, 232, 232);
  background-color: white;
  font-weight: 700;
  text-align: left;
  -webkit-overflow-scrolling: touch;
`;

const StyledMenuListScroll = styled.div`
  overflow-y: auto;
  max-height: 215px;

  ${theme.mixin.scrollbar({ size: '0.5em', foregroundColor: 'slategray' })};
`;

const BaseMenu: React.FC<BaseMenuType> = (props) => {
  const {
    children,
    list = [],
    value = { label: '', value: '' },
    onOptionChange,
    placeholder,
    name,
    label,
    required,
    errors,
    helpText,
    onClear,
    style,
    icon,
    size = 'md',
  } = props;

  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  const menuHeaderRef: any = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const minItemWidth =
    (menuHeaderRef &&
      menuHeaderRef.current &&
      menuHeaderRef.current.getBoundingClientRect().width) ||
    null;

  return (
    <BaseComponent {...baseComponentProps}>
      <StyledMenu {...props}>
        <StyledMenuButton
          ref={menuHeaderRef}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          size={size}
        >
          <StyledMenuHeader>{value.label || placeholder}</StyledMenuHeader>
          <StyledArrow isOpen={isMenuOpen} />
        </StyledMenuButton>
        {isMenuOpen &&
          (children || (
            <StyledMenuList minItemWidth={minItemWidth}>
              <StyledMenuListScroll>
                {list.map((listItem, listItemIndex) => {
                  return (
                    <BaseMenuItem
                      menuHeaderRef={menuHeaderRef}
                      key={listItemIndex}
                      selected={value.value === listItem.value}
                      onClick={() => {
                        onOptionChange(listItem);
                        setIsMenuOpen(false);
                      }}
                      size={size}
                    >
                      {listItem.label}
                    </BaseMenuItem>
                  );
                })}
              </StyledMenuListScroll>
            </StyledMenuList>
          ))}
      </StyledMenu>
    </BaseComponent>
  );
};

export default BaseMenu;
