import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Avatar from '.';

storiesOf('Avatar', module).add('primary', () => {
  return <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />;
});
