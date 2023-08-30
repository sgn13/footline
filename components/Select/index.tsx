import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'theme/styled-components';
import BaseComponent from 'components/BaseComponent';
import { StyledBaseComponentType } from '../BaseComponent/types';

type StyledSelectType = { options; keyName; id; value; onChange; disabled };

type BaseSelectType = React.ComponentProps<'div'> &
  StyledSelectType &
  StyledBaseComponentType & { ref?: any };

const SelectWrapper = styled.div`
  position: relative;
  color: #333;
  cursor: default;
`;

const SelectArrow = styled.div<{ isOpen }>`
  border-color: #999 transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: ' ';
  display: block;
  height: 0;
  margin-top: 0.3rem;
  position: absolute;
  right: 10px;
  top: 14px;
  width: 0;

  ${({ isOpen }) =>
    isOpen &&
    ` border-color: transparent transparent #999;
      border-width: 0 5px 5px;`}
`;

const SelectOptions = styled.div<{ isOpen }>`
  display: none;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;

  ${({ isOpen }) =>
    isOpen &&
    ` display: block;
    `}
`;

const SelectInput = styled.input`
  line-height: 1.5;
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 10px;
  transition: all 200ms ease;
  width: 100%;
`;

const SelectOption = styled.div<{ isSelected }>`
  box-sizing: border-box;
  color: rgba(51, 51, 51, 0.8);
  cursor: pointer;
  display: block;
  padding: 8px 10px;

  &:hover {
    background-color: #f2f9fc;
    color: #333;
  }

  ${({ isSelected }) =>
    isSelected &&
    ` background-color: #f2f9fc;
      color: #333;
    `}
`;

const Select: React.FC<BaseSelectType> = (props) => {
  const {
    children,
    keyName,
    options = [],
    value,
    onChange,
    name,
    label,
    required,
    errors,
    helpText,
    onClear,
    disabled,
    style,
    icon,
  } = props;

  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', toggle);
    return () => document.removeEventListener('click', toggle);
  }, []);

  const toggle = (e) => setIsOpen(e && e.target === inputRef.current);

  const filter = (options) =>
    searchValue
      ? options.filter(
          (option) =>
            ((keyName ? option[keyName] : option) || '')
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) > -1,
        )
      : options;

  return (
    <BaseComponent {...baseComponentProps}>
      <SelectWrapper>
        <div className="control">
          <SelectInput
            ref={inputRef}
            type="text"
            value={(() => {
              if (searchValue) return searchValue;
              if (value) return keyName ? value[keyName] : value;

              return '';
            })()}
            onChange={(e) => {
              setSearchValue(e.target.value);
              onChange(null);
            }}
            disabled={disabled}
            onClick={toggle}
            autoComplete="."
          />
          <SelectArrow isOpen={isOpen} />
        </div>

        <SelectOptions isOpen={disabled ? false : isOpen}>
          {filter(options).map((option, index) => {
            return (
              <SelectOption
                onClick={() => {
                  setSearchValue(() => '');
                  onChange(option);
                  setIsOpen((prev) => !prev);
                }}
                isSelected={keyName ? option[keyName] === value : option === value}
              >
                {keyName ? option[keyName] : option}
              </SelectOption>
            );
          })}
        </SelectOptions>
      </SelectWrapper>
    </BaseComponent>
  );
};

export default Select;
