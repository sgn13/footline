import React, { useRef } from 'react';

import Dialog from 'components/Dialog/index';

import Button from 'components/Button/index';
import ButtonGroup from 'components/ButtonGroup';
import { styled } from 'theme/styled-components';

export const DeleteModal = ({ name, show, onClose, onClick, isSubmitting = false }) => {
  return (
    <Dialog
      title={`Delete ${name}`}
      open={show}
      onClose={onClose}
      actions={
        <>
          <Button
            size="sm"
            className="mr-4"
            variant="danger"
            onClick={onClick}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting' : 'Delete'}
          </Button>
          {!isSubmitting && (
            <Button size="sm" variant="secondary" onClick={onClose} disabled={isSubmitting}>
              Close
            </Button>
          )}
        </>
      }
    >
      Are you sure you want to delete this {name} ?
    </Dialog>
  );
};

export const ViewModal = ({ name, body, show, onClose }) => {
  return (
    <Dialog
      title={`View ${name}`}
      open={show}
      onClose={onClose}
      actions={
        <ButtonGroup>
          <Button size="sm" variant="secondary" onClick={onClose}>
            Close
          </Button>
        </ButtonGroup>
      }
    >
      {body}
    </Dialog>
  );
};

export const FormModal = ({ name, show, onClose, formData = undefined, children }) => {
  return (
    <Dialog title={`${formData ? 'Update' : 'Create'} ${name}`} open={show} onClose={onClose}>
      {children}
    </Dialog>
  );
};
