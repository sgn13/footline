import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';
import Radio from '.';

storiesOf('Radio', module).add('default', () => {
  const [checked, setChecked] = useState(true);
  return <Radio checked={checked} onClick={() => setChecked((prev) => !prev)} radioLabel="Radio" />;
});
