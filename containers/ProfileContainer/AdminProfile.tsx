import ProfileContainer from 'containers/ProfileContainer/Index';
import ProfileDataTable from 'containers/ProfileDataTable';
import React from 'react';

export const AddressView = ({ address }) => (
  <ProfileDataTable
    data={[
      {
        key: 'Province',
        value: address.province,
      },
      {
        key: 'District',
        value: address.district,
      },

      {
        key: 'Municipality',
        value: address.municipality,
      },

      {
        key: 'Street_name',
        value: address.street_name,
      },
      {
        key: 'Ward No',
        value: address.ward_no,
      },
      {
        key: 'House No',
        value: address.house_no,
      },
    ]}
  />
);

const AdminProfile = ({ admin, email }) => {
  return (
    <ProfileContainer
      title={`${email}`}
      subTitle="Admin"
      data={[
        { key: 'Gender', value: admin.gender },
        { key: 'Date of birth', value: admin.dob },
        { key: 'Address', value: admin.address },
        { key: 'Contact', value: admin.contact },
        { key: 'Status', value: admin.status },
      ]}
    />
  );
};

export const AdminProfileTable = ({ admin }) => {
  return (
    <ProfileDataTable
      data={[
        {
          key: 'Full name ',
          value: `${admin.first_name} ${admin.middle_name} ${admin.last_name}`,
        },

        {
          key: 'Permanent Address ',
          value: (
            <>{admin.permanent_address && <AddressView address={admin.permanent_address} />}</>
          ),
        },
        {
          key: 'Temporary Address ',
          value: (
            <>{admin.temporary_address && <AddressView address={admin.temporary_address} />}</>
          ),
        },
      ]}
    />
  );
};

export default AdminProfile;
