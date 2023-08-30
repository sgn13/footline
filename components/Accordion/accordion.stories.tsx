import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Accordion from '.';

storiesOf('Accordion', module).add('default', () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Accordion title="Title" isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
      Contents ...
    </Accordion>
  );
});
