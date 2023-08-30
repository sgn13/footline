import React from 'react';
import BaseComponent from 'components/BaseComponent';

const Switch = ({ ...attributes }) => (
  <BaseComponent {...attributes}>
    <label className="base__switch">
      <input type="checkbox" {...attributes} />
      <span className="base__switch-slider round"></span>
    </label>
  </BaseComponent>
);

export default Switch;
