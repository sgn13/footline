import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Button from '.';

storiesOf('Button', module)
  .add('primary', () => {
    return <Button>Click Me</Button>;
  })
  .add('secondary', () => {
    return <Button primary={false}>Click Me</Button>;
  })
  .add('sm button', () => {
    return <Button size="sm">Click Me</Button>;
  })
  .add('md button', () => {
    return <Button size="md">Click Me</Button>;
  })
  .add('lg button', () => {
    return <Button size="lg">Click Me</Button>;
  })
  .add('success', () => {
    return <Button variant="success">Click Me</Button>;
  })
  .add('danger', () => {
    return <Button variant="danger">Click Me</Button>;
  })
  .add('warning', () => {
    return <Button variant="warning">Click Me</Button>;
  })
  .add('info', () => {
    return <Button variant="info">Click Me</Button>;
  })
  .add('transparent', () => {
    return <Button transparent>Click Me</Button>;
  })
  .add('with icon', () => {
    return <Button icon={<FaCheckCircle />}>Click Me</Button>;
  })
  .add('dropdown', () => {
    return <Button dropdown>Click Me</Button>;
  });
