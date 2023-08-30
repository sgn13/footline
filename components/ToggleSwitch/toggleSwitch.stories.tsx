import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';
import ToggleSwitch from '.';

storiesOf('Toggle Switch', module).add('default', () => {
  const [checked, setChecked] = useState(true);
  return <ToggleSwitch checked={checked} onClick={() => setChecked((prev) => !prev)} />;
});
