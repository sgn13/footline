import React from 'react';

import Dropdown from '.';

export default {
  title: 'Dropdown',
  component: Dropdown
};

const Template = args => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'gender',
  label: 'Gender',
  placeholder: 'Gender',
  list: [{ name: 'Male' }, { name: 'Female' }]
};
