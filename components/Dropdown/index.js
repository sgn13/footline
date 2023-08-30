import React, { useEffect, useState } from 'react';

import { Dropdown as BSDropdown } from 'react-bootstrap';

import BaseComponent from 'components/BaseComponent';
import Button from 'components/Button/index';

const Dropdown = ({
  placeholder,
  value,
  onChange,
  list = [],
  disabled = false,
  ddLabel,
  accessor,
  onHeaderButtonClick,
  headerButtonText,
  headerButtonIcon,

  ...attributes
}) => {
  const { lang, label } = attributes;

  const [place, setPlace] = useState();

  useEffect(() => {
    setPlace(getPlaceholder());
  }, [lang, value]);

  const getPlaceholder = () => {
    if (value) {
      if (accessor) {
        if (value[`${accessor}`]) {
          if (lang) {
            return value[`${accessor}`][lang];
          } else {
            return value[`${accessor}`];
          }
        }
      } else {
        if (lang) {
          return value[lang];
        } else {
          return value;
        }
      }
    } else {
      return placeholder;
    }
  };

  const getItem = (item) => {
    if (accessor) {
      if (item[`${accessor}`]) {
        if (lang) {
          return item[`${accessor}`][lang];
        } else {
          return item[`${accessor}`];
        }
      }
    } else {
      if (lang) {
        return item[lang];
      } else {
        return item;
      }
    }

    return;
  };

  return (
    <BaseComponent {...attributes}>
      <BSDropdown id="base__dropdown" className="btn-group">
        <BSDropdown.Toggle color="secondary " disabled={disabled}>
          {place}
        </BSDropdown.Toggle>
        <BSDropdown.Menu>
          {onHeaderButtonClick && (
            <Button onClick={onHeaderButtonClick} icon={headerButtonIcon}>
              {headerButtonText}
            </Button>
          )}
          {ddLabel && <BSDropdown.Item header>{ddLabel}</BSDropdown.Item>}
          {list.map((item, i) => (
            <BSDropdown.Item key={i} onClick={() => onChange(item)}>
              {getItem(item)}
            </BSDropdown.Item>
          ))}
        </BSDropdown.Menu>
      </BSDropdown>
    </BaseComponent>
  );
};

export default Dropdown;
