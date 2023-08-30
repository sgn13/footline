import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';
import Navbar from '.';

storiesOf('Navbar', module).add('default', () => {
  const [checked, setChecked] = useState(true);
  return <Navbar checked={checked} onClick={() => setChecked((prev) => !prev)} />;
});
