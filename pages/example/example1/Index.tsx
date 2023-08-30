import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import DataContainer from 'containers/DataContainer';

import { ViewModal, DeleteModal, FormModal } from 'components/Modal';

import { AppState } from 'store/reducer';

import DataViewTable from 'components/DataViewTable';

import ExampleForm from './Form';
import permissions from 'constants/permissions';
import Button from 'components/Button';

export const pageName = 'Example';

const columns = [];

const tableHeaders = [{ value: 'Name' }, { value: 'Gender' }];

const renderTableData = (data) =>
  data.map((item) => [
    {
      value: item.id,
      hidden: true,
      type: 'key',
      styles: { width: '150px' },
    },
    { value: `${item.name.title}. ${item.name.first} ${item.name.last}` },
    { value: item.gender },
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

const Example1: React.FC<PropsFromRedux> = ({}) => {
  const fetchFunction = ({}) => {
    return true;
  };
  const resetFunction = ({}) => {
    return true;
  };
  const createFunction = async ({}) => {
    return true;
  };
  const updateFunction = async ({}) => {
    return true;
  };
  const deleteFunction = async ({}) => {
    return true;
  };
  const isLoading = false;
  const isSubmitting = false;
  const dataSource = [
    {
      gender: 'male',
      name: {
        title: 'mr',
        first: 'brad',
        last: 'gibson',
      },
      location: {
        street: '9278 new road',
        city: 'kilcoole',
        state: 'waterford',
        postcode: '93027',
        coordinates: {
          latitude: '20.9267',
          longitude: '-7.9310',
        },
        timezone: {
          offset: '-3:30',
          description: 'Newfoundland',
        },
      },
      email: 'brad.gibson@example.com',
      login: {
        uuid: '155e77ee-ba6d-486f-95ce-0e0c0fb4b919',
        username: 'silverswan131',
        password: 'firewall',
        salt: 'TQA1Gz7x',
        md5: 'dc523cb313b63dfe5be2140b0c05b3bc',
        sha1: '7a4aa07d1bedcc6bcf4b7f8856643492c191540d',
        sha256: '74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480',
      },
      dob: {
        date: '1993-07-20T09:44:18.674Z',
        age: 26,
      },
      registered: {
        date: '2002-05-21T10:59:49.966Z',
        age: 17,
      },
      phone: '011-962-7516',
      cell: '081-454-0666',
      id: {
        name: 'PPS',
        value: '0390511T',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/75.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      },
      nat: 'IE',
    },
    {
      gender: 'male',
      name: {
        title: 'mr',
        first: 'brad',
        last: 'gibson',
      },
      location: {
        street: '9278 new road',
        city: 'kilcoole',
        state: 'waterford',
        postcode: '93027',
        coordinates: {
          latitude: '20.9267',
          longitude: '-7.9310',
        },
        timezone: {
          offset: '-3:30',
          description: 'Newfoundland',
        },
      },
      email: 'brad.gibson@example.com',
      login: {
        uuid: '155e77ee-ba6d-486f-95ce-0e0c0fb4b919',
        username: 'silverswan131',
        password: 'firewall',
        salt: 'TQA1Gz7x',
        md5: 'dc523cb313b63dfe5be2140b0c05b3bc',
        sha1: '7a4aa07d1bedcc6bcf4b7f8856643492c191540d',
        sha256: '74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480',
      },
      dob: {
        date: '1993-07-20T09:44:18.674Z',
        age: 26,
      },
      registered: {
        date: '2002-05-21T10:59:49.966Z',
        age: 17,
      },
      phone: '011-962-7516',
      cell: '081-454-0666',
      id: {
        name: 'PPS',
        value: '0390511T',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/75.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      },
      nat: 'IE',
    },
    {
      gender: 'male',
      name: {
        title: 'mr',
        first: 'brad',
        last: 'gibson',
      },
      location: {
        street: '9278 new road',
        city: 'kilcoole',
        state: 'waterford',
        postcode: '93027',
        coordinates: {
          latitude: '20.9267',
          longitude: '-7.9310',
        },
        timezone: {
          offset: '-3:30',
          description: 'Newfoundland',
        },
      },
      email: 'brad.gibson@example.com',
      login: {
        uuid: '155e77ee-ba6d-486f-95ce-0e0c0fb4b919',
        username: 'silverswan131',
        password: 'firewall',
        salt: 'TQA1Gz7x',
        md5: 'dc523cb313b63dfe5be2140b0c05b3bc',
        sha1: '7a4aa07d1bedcc6bcf4b7f8856643492c191540d',
        sha256: '74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480',
      },
      dob: {
        date: '1993-07-20T09:44:18.674Z',
        age: 26,
      },
      registered: {
        date: '2002-05-21T10:59:49.966Z',
        age: 17,
      },
      phone: '011-962-7516',
      cell: '081-454-0666',
      id: {
        name: 'PPS',
        value: '0390511T',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/75.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      },
      nat: 'IE',
    },
    {
      gender: 'male',
      name: {
        title: 'mr',
        first: 'brad',
        last: 'gibson',
      },
      location: {
        street: '9278 new road',
        city: 'kilcoole',
        state: 'waterford',
        postcode: '93027',
        coordinates: {
          latitude: '20.9267',
          longitude: '-7.9310',
        },
        timezone: {
          offset: '-3:30',
          description: 'Newfoundland',
        },
      },
      email: 'brad.gibson@example.com',
      login: {
        uuid: '155e77ee-ba6d-486f-95ce-0e0c0fb4b919',
        username: 'silverswan131',
        password: 'firewall',
        salt: 'TQA1Gz7x',
        md5: 'dc523cb313b63dfe5be2140b0c05b3bc',
        sha1: '7a4aa07d1bedcc6bcf4b7f8856643492c191540d',
        sha256: '74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480',
      },
      dob: {
        date: '1993-07-20T09:44:18.674Z',
        age: 26,
      },
      registered: {
        date: '2002-05-21T10:59:49.966Z',
        age: 17,
      },
      phone: '011-962-7516',
      cell: '081-454-0666',
      id: {
        name: 'PPS',
        value: '0390511T',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/75.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
      },
      nat: 'IE',
    },
  ];
  const metadata = {};

  const [showModal, setShowModal] = useState(undefined);

  const [selected, setSelected] = useState(undefined);

  const handleModalShow = (mode) => setShowModal(mode);
  const handleModalClose = () => setShowModal(undefined);

  useEffect(() => {
    fetchFunction({});
  }, []);

  return (
    <>
      <FormModal
        show={showModal === 'create' || showModal === 'update'}
        name={pageName}
        formData={showModal === 'update' ? selected : null}
        onClose={handleModalClose}
      >
        <ExampleForm
          isSubmitting={isSubmitting}
          formData={showModal === 'update' ? selected : null}
          onCreate={async (values, { resetForm }) => {
            if (await createFunction({ values })) {
              setShowModal(false);
              resetForm();
            }
          }}
          onEdit={async (values, { resetForm }) => {
            if (
              await updateFunction({
                pageId: selected.id,
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
        permissions={[]}
        permission={permissions['']}
        isLoading={isLoading}
        metadata={metadata}
        resetSearchFunction={resetFunction}
        onAdd={() => handleModalShow('create')}
        onRead={({ item }) => {
          const keyItem = item.find((item) => item.type === 'key');
          const found = dataSource.find((info) => {
            return info.id === keyItem.value;
          });
          setSelected(found);
          handleModalShow('view');
        }}
        onUpdate={async ({ item }) => {
          const keyItem = item.find((item) => item.type === 'key');
          const found = dataSource.find((info) => {
            return info.id === keyItem.value;
          });
          setSelected(found);
          handleModalShow('update');
        }}
        onDelete={({ item }) => {
          const keyItem = item.find((item) => item.type === 'key');
          const found = dataSource.find((info) => {
            return info.id === keyItem.value;
          });
          setSelected(found);
          handleModalShow('delete');
        }}
        customTableAction={({ item }) => {
          const keyItem = item.find((item) => item.type === 'key');
          const found = dataSource.find((info) => {
            return info.id === keyItem.value;
          });

          return <Button size="sm">Action</Button>;
        }}
      />
    </>
  );
};

const mapStateToProps = ({}: AppState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Example1);
