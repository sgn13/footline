import { storiesOf } from '@storybook/react';
import * as React from 'react';
import BaseMenu from './Menu';
import MenuItem from './MenuItem';

import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import { StyledMenuOptionType } from './types';

const list = [
  { label: 'Nepal', value: 'ne' },
  { label: 'USA', value: 'us' },
  { label: 'China', value: 'cn' },
  { label: 'Japan', value: 'jp' },
  { label: 'India', value: 'in' },
  { label: 'Malaysia', value: 'my' },
];

storiesOf('Menu', module)
  .add('sm', () => {
    const [value, setValue] = useState<StyledMenuOptionType>();

    return (
      <BaseMenu
        size="sm"
        list={list}
        value={value}
        onOptionChange={(data) => setValue(data)}
        placeholder="Select a country"
      />
    );
  })
  .add('md', () => {
    const [value, setValue] = useState<StyledMenuOptionType>();

    return (
      <BaseMenu
        size="md"
        list={list}
        value={value}
        onOptionChange={(data) => setValue(data)}
        placeholder="Select a country"
      />
    );
  })
  .add('lg', () => {
    const [value, setValue] = useState<StyledMenuOptionType>();

    return (
      <BaseMenu
        size="lg"
        list={list}
        value={value}
        onOptionChange={(data) => setValue(data)}
        placeholder="Select a country"
      />
    );
  });

storiesOf('Menu Item', module)
  .add('default', () => {
    return <MenuItem>Menu Item</MenuItem>;
  })
  .add('secondary', () => {
    return <MenuItem>Menu Item</MenuItem>;
  })
  .add('sm button', () => {
    return <MenuItem>Menu Item</MenuItem>;
  })
  .add('md button', () => {
    return <MenuItem>Menu Item</MenuItem>;
  })
  .add('lg button', () => {
    return <MenuItem>Menu Item</MenuItem>;
  })
  .add('success', () => {
    return <MenuItem type="success">Menu Item</MenuItem>;
  })
  .add('danger', () => {
    return <MenuItem type="danger">Menu Item</MenuItem>;
  })
  .add('warning', () => {
    return <MenuItem type="warning">Menu Item</MenuItem>;
  })
  .add('info', () => {
    return <MenuItem type="info">Menu Item</MenuItem>;
  })
  .add('light', () => {
    return <MenuItem type="light">Menu Item</MenuItem>;
  })
  .add('dark', () => {
    return <MenuItem type="dark">Menu Item</MenuItem>;
  })
  .add('with icon', () => {
    return <MenuItem icon={<FaCheckCircle />}>Menu Item</MenuItem>;
  })
  .add('selected', () => {
    return <MenuItem selected>Menu Item</MenuItem>;
  });
