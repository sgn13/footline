import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ButtonGroup from '.';
import Button from '../Button';

storiesOf('ButtonGroup', module).add('primary', () => {
  return (
    <ButtonGroup>
      <Button>Click me </Button>
      <Button size="sm">Click Me</Button>
      <Button variant="warning">Click Me</Button>
      <Button variant="success">Click Me</Button>
    </ButtonGroup>
  );
});
