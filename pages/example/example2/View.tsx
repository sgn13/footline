import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { AppState } from 'store/reducer';

import DataTable from 'containers/DataTable';

const View = ({ match }) => {
  const fetchFunction = ({}) => {
    return true;
  };

  const data: any = {};

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

  if (!pageData) {
    return <></>;
  }

  return <DataTable data={[{ key: 'Name', value: pageData.name }]} />;
};
const mapStateToProps = ({}: AppState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(View);
