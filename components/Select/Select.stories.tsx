import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Select from '.';

storiesOf('Select', module).add('default', () => {
  const [value, setValue] = React.useState('');
  value;
  return (
    <Select
      options={[
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
        { id: 4, name: 'Option 4' },
        { id: 5, name: 'Option 5' },
      ]}
      keyName="name"
      value={value}
      onChange={(val) => setValue(val)}
    />
  );
});
