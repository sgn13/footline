import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import DataContainer from 'containers/DataContainer';

import { ViewModal, DeleteModal } from 'components/Modal';

import { AppState } from 'store/reducer';

import DataViewTable from 'components/DataViewTable';
import { app } from 'constants/url';

export const pageName = 'Example';

const columns = [];

const tableHeaders = [{ value: 'Name' }];

const renderTableData = (data) =>
  data.map((item) => [
    {
      value: item.id,
      hidden: true,
      type: 'key',
      styles: { width: '150px' },
    },
    { value: item.name },
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

const Example2Index: React.FC<PropsFromRedux> = ({}) => {
  const fetchFunction = ({}) => {
    return true;
  };
  const resetFunction = ({}) => {
    return true;
  };

  const deleteFunction = async ({}) => {
    return true;
  };
  const isLoading = false;
  const isSubmitting = false;
  const dataSource = [];
  const metadata = {};

  const history = useHistory();

  const [showModal, setShowModal] = useState(undefined);

  const [selected, setSelected] = useState(undefined);

  const handleModalShow = (mode) => setShowModal(mode);
  const handleModalClose = () => setShowModal(undefined);

  useEffect(() => {
    fetchFunction({});
  }, []);
  return (
    <>
      {selected && (
        <>
          <ViewModal
            show={showModal === 'view'}
            name={pageName}
            body={
              <>
                <DataViewTable data={[{ key: 'Name', value: selected.name }]} />
              </>
            }
            onClose={handleModalClose}
          />
          <DeleteModal
            show={showModal === 'delete'}
            name={pageName}
            onClick={async () =>
              (await deleteFunction({ pageId: selected.id })) && handleModalClose()
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
        dataSource={dataSource}
        renderTableData={renderTableData}
        renderCSVData={renderCSVData}
        funktion={fetchFunction}
        resetSearchFunction={resetFunction}
        permissions={[]}
        permission={''}
        isLoading={isLoading}
        metadata={metadata}
        onAdd={() => history.push(app.example2.create())}
        onRead={({ item }) => {
          const keyItem = item.find((item) => item.type === 'key');
          history.push(app.example2.view(keyItem.value));
        }}
        onUpdate={async ({ item }) => {
          const keyItem = item.find((item) => item.type === 'key');
          history.push(app.example2.update(keyItem.value));
        }}
        onDelete={({ item }) => {
          const keyItem = item.find((item) => item.type === 'key');
          const found = dataSource.find((info) => {
            return info.id === keyItem.value;
          });
          setSelected(found);
          handleModalShow('delete');
        }}
      />
    </>
  );
};

const mapStateToProps = ({}: AppState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Example2Index);
