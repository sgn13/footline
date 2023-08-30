import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Input from '.';

storiesOf('Input', module)
  .add('default', () => {
    return <Input placeholder="Enter some data" />;
  })
  .add('sm', () => {
    return <Input inputSize="sm" placeholder="Enter some data" />;
  })
  .add('md', () => {
    return <Input inputSize="md" placeholder="Enter some data" />;
  })
  .add('lg', () => {
    return <Input inputSize="lg" placeholder="Enter some data" />;
  });
