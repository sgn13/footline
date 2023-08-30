import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ColorPicker from '.';

storiesOf('ColorPicker', module).add('default', () => {
  const [value, setValue] = React.useState<string>();
  return (
    <ColorPicker value={value} onChange={(data) => setValue(data)}>
      Click Me
    </ColorPicker>
  );
});
