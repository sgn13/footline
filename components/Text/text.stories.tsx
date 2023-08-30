import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Text from '.';

import { FaCheckCircle } from 'react-icons/fa';

storiesOf('Text', module)
  .add('text', () => {
    return <Text type="text">Click Me</Text>;
  })
  .add('label', () => {
    return <Text type="label">Click Me</Text>;
  })
  .add('help', () => {
    return <Text type="help">Click Me</Text>;
  })
  .add('error', () => {
    return <Text type="error">Click Me</Text>;
  })
  .add('with icon', () => {
    return <Text icon={<FaCheckCircle />}>Text Element</Text>;
  })
  .add('required', () => {
    return <Text required>Text Element</Text>;
  });
