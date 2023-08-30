import React from 'react';
import Button from 'components/Button/index';
import BaseDialogue from 'components/Dialog';
import DataTable from 'containers/DataTable';
export const ViewModal = ({ show, handleModalClose, title, data }) => {
  return (
    <>
      <BaseDialogue
        title={`View ${title}`}
        open={show}
        onClose={handleModalClose}
        actions={
          <Button size="sm" primary={false} onClick={handleModalClose}>
            Close
          </Button>
        }
      >
        <DataTable data={data}></DataTable>
      </BaseDialogue>
    </>
  );
};
