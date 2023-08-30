import { storiesOf } from '@storybook/react';
import * as React from 'react';
import TextArea from '.';

storiesOf('TextArea', module)
  .add('default', () => {
    return <TextArea placeholder="Enter some data" />;
  })
  .add('sm', () => {
    return <TextArea inputSize="sm" placeholder="Enter some data" />;
  })
  .add('md', () => {
    return <TextArea inputSize="md" placeholder="Enter some data" />;
  })
  .add('lg', () => {
    return <TextArea inputSize="lg" placeholder="Enter some data" />;
  });
