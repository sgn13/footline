import { storiesOf } from '@storybook/react';
import * as React from 'react';
import PasswordGenerator from '.';

storiesOf('Password Generator', module).add('default', () => {
  const [value, setValue] = React.useState('');
  return <PasswordGenerator placeholder="Enter password" value={value} setValue={setValue} />;
});
