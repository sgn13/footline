import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import ExampleForm from './Form';

import { AppState } from 'store/reducer';

import { app } from 'constants/url';

const CreateExample: React.FC<PropsFromRedux & { match: any }> = ({ match }) => {
  const fetchFunction = ({}) => {
    return true;
  };

  const createFunction = async ({}) => {
    return true;
  };
  const updateFunction = async ({}) => {
    return true;
  };

  const isSubmitting = false;
  const data: any = {};

  const history = useHistory();
  const location = useLocation();

  const {
    params: { id },
  } = match;
  const params = new URLSearchParams(location.search);
  const pageId = id || params.get('id');

  const [pageData, setPageData] = useState(undefined);

  useEffect(() => {
    setPageData(data);
  }, [data, pageId]);

  useEffect(() => {
    if (pageId !== undefined && pageId !== null) {
      fetchFunction({ pageId: pageId });
    }
    if (pageId === undefined || pageId === null) {
      setPageData(undefined);
    }
  }, [pageId]);

  return (
    <ExampleForm
      formData={pageData}
      isSubmitting={isSubmitting}
      onBack={() => history.goBack()}
      onCreate={async (values, { resetForm }) => {
        if (await createFunction({ values })) {
          resetForm();
          window.location.href = app.example2.root;
        }
      }}
      onEdit={async (values, { resetForm }) => {
        if (
          await updateFunction({
            pageId: data.id,
            values,
          })
        ) {
          resetForm();
          window.location.href = app.example2.root;
        }
      }}
    />
  );
};

const mapStateToProps = ({}: AppState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CreateExample);
