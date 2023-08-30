import { storiesOf } from '@storybook/react';
import * as React from 'react';
import BaseComponent from '.';

import { FaCheckCircle } from 'react-icons/fa';

storiesOf('BaseComponent', module).add('default', () => {
  return (
    <BaseComponent
      name="base"
      icon={<FaCheckCircle />}
      label="Base"
      errors={{ base: 'Error' }}
      helpText="Help"
      onClear={() => {
        return true;
      }}
    >
      Element
    </BaseComponent>
  );
});
