import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Dialog from '.';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

storiesOf('Dialog', module).add('default', () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <div>
      <Button primary onClick={() => setShowDialog(!showDialog)}>
        Open dialog
      </Button>
      <Dialog
        title="Default dialog"
        open={showDialog}
        onClose={() => setShowDialog(false)}
        actions={
          <ButtonGroup>
            <Button size="sm" onClick={() => setShowDialog(false)}>
              Cancel
            </Button>
            <Button variant="danger" size="sm">
              Okay
            </Button>
          </ButtonGroup>
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque quibusdam excepturi sint
        molestiae iure quisquam at commodi officia. Quod. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quod, illo! Distinctio, repellat ut.
      </Dialog>
    </div>
  );
});
