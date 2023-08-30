import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';
import Checkbox from '.';

storiesOf('Checkbox', module).add('default', () => {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      checked={checked}
      onClick={() => setChecked((prev) => !prev)}
      checkboxLabel="Checkbox"
    />
  );
});
