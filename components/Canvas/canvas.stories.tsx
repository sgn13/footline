import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Canvas from '.';

storiesOf('Canvas', module).add('default', () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas />
    </div>
  );
});
