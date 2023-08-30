import { storiesOf } from '@storybook/react';
import * as React from 'react';
import NepaliCalendar from './index';

storiesOf('Nepali Calendar', module).add('default', () => {
  return <NepaliCalendar />;
});
