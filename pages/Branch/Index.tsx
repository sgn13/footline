import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import DataContainer from 'containers/DataContainer';

import { ViewModal, DeleteModal, FormModal } from 'components/Modal';

import { AppState } from 'store/reducer';
import {
  createBranch,
  updateBranch,
  fetchBranchs,
  deleteBranch,
  resetSearchedBranchsData,
} from 'store/branch/actions';

import DataViewTable from 'components/DataViewTable';

import BranchForm from './Form';
import permissions from 'constants/permissions';

export const pageName = 'Branch';

const columns = ['id', 'name'];

const tableHeaders = [{ value: 'Name' }];

const renderTableData = (data) =>
  data.map((item) => [
    {
      value: item.id,
      hidden: true,
      type: 'key',
      styles: { width: '150px' },
    },
    {
      value: item.name,
    },
  ]);
const csvHeaders = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
];

const renderCSVData = (data) =>
  data.map((item) => ({
    id: item.id,
    name: item.name,
  }));

const BranchIndex: React.FC<PropsFromRedux> = ({
  fetchBranchs,
  deleteBranch,
  resetSearchedBranchsData,
  createBranch,
  updateBranch,
  me,
  isLoading = false,
  isSubmitting = false,
  branchs = [],
  branch,
  searchedBranchs = [],
  metadata,
}) => {
  const [showModal, setShowModal] = useState(undefined);

  const [selected, setSelected] = useState(undefined);

  const handleModalShow = (mode) => setShowModal(mode);
  const handleModalClose = () => setShowModal(undefined);

  useEffect(() => {
    fetchBranchs({});
  }, []);
  return (
    <>
      <FormModal
        show={showModal === 'create' || showModal === 'update'}
        name={pageName}
        formData={showModal === 'update' ? selected : null}
        onClose={handleModalClose}
      >
        <BranchForm
          isSubmitting={isSubmitting}
          formData={showModal === 'update' ? selected : null}
          onCreate={async (values, { resetForm }) => {
            if (await createBranch({ values })) {
              setShowModal(false);
              resetForm();
            }
          }}
          onEdit={async (values, { resetForm }) => {
            if (
              await updateBranch({
                branchId: selected.id,
                values,
              })
            ) {
              setShowModal(false);
              resetForm();
            }
          }}
          onBack={handleModalClose}
        />
      </FormModal>
      {selected && (
        <>
          <ViewModal
            show={showModal === 'view'}
            name={pageName}
            body={
              <>
                <DataViewTable data={[{ key: 'Name :', value: selected.name }]} />
                {selected.bannerurl && <img src={selected.bannerurl} style={{ width: '400px' }} />}
                {selected.documenturl && (
                  <img src={selected.documenturl} style={{ width: '400px' }} />
                )}
              </>
            }
            onClose={handleModalClose}
          />
          <DeleteModal
            show={showModal === 'delete'}
            name={pageName}
            onClick={async () =>
              (await deleteBranch({ branchId: selected.id })) && handleModalClose()
            }
            onClose={handleModalClose}
            isSubmitting={isSubmitting}
          />
        </>
      )}
      <DataContainer
        name={pageName}
        tableHeaders={tableHeaders}
        csvHeaders={csvHeaders}
        columns={columns}
        dataSource={branchs}
        renderTableData={renderTableData}
        renderCSVData={renderCSVData}
        funktion={fetchBranchs}
        permissions={me ? me.permissions : []}
        permission={permissions.administration.branch}
        isLoading={isLoading}
        metadata={metadata}
        resetSearchFunction={resetSearchedBranchsData}
        onAdd={() => handleModalShow('create')}
        onRead={({ item }) => {
          const keyItem = item.find((item) => item.type === 'key');
          const found = branchs.find((info) => {
            return info.id === keyItem.value;
          });
          setSelected(found);
          handleModalShow('view');
        }}
        onUpdate={async ({ item }) => {
          const keyItem = item.find((item) => item.type === 'key');
          const found = branchs.find((info) => {
            return info.id === keyItem.value;
          });
          setSelected(found);
          handleModalShow('update');
        }}
        onDelete={({ item }) => {
          const keyItem = item.find((item) => item.type === 'key');
          const found = branchs.find((info) => {
            return info.id === keyItem.value;
          });
          setSelected(found);
          handleModalShow('delete');
        }}
      />
    </>
  );
};

const mapStateToProps = ({
  appState: { me },
  branchState: { isLoading, isSubmitting, branchs, branch, searchedBranchs, metadata },
}: AppState) => ({
  me,
  isLoading,
  isSubmitting,
  branch,
  branchs,
  searchedBranchs,
  metadata,
  permission: [],
});

const mapDispatchToProps = {
  fetchBranchs,
  deleteBranch,
  createBranch,
  updateBranch,
  resetSearchedBranchsData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(BranchIndex);
